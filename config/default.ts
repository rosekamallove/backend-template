export default {
  port: 1337,
  host: "localhost",
  dbUri:
    "mongodb+srv://admin:DedKBWKyKKuOpnCV@kroto0.ffipgwn.mongodb.net/?retryWrites=true&w=majority",
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  origin: "http://localhost:3000",
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICWgIBAAKBgEV0EjSp8SX+dGKBrxbB6iG+WHJhBsZnBglLuEqdqnQ1IvR0mOEL
ElRhQgzFIqT7u73GLlJwnXqlO29DlKAi2n8pliVV7iP0uDUaxvdlymoIUtdEJ5Yg
a5LzY7sbMCq1EKVAfRHl3diSjP3eCFyiPmOz+JqFVkibGO8cJo+ER9OnAgMBAAEC
gYA1xaviwkBGHj+VlLoucGwJPAnWZHCOY200/T7t5iv2VL1/blZ+xcenNLWilW5B
NfUg9LMgeLg0IIFnn3cOlG19f/kWMHkoPTkBpkk90WbSE716zf7ivqpGO2jt1rpZ
lGgaGsL9cEB5/Dk3vxK1XyaCdcsTKD/jkebg84fZhjUxAQJBAIh+EdNFhRbrWv7U
tr8liG0V+MZuxF/py280/K3aEPQRhSxILhUL73dtqJHBu3bklP+2zsXCWQ3cICJE
S8ZU0YcCQQCCQ53YbryphjkbL1xtYu5txYEDjlBSRX5FFHD5EiDdLnAVWfZD54Ny
+caif48OrHtvOqrGhmpJEqfP7D/BgfThAkA9iGAu17N1Lqs6INk1+Qy06OfbRUpg
VvzwaHnVQm7MKS3ZVbz4ngXZ2GTbOPRzV/9X/Kjg/Im7NtaBvDpQ8iH3AkByNkDO
RAFsjX/CYxsh2Wz9l/6PFJc+Gyoj/VE0QH3KD+47+j2euf0ZsQBE95yBnB85nfGf
0LidyxqRhi08R+phAkAF1T2POQZCmd5WDNgTpFvFJMqtVOg4eu6+prfnv+QWXZMp
6tlEnjS+7phCtkt568D+pE/C9jQXPy1lBkoUmER2
-----END RSA PRIVATE KEY-----` /* DON"T EXPOSE YOUR PRIVATE KEY */,
  publicKey: `-----BEGIN PUBLIC KEY-----
MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgEV0EjSp8SX+dGKBrxbB6iG+WHJh
BsZnBglLuEqdqnQ1IvR0mOELElRhQgzFIqT7u73GLlJwnXqlO29DlKAi2n8pliVV
7iP0uDUaxvdlymoIUtdEJ5Yga5LzY7sbMCq1EKVAfRHl3diSjP3eCFyiPmOz+JqF
VkibGO8cJo+ER9OnAgMBAAE=
-----END PUBLIC KEY-----` /* DON"T EXPOSE YOUR PUBLIC KEY */,
};
