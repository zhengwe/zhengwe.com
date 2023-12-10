---
slug: nginx
title: Nginx 常用配置
authors: [innocence]
tags: [linux]
---

### 获取客户端真实IP、域名、协议、端口
```bash
proxy_set_header Host $http_host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Proto $scheme;
```
- `Host` 包含客户端真实的域名和端口号；
- `X-Forwarded-Proto` 表示客户端真实的协议；
- `X-Real-IP` 表示客户端真实的IP；
- `X-Forwarded-For` 和 `X-Real-IP` 类似，但它在多层代理时会包含真实客户端及中间每个代理服务器的IP；

### 负载均衡配置
在`fail_timeout`时间内失败了`max_fails`次请求后，将该服务地址剔除掉，`fail_tiemout`时间后会再次将该服务器加入存活列表，进行重试
```bash
http {
    upstream server_name {
    server IP:Port weight=1 max_fails=2 fail_timeout=60s;
    server IP:Port weight=2 max_fails=2 fail_timeout=60s;
    }
    server {
        listen  80;
        location / {
            proxy_pass http://server_name;
        }
    }
}
```

### 静态资源缓存
```bash
location ~* .(gif|jpg|jpeg|bmp|png|ico|txt|js|css)$ {
    expires      3d;
    add_header Static Nginx-Proxy;
}
```

### 动态黑名单
- 一般配置
```bash
location / {
    deny  192.168.1.1;
    deny  192.168.1.0/24;
    allow 10.0.0.0/16;
    allow 2001:0db8::/32;
    deny  all;
}
```

- Lua+Redis动态黑名单(OpenResty)
```bash
yum install yum-utils
yum-config-manager --add-repo https://openresty.org/package/centos/openresty.repo
yum install openresty
yum install openresty-resty
yum --disablerepo="*" --enablerepo="openresty" list available
service openresty start
```
配置(/usr/local/openresty/nginx/conf/nginx.conf)
```bash
lua_shared_dict ip_blacklist 1m;

server {
    listen  80;

    location / {
        access_by_lua_file lua/ip_blacklist.lua;
        proxy_pass http://server_name;
    }
}
```
**ip_blacklist.lua**
```bash
local redis_host    = "192.168.1.100"
local redis_port    = 6379
local redis_pwd     = 123456
local redis_db = 1

-- connection timeout for redis in ms.
local redis_connection_timeout = 100

-- a set key for blacklist entries
local redis_key     = "ip_blacklist"

-- cache lookups for this many seconds
local cache_ttl     = 60

-- end configuration

local ip                = ngx.var.remote_addr
local ip_blacklist      = ngx.shared.ip_blacklist
local last_update_time  = ip_blacklist:get("last_update_time");

-- update ip_blacklist from Redis every cache_ttl seconds:
if last_update_time == nil or last_update_time < ( ngx.now() - cache_ttl ) then

  local redis = require "resty.redis";
  local red = redis:new();

  red:set_timeout(redis_connect_timeout);

  local ok, err = red:connect(redis_host, redis_port);
  if not ok then
    ngx.log(ngx.ERR, "Redis connection error while connect: " .. err);
  else
    local ok, err = red:auth(redis_pwd)
    if not ok then
      ngx.log(ngx.ERR, "Redis password error while auth: " .. err);
    else
        local new_ip_blacklist, err = red:smembers(redis_key);
        if err then
            ngx.log(ngx.ERR, "Redis read error while retrieving ip_blacklist: " .. err);
        else
        ngx.log(ngx.ERR, "Get data success:" .. new_ip_blacklist)
          -- replace the locally stored ip_blacklist with the updated values:
            ip_blacklist:flush_all();
          for index, banned_ip in ipairs(new_ip_blacklist) do
            ip_blacklist:set(banned_ip, true);
          end
          -- update time
          ip_blacklist:set("last_update_time", ngx.now());
      end
    end
  end
end

if ip_blacklist:get(ip) then
  ngx.log(ngx.ERR, "Banned IP detected and refused access: " .. ip);
  return ngx.exit(ngx.HTTP_FORBIDDEN);
end
```

### nginx 的转发规则
```bash
location [=|~|~*|^~] /uri/ { ... }
```
- `=` 严格匹配，如果请求匹配这个location，那么将停止搜索立即处理请求
- `~` 区分大小写匹配（可用正则表达式）
- `~*` 不区分大小写匹配（可用正则表达式）
- `!~` 区分大小写不匹配
- `!~*` 不区分大小写不匹配
- `^~` 如果把这个前缀用于一个常规字符串,那么告诉nginx如果路径匹配那么不测试正则表达式

