export default {
  port: 1337,
  host: "localhost",
  dbUri: "mongodb://localhost:27017/rest-api",
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICWwIBAAKBgQCZfrvq4fOshOX4C6NlTPgaSw98n/p8sj8tzYtMmuV/gYkdeiOA
jzY+tb3JV2aQLKXts3I7akP3BgMf03HsAWYnBk0V+EuCG2haSNwcyj2x/uvsbeyq
FTLeXinH87u5MrJ29XHXQ8NTOjE4cJnaYLOOqe8JnGqT6OnTnjzRi6fgnQIDAQAB
AoGAZu+UugnZTgK57kRvyUl6wLdBpYPriaBHukGzfyYJbh7CgyAbmuVvrVJX+iRA
xcMLa4MBwlKbTZeclMVKCslNZSMJQuSsbd5erlttbUIU9/2jba/YK2kDgZSmbaiZ
CroWZlkND8XoEn1qEs57J8vGwPQF2SZvWtYYzB7xF8Cn2kkCQQDyiTadRNwWKS7P
gpLnymE7daMA+yW7/GertXrcfcG7SIYiuyw0OItF/TckF2GddMpnxH7AsOQrKC8K
V2gtOIEvAkEAogQe1apPhH397GcJWIGV+GO7oX7gqikWIfPcy1dAD2lJKkx3M+PI
HriNjo0tFNjx4qtzODhhUb5STFBcz+SP8wJAGj7m/hXZizxhqGsE4rhv1TNhtFV5
O+KQhXBaH0oskMvEWDXRDsWfrK8+LFWrZpKg5KHK5ac+ybzLel8DEwGuWQJACFiN
/hO35OtYmUT1hkmmoBUDJV6T1DApo7YcOZ1U/3Y8/qDRwyqItIxtPlqnZ9uFGlga
p1rAKKXVN3ksTslHYQJAIMkC0YztfoZNF42NVsoOCZRZTR+2b4VW4BI0znmuDehQ
63VM693hjtZ3hfs20JVFVbsZjvEriWupNZfSjHCp2Q==
-----END RSA PRIVATE KEY-----` /* DON"T EXPOSE YOUR PRIVATE KEY */,
};
