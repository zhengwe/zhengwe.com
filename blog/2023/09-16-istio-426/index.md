---
slug: istio
title: Istio 返回 426 状态码
authors: [goblin]
tags: [istio]
---

### HTTP/1.0 版本
Istio 使用 Envoy 转发 HTTP 请求，而 Envoy 默认要求使用 HTTP/1.1 或 HTTP/2，当客户端使用 HTTP/1.0 时会返回`426 low version`

### nginx 场景
用 nginx 进行`proxy_pass`反向代理，默认会用 HTTP/1.0，可以指定`proxy_http_version`为 1.1
```bash
server {
    ...
    location /xxx/ {
        proxy_http_version 1.1;
        proxy_set_header Connection "";
    }
}
```