mixed-port: 7890
allow-lan: true
bind-address: '*'
mode: rule
log-level: info
external-controller: 127.0.0.1:9090
dns:
  enable: true
  ipv6: false
  default-nameserver: null
  enhanced-mode: fake-ip
  fake-ip-range: 198.18.0.1/16
  use-hosts: true
  nameserver: null
  fallback:
    - https://doh.dns.sb/dns-query
    - https://dns.cloudflare.com/dns-query
    - https://dns.twnic.tw/dns-query
    - tls://8.8.4.4:853
  fallback-filter:
    geoip: true
    ipcidr:
      - 240.0.0.0/4
      - 0.0.0.0/32
proxy-groups:
  
proxy-providers: null

rules:
  - SCRIPT,quic,REJECT
  - DST-PORT,5223,𝐍𝐨𝐛𝐢𝐭𝐚 𝐏𝐫𝐨𝐦𝐚𝐱
  - RULE-SET,ADBKEYWORD,REJECT
  - RULE-SET,ADBLITE,REJECT
  - MATCH,𝐍𝐨𝐛𝐢𝐭𝐚 𝐏𝐫𝐨𝐦𝐚𝐱
rule-providers: {ADBLITE: {behavior: domain, format: yaml, interval: 86400, url: 'https://github.com/lonely0811/Stash/raw/main/Rule/ADBLITE.yml'}, ADBKEYWORD: {behavior: classical, format: yaml, interval: 84600, url: 'https://github.com/lonely0811/olsd/raw/main/stash/KEYWORD.yaml'}, UR: {behavior: classical, format: yaml, interval: 0, url: 'https://github.com/lonely0811/unrevoker/raw/main/UNREVOKERSTASH.yml'}}
script:
  shortcuts:
    quic: network == 'udp' and dst_port == 443

proxies:
