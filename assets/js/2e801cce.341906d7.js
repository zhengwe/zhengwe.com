"use strict";(self.webpackChunkzhengwe=self.webpackChunkzhengwe||[]).push([[450],{6029:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"etcd","metadata":{"permalink":"/etcd","source":"@site/blog/2023-12-25/index.md","title":"Etcd \u5907\u4efd\u4e0e\u6062\u590d","description":"\u67e5\u770b\u96c6\u7fa4\u72b6\u6001","date":"2023-12-25T00:00:00.000Z","formattedDate":"December 25, 2023","tags":[{"label":"kubernetes","permalink":"/tags/kubernetes"}],"readingTime":0.855,"hasTruncateMarker":false,"authors":[{"name":"Innocence","title":"zheng wei","url":"https://github.com/zhengwe.com","imageURL":"https://zhengwe.com/img/logo.svg","key":"innocence"}],"frontMatter":{"slug":"etcd","title":"Etcd \u5907\u4efd\u4e0e\u6062\u590d","authors":["innocence"],"tags":["kubernetes"]},"nextItem":{"title":"Mysql \u5e38\u7528\u8bed\u53e5","permalink":"/mysql"}},"content":"#### \u67e5\u770b\u96c6\u7fa4\u72b6\u6001\\n```bash\\n$ ETCDCTL_API=3 etcdctl --cacert=/opt/kubernetes/ssl/ca.pem --cert=/opt/kubernetes/ssl/server.pem --key=/opt/kubernetes/ssl/server-key.pem --endpoints=https://10.0.1.2:2379,https://10.0.1.3:2379,https://10.0.1.4:2379 endpoint health\\n\\nhttps://10.0.1.2:2379 is healthy: successfully committed proposal: took = 1.698385ms \\nhttps://10.0.1.3:2379 is healthy: successfully committed proposal: took = 1.577913ms \\nhttps://10.0.1.4:2379 is healthy: successfully committed proposal: took = 5.616079ms\\n```\\n\\n#### \u83b7\u53d6\u67d0\u4e2a Key \u4fe1\u606f\\n```bash\\nETCDCTL_API=3 etcdctl --cacert=/opt/kubernetes/ssl/ca.pem --cert=/opt/kubernetes/ssl/server.pem --key=/opt/kubernetes/ssl/server-key.pem --endpoints=https://10.0.1.2:2379,https://10.0.1.3:2379,https://10.0.1.4:2379 get /registry/apiregistration.k8s.io/apiservices/v1.apps\\n```\\n\\n#### \u83b7\u53d6\u6240\u6709 Key\\n```bash\\nETCDCTL_API=3 etcdctl --cacert=/opt/kubernetes/ssl/ca.pem --cert=/opt/kubernetes/ssl/server.pem --key=/opt/kubernetes/ssl/server-key.pem --endpoints=https://10.0.1.2:2379,https://10.0.1.3:2379,https://10.0.1.4:2379 get / --prefix --keys-only\\n```\\n\\n#### \u4f7f\u7528 Snapshot Save \u5907\u4efd\\n```bash\\nETCDCTL_API=3 etcdctl --cacert=/opt/kubernetes/ssl/ca.pem --cert=/opt/kubernetes/ssl/server.pem --key=/opt/kubernetes/ssl/server-key.pem --endpoints=https://10.0.1.2:2379,https://10.0.1.3:2379,https://10.0.1.4:2379 snapshot save /data/etcd_backup/etcd-snapshot-`date +%Y%m%d`.db\\n```\\n\\n#### \u5907\u4efd\u4fdd\u7559 10 \u5929\\n```bash\\nfind /data/etcd_backup/ -name *.db -mtime +10 -exec rm -f {} \\\\;\\n```\\n\\n#### \u6062\u590d\u5907\u4efd\\n\u62f7\u8d1d`etcd`\u5907\u4efd\u5feb\u7167\uff0c\u505c\u6b62\u96c6\u7fa4\u6240\u6709`kube-apiserver`\u670d\u52a1\uff0c\u505c\u6b62\u96c6\u7fa4\u6240\u6709`ETCD`\u670d\u52a1\\n```bash\\nETCDCTL_API=3 etcdctl snapshot restore /data/etcd_backup/etcd-snapshot-20231225.db \\\\\\n  --name etcd-0 \\\\\\n  --initial-cluster \\"etcd-0=https://10.0.1.2:2380,etcd-1=https://10.0.1.3:2380,etcd-2=https://10.0.1.4:2380\\" \\\\\\n  --initial-cluster-token etcd-cluster \\\\\\n  --initial-advertise-peer-urls https://10.0.1.2:2380 \\\\\\n  --data-dir=/var/lib/etcd/default.etcd\\n```"},{"id":"mysql","metadata":{"permalink":"/mysql","source":"@site/blog/2023-12-14/index.md","title":"Mysql \u5e38\u7528\u8bed\u53e5","description":"Mysql\u7684infromation_schema\u5e93\uff0c\u53ef\u4ee5\u67e5\u8be2\u6570\u636e\u5e93\u4e2d\u6bcf\u4e2a\u8868\u5360\u7528\u7684\u7a7a\u95f4\u3001\u8868\u8bb0\u5f55\u884c\u6570","date":"2023-12-14T00:00:00.000Z","formattedDate":"December 14, 2023","tags":[{"label":"linux","permalink":"/tags/linux"}],"readingTime":1.68,"hasTruncateMarker":false,"authors":[{"name":"Innocence","title":"zheng wei","url":"https://github.com/zhengwe.com","imageURL":"https://zhengwe.com/img/logo.svg","key":"innocence"}],"frontMatter":{"slug":"mysql","title":"Mysql \u5e38\u7528\u8bed\u53e5","authors":["innocence"],"tags":["linux"]},"prevItem":{"title":"Etcd \u5907\u4efd\u4e0e\u6062\u590d","permalink":"/etcd"},"nextItem":{"title":"Nginx \u5e38\u7528\u914d\u7f6e","permalink":"/nginx"}},"content":"Mysql\u7684infromation_schema\u5e93\uff0c\u53ef\u4ee5\u67e5\u8be2\u6570\u636e\u5e93\u4e2d\u6bcf\u4e2a\u8868\u5360\u7528\u7684\u7a7a\u95f4\u3001\u8868\u8bb0\u5f55\u884c\u6570\\n- TABLE_SCHEMA: \u6570\u636e\u5e93\u540d\\n- TABLE_NAME: \u8868\u540d\\n- ENGINE: \u4f7f\u7528\u7684\u5b58\u50a8\u5f15\u64ce\\n- TABLES_ROWS: \u8bb0\u5f55\u6570\\n- DATA_LENGTH: \u6570\u636e\u5927\u5c0f\\n- INDEX_LENGTH: \u7d22\u5f15\u5927\u5c0f\\n\\n#### \u67e5\u770b\u6240\u6709\u5e93\u5927\u5c0f\\n```sql\\nuse information_schema;\\nselect concat(round(sum(DATA_LENGTH/1024/1024),2),\'MB\') as data  from TABLES;\\n```\\n\\n#### \u67e5\u770b\u6307\u5b9a\u5e93\u5927\u5c0f\\n```sql\\nselect concat(round(sum(DATA_LENGTH/1024/1024),2),\'MB\') as data  from TABLES where table_schema=\'xxx\';\\n```\\n\\n#### \u67e5\u770b\u6307\u5b9a\u5e93\u7684\u6307\u5b9a\u8868\u7684\u5927\u5c0f\\n```sql\\nselect concat(round(sum(DATA_LENGTH/1024/1024),2),\'MB\') as data  from TABLES where table_schema=\'xxx\' and table_name=\'xxx\';\\n```\\n\\n#### \u67e5\u770b\u6307\u5b9a\u5e93\u7684\u7d22\u5f15\u5927\u5c0f\\n```sql\\nSELECT CONCAT(ROUND(SUM(index_length)/(1024*1024), 2), \' MB\') AS \'Total Index Size\' FROM TABLES  WHERE table_schema = \'xxx\';\\n```\\n\\n#### \u67e5\u770b\u6307\u5b9a\u5e93\u7684\u6307\u5b9a\u8868\u7684\u7d22\u5f15\u5927\u5c0f\\n```sql\\nSELECT CONCAT(ROUND(SUM(index_length)/(1024*1024), 2), \' MB\') AS \'Total Index Size\' FROM TABLES  WHERE table_schema = \'xxx\' and table_name=\'xxx\';\\n```\\n\\n#### \u67e5\u770b\u4e00\u4e2a\u5e93\u4e2d\u7684\u60c5\u51b5\\n```sql\\nSELECT CONCAT(table_schema,\'.\',table_name) AS \'Table Name\', CONCAT(ROUND(table_rows/1000000,4),\'M\') AS \'Number of Rows\', CONCAT(ROUND(data_length/(1024*1024*1024),4),\'G\') AS \'Data Size\', CONCAT(ROUND(index_length/(1024*1024*1024),4),\'G\') AS \'Index Size\', CONCAT(ROUND((data_length+index_length)/(1024*1024*1024),4),\'G\') AS\'Total\'FROM information_schema.TABLES WHERE table_schema LIKE \'xxx\';\\n```\\n\\n#### \u67e5\u770b\u975e Sleep \u72b6\u6001\u7684\u94fe\u63a5\uff0c\u6309\u6d88\u8017\u65f6\u95f4\u5012\u5e8f\u5c55\u793a\\n\u4f7f\u7528`show full processlist`\u53ef\u4ee5\u67e5\u770b\u6240\u6709\u94fe\u63a5\u60c5\u51b5\\n```sql\\nselect id, db, user, host, command, time, state, info\\nfrom information_schema.processlist\\nwhere command != \'Sleep\'\\norder by time desc; \\n```\\n\\n#### \u67e5\u8be2\u6267\u884c\u65f6\u95f4\u8d85\u8fc72\u5206\u949f\u7684\u7ebf\u7a0b\uff0c\u7136\u540e\u62fc\u63a5\u6210kill\u8bed\u53e5\\n```sql\\nselect concat(\'kill \', id, \';\')\\nfrom information_schema.processlist\\nwhere command != \'Sleep\'\\nand time > 2*60\\norder by time desc;\\n```\\n\\n#### \u5feb\u901f\u6740\u6b7b\u6240\u6709\u8fdb\u7a0b\\n```sql\\nmysql -e \\"show full processlist;\\" -ss | awk \'{print \\"KILL \\"$1\\";\\"}\'| mysql\\n```"},{"id":"nginx","metadata":{"permalink":"/nginx","source":"@site/blog/2023-12-10/index.md","title":"Nginx \u5e38\u7528\u914d\u7f6e","description":"\u83b7\u53d6\u5ba2\u6237\u7aef\u771f\u5b9eIP\u3001\u57df\u540d\u3001\u534f\u8bae\u3001\u7aef\u53e3","date":"2023-12-10T00:00:00.000Z","formattedDate":"December 10, 2023","tags":[{"label":"linux","permalink":"/tags/linux"}],"readingTime":5.205,"hasTruncateMarker":false,"authors":[{"name":"Innocence","title":"zheng wei","url":"https://github.com/zhengwe.com","imageURL":"https://zhengwe.com/img/logo.svg","key":"innocence"}],"frontMatter":{"slug":"nginx","title":"Nginx \u5e38\u7528\u914d\u7f6e","authors":["innocence"],"tags":["linux"]},"prevItem":{"title":"Mysql \u5e38\u7528\u8bed\u53e5","permalink":"/mysql"},"nextItem":{"title":"Istio \u8fd4\u56de 426 \u72b6\u6001\u7801","permalink":"/istio"}},"content":"### \u83b7\u53d6\u5ba2\u6237\u7aef\u771f\u5b9eIP\u3001\u57df\u540d\u3001\u534f\u8bae\u3001\u7aef\u53e3\\n```bash\\nproxy_set_header Host $http_host;\\nproxy_set_header X-Real-IP $remote_addr;\\nproxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\\nproxy_set_header X-Forwarded-Proto $scheme;\\n```\\n- `Host` \u5305\u542b\u5ba2\u6237\u7aef\u771f\u5b9e\u7684\u57df\u540d\u548c\u7aef\u53e3\u53f7\uff1b\\n- `X-Forwarded-Proto` \u8868\u793a\u5ba2\u6237\u7aef\u771f\u5b9e\u7684\u534f\u8bae\uff1b\\n- `X-Real-IP` \u8868\u793a\u5ba2\u6237\u7aef\u771f\u5b9e\u7684IP\uff1b\\n- `X-Forwarded-For` \u548c `X-Real-IP` \u7c7b\u4f3c\uff0c\u4f46\u5b83\u5728\u591a\u5c42\u4ee3\u7406\u65f6\u4f1a\u5305\u542b\u771f\u5b9e\u5ba2\u6237\u7aef\u53ca\u4e2d\u95f4\u6bcf\u4e2a\u4ee3\u7406\u670d\u52a1\u5668\u7684IP\uff1b\\n\\n### \u8d1f\u8f7d\u5747\u8861\u914d\u7f6e\\n\u5728`fail_timeout`\u65f6\u95f4\u5185\u5931\u8d25\u4e86`max_fails`\u6b21\u8bf7\u6c42\u540e\uff0c\u5c06\u8be5\u670d\u52a1\u5730\u5740\u5254\u9664\u6389\uff0c`fail_tiemout`\u65f6\u95f4\u540e\u4f1a\u518d\u6b21\u5c06\u8be5\u670d\u52a1\u5668\u52a0\u5165\u5b58\u6d3b\u5217\u8868\uff0c\u8fdb\u884c\u91cd\u8bd5\\n```bash\\nhttp {\\n    upstream server_name {\\n    server IP:Port weight=1 max_fails=2 fail_timeout=60s;\\n    server IP:Port weight=2 max_fails=2 fail_timeout=60s;\\n    }\\n    server {\\n        listen  80;\\n        location / {\\n            proxy_pass http://server_name;\\n        }\\n    }\\n}\\n```\\n\\n### \u9759\u6001\u8d44\u6e90\u7f13\u5b58\\n```bash\\nlocation ~* .(gif|jpg|jpeg|bmp|png|ico|txt|js|css)$ {\\n    expires      3d;\\n    add_header Static Nginx-Proxy;\\n}\\n```\\n\\n### \u52a8\u6001\u9ed1\u540d\u5355\\n- \u4e00\u822c\u914d\u7f6e\\n```bash\\nlocation / {\\n    deny  192.168.1.1;\\n    deny  192.168.1.0/24;\\n    allow 10.0.0.0/16;\\n    allow 2001:0db8::/32;\\n    deny  all;\\n}\\n```\\n\\n- Lua+Redis\u52a8\u6001\u9ed1\u540d\u5355(OpenResty)\\n```bash\\nyum install yum-utils\\nyum-config-manager --add-repo https://openresty.org/package/centos/openresty.repo\\nyum install openresty\\nyum install openresty-resty\\nyum --disablerepo=\\"*\\" --enablerepo=\\"openresty\\" list available\\nservice openresty start\\n```\\n\u914d\u7f6e(/usr/local/openresty/nginx/conf/nginx.conf)\\n```bash\\nlua_shared_dict ip_blacklist 1m;\\n\\nserver {\\n    listen  80;\\n\\n    location / {\\n        access_by_lua_file lua/ip_blacklist.lua;\\n        proxy_pass http://server_name;\\n    }\\n}\\n```\\n**ip_blacklist.lua**\\n```bash\\nlocal redis_host    = \\"192.168.1.100\\"\\nlocal redis_port    = 6379\\nlocal redis_pwd     = 123456\\nlocal redis_db = 1\\n\\n-- connection timeout for redis in ms.\\nlocal redis_connection_timeout = 100\\n\\n-- a set key for blacklist entries\\nlocal redis_key     = \\"ip_blacklist\\"\\n\\n-- cache lookups for this many seconds\\nlocal cache_ttl     = 60\\n\\n-- end configuration\\n\\nlocal ip                = ngx.var.remote_addr\\nlocal ip_blacklist      = ngx.shared.ip_blacklist\\nlocal last_update_time  = ip_blacklist:get(\\"last_update_time\\");\\n\\n-- update ip_blacklist from Redis every cache_ttl seconds:\\nif last_update_time == nil or last_update_time < ( ngx.now() - cache_ttl ) then\\n\\n  local redis = require \\"resty.redis\\";\\n  local red = redis:new();\\n\\n  red:set_timeout(redis_connect_timeout);\\n\\n  local ok, err = red:connect(redis_host, redis_port);\\n  if not ok then\\n    ngx.log(ngx.ERR, \\"Redis connection error while connect: \\" .. err);\\n  else\\n    local ok, err = red:auth(redis_pwd)\\n    if not ok then\\n      ngx.log(ngx.ERR, \\"Redis password error while auth: \\" .. err);\\n    else\\n        local new_ip_blacklist, err = red:smembers(redis_key);\\n        if err then\\n            ngx.log(ngx.ERR, \\"Redis read error while retrieving ip_blacklist: \\" .. err);\\n        else\\n        ngx.log(ngx.ERR, \\"Get data success:\\" .. new_ip_blacklist)\\n          -- replace the locally stored ip_blacklist with the updated values:\\n            ip_blacklist:flush_all();\\n          for index, banned_ip in ipairs(new_ip_blacklist) do\\n            ip_blacklist:set(banned_ip, true);\\n          end\\n          -- update time\\n          ip_blacklist:set(\\"last_update_time\\", ngx.now());\\n      end\\n    end\\n  end\\nend\\n\\nif ip_blacklist:get(ip) then\\n  ngx.log(ngx.ERR, \\"Banned IP detected and refused access: \\" .. ip);\\n  return ngx.exit(ngx.HTTP_FORBIDDEN);\\nend\\n```\\n\\n### Websocket\\n```bash\\nmap $http_upgrade $connection_upgrade { \\n    default upgrade; \\n    \'\' close; \\n} \\nupstream ws_backend{ \\n    server IP:Port; \\n    keepalive 1000; \\n}\\nserver { \\n    listen 80; \\n    location /{ \\n        proxy_http_version 1.1; \\n        proxy_pass http://ws_backend; \\n        proxy_redirect off; \\n        proxy_set_header Host $host; \\n        proxy_set_header X-Real-IP $remote_addr; \\n        proxy_read_timeout 3600s; \\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; \\n        proxy_set_header Upgrade $http_upgrade; \\n        proxy_set_header Connection $connection_upgrade; \\n    } \\n}\\n```\\n\\n### nginx \u7684\u8f6c\u53d1\u89c4\u5219\\n```bash\\nlocation [=|~|~*|^~] /uri/ { ... }\\n```\\n- `=` \u4e25\u683c\u5339\u914d\uff0c\u5982\u679c\u8bf7\u6c42\u5339\u914d\u8fd9\u4e2alocation\uff0c\u90a3\u4e48\u5c06\u505c\u6b62\u641c\u7d22\u7acb\u5373\u5904\u7406\u8bf7\u6c42\\n- `~` \u533a\u5206\u5927\u5c0f\u5199\u5339\u914d\uff08\u53ef\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\uff09\\n- `~*` \u4e0d\u533a\u5206\u5927\u5c0f\u5199\u5339\u914d\uff08\u53ef\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\uff09\\n- `!~` \u533a\u5206\u5927\u5c0f\u5199\u4e0d\u5339\u914d\\n- `!~*` \u4e0d\u533a\u5206\u5927\u5c0f\u5199\u4e0d\u5339\u914d\\n- `^~` \u5982\u679c\u628a\u8fd9\u4e2a\u524d\u7f00\u7528\u4e8e\u4e00\u4e2a\u5e38\u89c4\u5b57\u7b26\u4e32,\u90a3\u4e48\u544a\u8bc9nginx\u5982\u679c\u8def\u5f84\u5339\u914d\u90a3\u4e48\u4e0d\u6d4b\u8bd5\u6b63\u5219\u8868\u8fbe\u5f0f\\n\\n### nginx.conf \u914d\u7f6e\\n```bash\\nuser  nginx;\\nworker_processes  auto;\\nworker_rlimit_nofile  65535;\\n\\nerror_log  /data/logs/nginx/error.log notice;\\npid        /var/run/nginx.pid;\\nevents {\\n    worker_connections  65535;\\n    multi_accept on;\\n    use epoll;\\n}\\nhttp {\\n    include       /etc/nginx/mime.types;\\n    default_type  application/octet-stream;\\n    log_format  main  \'[$time_local] RemoteAddr:\\"$remote_addr\\" RemoteUser:\\"$remote_user\\" Host:\\"$host\\" \'\\n                      \'RequestUil:\\"$request\\" HttpStatus:\\"$status\\" BodyBytesSent:\\"$body_bytes_sent\\" \'\\n                      \'HttpReferer:\\"$http_referer\\" HttpUserAgent:\\"$http_user_agent\\" \'\\n                      \'Http_X_ForwardedFor:\\"$http_x_forwarded_for\\" UpstreamResponseTime:\\"$upstream_response_time\\" \'\\n                      \'UpstreamAddr:\\"$upstream_addr\\" RequestTime:\\"$request_time\\" --- $server_port\';\\n    log_format  json  \'{\'\\n        \'\\"RemoteAddr\\":\\"$remote_addr\\",\'\\n        \'\\"RemoteUser\\":\\"$remote_user\\",\'\\n        \'\\"TimeLocal\\":\\"$time_local\\",\'\\n        \'\\"RequestUil\\":\\"$request\\",\'\\n        \'\\"HttpHost\\":\\"$http_host\\"\'\\n        \'\\"HttpStatus\\":\\"$status\\",\'\\n        \'\\"BodyBytesSent\\":\\"$body_bytes_sent\\",\'\\n        \'\\"HttpReferer\\":\\"$http_referer\\",\'\\n        \'\\"HttpUserAgent\\":\\"$http_user_agent\\",\'\\n        \'\\"Http_X_ForwardedFor\\":\\"$http_x_forwarded_for\\",\'\\n        \'\\"SslProtocol\\":\\"$ssl_protocol\\"\'\\n        \'\\"SslCipher\\":\\"$ssl_cipher\\"\'\\n        \'\\"UpstreamResponseTime\\":\\"$upstream_response_time\\",\'\\n        \'\\"UpstreamAddr\\":\\"$upstream_addr\\",\'\\n        \'\\"RequestTime\\":\\"$request_time\\",\'\\n    \'}\';\\n\\n    access_log /data/logs/nginx/access.log main;\\n\\n    access_log                      off;\\n    server_tokens                   off;\\n    sendfile                         on;\\n    tcp_nopush                       on;\\n    tcp_nodelay                      on;\\n    send_timeout                    300;\\n    keepalive_timeout               300;\\n    resolver_timeout                 60;\\n    server_names_hash_max_size      512;\\n    server_names_hash_bucket_size   128;\\n\\n    client_body_timeout             300;\\n    client_header_timeout           300;\\n    client_header_buffer_size      512k;\\n    client_max_body_size           300m;\\n    large_client_header_buffers  8  32k;\\n    client_body_buffer_size        256k;\\n\\n    fastcgi_connect_timeout         300;\\n    fastcgi_send_timeout            300;\\n    fastcgi_read_timeout            300;\\n    fastcgi_buffer_size            128k;\\n    fastcgi_buffers          8     256k;\\n    fastcgi_busy_buffers_size      256k;\\n    fastcgi_temp_file_write_size   256k;\\n    fastcgi_temp_path /tmp/ngx_fcgi_tmp;\\n    fastcgi_cache_path /tmp/fcgi_cache_path levels=1:2 keys_zone=ngx_fcgi_cache:512m inactive=1d max_size=10g;\\n\\n    gzip  on;\\n    gzip_http_version   1.1;\\n    gzip_min_length      1k;\\n    gzip_buffers 4      16k;\\n    gzip_comp_level       9;\\n    gzip_types text/plain application/json application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;\\n    gzip_vary            on;\\n    gzip_disable \\"MSIE [1-6]\\\\.\\";\\n\\n    proxy_http_version           1.1;\\n    proxy_set_header Connection   \\"\\";\\n    proxy_set_header     Host  $host;\\n    proxy_connect_timeout        300;\\n    proxy_read_timeout           300;\\n    proxy_send_timeout           300;\\n    proxy_buffering               on;\\n    proxy_buffer_size           128k;\\n    proxy_buffers            8  128k;\\n    proxy_busy_buffers_size     256k;\\n    proxy_temp_file_write_size  256k;\\n    proxy_temp_path  /tmp/proxy_temp_path;\\n    proxy_cache_path /tmp/proxy_cache_path levels=1:2 keys_zone=ngx_proxy_cache:512m inactive=1d max_size=10g;\\n    include /etc/nginx/conf.d/*.conf;\\n}\\ninclude /etc/nginx/stream.d/*.conf;\\n```\\n\\n### stream \u914d\u7f6e\\n```bash\\nstream {\\n    upstream server_name {\\n        server  IP:Port;\\n    }\\n    server {\\n        listen Port;\\n        proxy_pass server_name;\\n        proxy_connect_timeout 1h;\\n        proxy_timeout 1h;\\n    }\\n}\\n```\\n\\n### server \u914d\u7f6e\\n```bash\\nserver {\\n    listen   80;\\n    listen   81;\\n    server_name 127.0.0.1  example.com;\\n    index  index.php index.html index.htm;\\n    root /data/www;\\n    charset utf-8;\\n    access_log  /data/logs/example.com.log  main;\\n\\n    location / {\\n        if (!-e $request_filename) {\\n            rewrite ^/(.*) /index.php?$1 last;\\n        }\\n    }\\n    location /xxx/ {\\n        if ($arg_icpid = \\"4pd1mtsDhfe\\" ) {\\n            proxy_pass http://127.0.0.1:38888/test$request_uri&tbid=aldIthSBg04;\\n        }\\n        proxy_pass http://127.0.0.1:9302;\\n    }\\n    location /xxx/ {\\n        proxy_pass http://127.0.0.1:38888/;\\n    }\\n    location ~ \\\\.php$ {\\n        fastcgi_param  REMOTE_ADDR $http_x_real_ip;\\n        fastcgi_param LY_ADDRESS $remote_addr;\\n        fastcgi_pass   unix:/dev/shm/php-cgi.sock;\\n        fastcgi_index  index.php;\\n        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;\\n        fastcgi_param  SERVERNAME     $hostname;\\n        include        fastcgi_params;\\n   }\\n   location = /favicon.ico {\\n        log_not_found off;\\n        access_log off;\\n   }\\n   location = /robots.txt {\\n        allow all;\\n        log_not_found off;\\n        access_log off;\\n   }\\n}\\n\\nserver {\\n    listen   80;\\n    listen   443 ssl;\\n    server_name  example.com;\\n    charset utf-8;\\n    access_log  /data/logs/example.com.log main;\\n\\n    ssl_certificate   /etc/nginx/cert/example.com.pem;\\n    ssl_certificate_key  /etc/nginx/cert/example.com.key;\\n    ssl_session_timeout 5m;\\n    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;\\n    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\\n    ssl_prefer_server_ciphers on;\\n\\n    location / {\\n        proxy_pass http://127.0.0.1:38888;\\n    }\\n    location = /favicon.ico {\\n        log_not_found off;\\n        access_log off;\\n    }\\n    location = /robots.txt {\\n        allow all;\\n        log_not_found off;\\n        access_log off;\\n    }\\n}\\n```"},{"id":"istio","metadata":{"permalink":"/istio","source":"@site/blog/2023-09-16/index.md","title":"Istio \u8fd4\u56de 426 \u72b6\u6001\u7801","description":"HTTP/1.0 \u7248\u672c","date":"2023-09-16T00:00:00.000Z","formattedDate":"September 16, 2023","tags":[{"label":"istio","permalink":"/tags/istio"}],"readingTime":0.39,"hasTruncateMarker":false,"authors":[{"name":"Innocence","title":"zheng wei","url":"https://github.com/zhengwe.com","imageURL":"https://zhengwe.com/img/logo.svg","key":"innocence"}],"frontMatter":{"slug":"istio","title":"Istio \u8fd4\u56de 426 \u72b6\u6001\u7801","authors":["innocence"],"tags":["istio"]},"prevItem":{"title":"Nginx \u5e38\u7528\u914d\u7f6e","permalink":"/nginx"},"nextItem":{"title":"Centos\u5185\u6838\u5347\u7ea7","permalink":"/kernel"}},"content":"### HTTP/1.0 \u7248\u672c\\nIstio \u4f7f\u7528 Envoy \u8f6c\u53d1 HTTP \u8bf7\u6c42\uff0c\u800c Envoy \u9ed8\u8ba4\u8981\u6c42\u4f7f\u7528 HTTP/1.1 \u6216 HTTP/2\uff0c\u5f53\u5ba2\u6237\u7aef\u4f7f\u7528 HTTP/1.0 \u65f6\u4f1a\u8fd4\u56de`426 low version`\\n\\n### nginx \u573a\u666f\\n\u7528 nginx \u8fdb\u884c`proxy_pass`\u53cd\u5411\u4ee3\u7406\uff0c\u9ed8\u8ba4\u4f1a\u7528 HTTP/1.0\uff0c\u53ef\u4ee5\u6307\u5b9a`proxy_http_version`\u4e3a 1.1\\n```bash\\nserver {\\n    ...\\n    location /xxx/ {\\n        proxy_http_version 1.1;\\n        proxy_set_header Connection \\"\\";\\n    }\\n}\\n```"},{"id":"kernel","metadata":{"permalink":"/kernel","source":"@site/blog/2023-09-08/index.md","title":"Centos\u5185\u6838\u5347\u7ea7","description":"\u5bfc\u5165\u4ed3\u5e93\u6e90","date":"2023-09-08T00:00:00.000Z","formattedDate":"September 8, 2023","tags":[{"label":"linux","permalink":"/tags/linux"}],"readingTime":0.6,"hasTruncateMarker":false,"authors":[{"name":"Innocence","title":"zheng wei","url":"https://github.com/zhengwe.com","imageURL":"https://zhengwe.com/img/logo.svg","key":"innocence"}],"frontMatter":{"slug":"kernel","title":"Centos\u5185\u6838\u5347\u7ea7","authors":["innocence"],"tags":["linux"]},"prevItem":{"title":"Istio \u8fd4\u56de 426 \u72b6\u6001\u7801","permalink":"/istio"},"nextItem":{"title":"\u624b\u5199\u7684\u4ece\u524d","permalink":"/promise"}},"content":"### \u5bfc\u5165\u4ed3\u5e93\u6e90\\n```bash\\nrpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org\\n\\nrpm -Uvh http://www.elrepo.org/elrepo-release-7.0-2.el7.elrepo.noarch.rpm\\n```\\n\\n### \u67e5\u770b\u53ef\u5b89\u88c5\u7684\u8f6f\u4ef6\u5305\\n```bash\\n# ML \u7248\u672c\u4e3a\u6700\u65b0\u7248\u672c\uff0cTL \u7248\u672c\u4e3a\u7a33\u5b9a\u7248\u672c\\nyum --enablerepo=\\"elrepo-kernel\\" list --showduplicates | sort -r | grep kernel-ml.x86_64\\n\\n# \u5b89\u88c5 ML \u7248\u672c\\nyum --enablerepo=elrepo-kernel install  kernel-ml-devel kernel-ml -y\\n\\n# \u5b89\u88c5 LT \u7248\u672c\\nyum --enablerepo=elrepo-kernel install kernel-lt-devel kernel-lt -y\\n```\\n\\n### \u67e5\u770b\u73b0\u6709\u5185\u6838\u542f\u52a8\u987a\u5e8f\\n```bash\\nawk -F\\\\\' \'$1==\\"menuentry \\" {print $2}\' /etc/grub2.cfg\\n\\nCentOS Linux (4.4.179-1.el7.elrepo.x86_64) 7 (Core)\\n\\nCentOS Linux (3.10.0-693.el7.x86_64) 7 (Core)\\n```\\n\\n### \u8bbe\u7f6e\u5185\u6838\u542f\u52a8\u5e8f\u53f7\\n```bash\\ngrub2-set-default 0\\n```"},{"id":"promise","metadata":{"permalink":"/promise","source":"@site/blog/2023-07-26/index.md","title":"\u624b\u5199\u7684\u4ece\u524d","description":"\u5fae\u98a8\u9700\u8981\u7af9\u6797 \u6eaa\u6d41\u9700\u8981\u873b\u8713","date":"2023-07-26T00:00:00.000Z","formattedDate":"July 26, 2023","tags":[{"label":"innocence","permalink":"/tags/innocence"}],"readingTime":1.015,"hasTruncateMarker":false,"authors":[{"name":"Innocence","title":"zheng wei","url":"https://github.com/zhengwe.com","imageURL":"https://zhengwe.com/img/logo.svg","key":"innocence"}],"frontMatter":{"slug":"promise","title":"\u624b\u5199\u7684\u4ece\u524d","authors":["innocence"],"tags":["innocence"]},"prevItem":{"title":"Centos\u5185\u6838\u5347\u7ea7","permalink":"/kernel"}},"content":"\u5fae\u98a8\u9700\u8981\u7af9\u6797 \u6eaa\u6d41\u9700\u8981\u873b\u8713\\n\\n\u9109\u6101\u822c\u7684\u96e2\u958b \u9700\u8981\u7247\u7247\u6d6e\u840d\\n\\n\u8a18\u5f97\u90a3\u5e74\u7684\u96e8\u5b63 \u56de\u61b6\u88e1\u7279\u5b89\u975c\\n\\n\u54ed\u904e\u5f8c\u7684\u6c7a\u5b9a \u662f\u5426\u9084\u80fd\u9032\u884c\\n\\n\u6211\u50bb\u50bb\u7b49\u5f85 \u50bb\u50bb\u7b49\u6625\u6696\u82b1\u958b\\n\\n\u7b49\u7d42\u7b49\u65bc\u7b49\u660e\u7b49\u767d \u7b49\u611b\u60c5\u56de\u4f86\\n\\n\u9752\u6625\u5c6c\u65bc\u8868\u767d \u967d\u5149\u5c6c\u65bc\u7a97\u53f0\\n\\n\u800c\u6211\u60f3\u6211\u5c6c\u65bc \u4e00\u500b\u64c1\u6709\u4f60\u7684\u672a\u4f86\\n\\n\u7d19\u4e0a\u7684\u5f69\u8679 \u7528\u7d20\u63cf\u756b\u7684\u9418\\n\\n\u6211\u9084\u5728\u4fee\u6539 \u56de\u61b6\u4e4b\u4e2d\u4f60\u7684\u7b11\u5bb9\\n\\n\u8a72\u600e\u9ebc\u53bb\u5f62\u5bb9 \u70ba\u601d\u5ff5\u919e\u91c0\u7684\u75db\\n\\n\u591c\u7a7a\u9713\u8679 \u90fd\u662f\u6211\u4e0d\u8981\u7684\u7e41\u69ae\\n\\n\u6216\u8a31\u53bb\u8d9f\u6c99\u7058 \u6216\u8a31\u53bb\u770b\u770b\u5915\u967d\\n\\n\u6216\u8a31\u4efb\u4f55\u4e00\u500b\u53ef\u4ee5\u60f3\u5fc3\u4e8b\u7684\u5730\u65b9\\n\\n\u60c5\u7dd2\u5728\u5496\u5561\u9928 \u88ab\u8abf\u6210\u4e00\u7bc7\u6587\u7ae0\\n\\n\u5fb9\u5e95\u611b\u4e0a \u4f60\u5982\u8a69\u4e00\u822c\u900f\u660e\u7684\u6dda\u5149"}]}')}}]);