### nginx.conf 配置
```bash
user  nginx;
worker_processes  auto;
worker_rlimit_nofile  65535;

pid        /var/run/nginx.pid;
events {
    worker_connections  65535;
    multi_accept on;
    use epoll;
}
http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;
    log_format  main  '[$time_local] RemoteAddr:"$remote_addr" RemoteUser:"$remote_user" Host:"$host" '
                      'RequestUil:"$request" HttpStatus:"$status" BodyBytesSent:"$body_bytes_sent" '
                      'HttpReferer:"$http_referer" HttpUserAgent:"$http_user_agent" '
                      'Http_X_ForwardedFor:"$http_x_forwarded_for" UpstreamResponseTime:"$upstream_response_time" '
                      'UpstreamAddr:"$upstream_addr" RequestTime:"$request_time" --- $server_port';
    log_format  json  '{'
        '"RemoteAddr":"$remote_addr",'
        '"RemoteUser":"$remote_user",'
        '"TimeLocal":"$time_local",'
        '"RequestUil":"$request",'
        '"HttpHost":"$http_host"'
        '"HttpStatus":"$status",'
        '"BodyBytesSent":"$body_bytes_sent",'
        '"HttpReferer":"$http_referer",'
        '"HttpUserAgent":"$http_user_agent",'
        '"Http_X_ForwardedFor":"$http_x_forwarded_for",'
        '"SslProtocol":"$ssl_protocol"'
        '"SslCipher":"$ssl_cipher"'
        '"UpstreamResponseTime":"$upstream_response_time",'
        '"UpstreamAddr":"$upstream_addr",'
        '"RequestTime":"$request_time",'
    '}';

    access_log /data/logs/access.log  main;
    error_log  /data/logs/error.log error;

    access_log                      off;
    server_tokens                   off;
    sendfile                         on;
    tcp_nopush                       on;
    tcp_nodelay                      on;
    send_timeout                    300;
    keepalive_timeout               300;
    resolver_timeout                 60;
    server_names_hash_max_size      512;
    server_names_hash_bucket_size   128;

    client_body_timeout             300;
    client_header_timeout           300;
    client_header_buffer_size      512k;
    client_max_body_size           300m;
    large_client_header_buffers  8  32k;
    client_body_buffer_size        256k;

    fastcgi_connect_timeout         300;
    fastcgi_send_timeout            300;
    fastcgi_read_timeout            300;
    fastcgi_buffer_size            128k;
    fastcgi_buffers          8     256k;
    fastcgi_busy_buffers_size      256k;
    fastcgi_temp_file_write_size   256k;
    fastcgi_temp_path /tmp/ngx_fcgi_tmp;
    fastcgi_cache_path /tmp/fcgi_cache_path levels=1:2 keys_zone=ngx_fcgi_cache:512m inactive=1d max_size=10g;

    gzip  on;
    gzip_http_version   1.1;
    gzip_min_length      1k;
    gzip_buffers 4      16k;
    gzip_comp_level       9;
    gzip_types text/plain application/json application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
    gzip_vary            on;
    gzip_disable "MSIE [1-6]\.";

    proxy_http_version           1.1;
    proxy_set_header Connection   "";
    proxy_set_header     Host  $host;
    proxy_connect_timeout        300;
    proxy_read_timeout           300;
    proxy_send_timeout           300;
    proxy_buffering               on;
    proxy_buffer_size           128k;
    proxy_buffers            8  128k;
    proxy_busy_buffers_size     256k;
    proxy_temp_file_write_size  256k;
    proxy_temp_path  /tmp/proxy_temp_path;
    proxy_cache_path /tmp/proxy_cache_path levels=1:2 keys_zone=ngx_proxy_cache:512m inactive=1d max_size=10g;
    include /etc/nginx/conf.d/*.conf;
}
include /etc/nginx/stream.d/*.conf;
```

### stream 配置
```bash
stream {
    upstream server_name {
        server  IP:Port;
    }
    server {
        listen Port;
        proxy_pass server_name;
        proxy_connect_timeout 1h;
        proxy_timeout 1h;
    }
}
```

### server 配置
```bash
server {
    listen   80;
    listen   81;
    server_name 127.0.0.1  example.com;
    index  index.php index.html index.htm;
    root /data/www;
    charset utf-8;
    access_log  /data/logs/example.com.log  main;

    location / {
        if (!-e $request_filename) {
            rewrite ^/(.*) /index.php?$1 last;
        }
    }
    location /xxx/ {
        if ($arg_icpid = "4pd1mtsDhfe" ) {
            proxy_pass http://127.0.0.1:38888/test$request_uri&tbid=aldIthSBg04;
        }
        proxy_pass http://127.0.0.1:9302;
    }
    location /xxx/ {
        proxy_pass http://127.0.0.1:38888/;
    }
    location ~ \.php$ {
        fastcgi_param  REMOTE_ADDR $http_x_real_ip;
        fastcgi_param LY_ADDRESS $remote_addr;
        fastcgi_pass   unix:/dev/shm/php-cgi.sock;
        fastcgi_index  index.php;
        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        fastcgi_param  SERVERNAME     $hostname;
        include        fastcgi_params;
   }
   location = /favicon.ico {
        log_not_found off;
        access_log off;
   }
   location = /robots.txt {
        allow all;
        log_not_found off;
        access_log off;
   }
}

server {
    listen   80;
    listen   443 ssl;
    server_name  example.com;
    charset utf-8;
    access_log  /data/logs/example.com.log main;

    ssl_certificate   /etc/nginx/cert/example.com.pem;
    ssl_certificate_key  /etc/nginx/cert/example.com.key;
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;

    location / {
        proxy_pass http://127.0.0.1:38888;
    }
    location = /favicon.ico {
        log_not_found off;
        access_log off;
    }
    location = /robots.txt {
        allow all;
        log_not_found off;
        access_log off;
    }
}
```