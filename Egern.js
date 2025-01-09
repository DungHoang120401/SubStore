ipv6: false
allow_external_connections: true
vif_only: true
include_all_networks: true
include_apns: true
dns: {}
proxies:

policy_groups:

rules:
- rule_set:
    match: https://github.com/lonely0811/olsd/raw/main/Egern/Rule/ADBEGERN.yaml
    policy: REJECT
- ssid:
    match: '*'
    policy: DIRECT
- default:
    policy: 𝐀𝐮𝐭𝐨 𝐒𝐞𝐥𝐞𝐜𝐭
mitm:
  enabled: true
  ca_p12: egern.p12
  ca_passphrase: egern
modules:
- name: 𝘼𝙡𝙡 𝙄𝙣 𝙊𝙣𝙚
  url: https://raw.githubusercontent.com/DungHoang120401/Nobita/refs/heads/main/Module/All_In_One.sgmodule
  enabled: true
