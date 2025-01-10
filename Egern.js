ipv6: false
http_port: 1082
socks_port: 3090
allow_external_connections: true
vif_only: true
proxy_latency_test_url: http://www.gstatic.com/generate_204
direct_latency_test_url: http://www.gstatic.com/generate_204
include_all_networks: true
include_apns: true
dns: {}

policy_groups:

rules:
- rule_set:
    match: https://github.com/lonely0811/olsd/raw/main/Egern/Rule/ADBEGERN.yaml
    policy: REJECT
- default:
    policy: 𝐀𝐮𝐭𝐨 𝐒𝐞𝐥𝐞𝐜𝐭
mitm:
  enabled: true
  ca_p12: egern.p12
  ca_passphrase: egern
modules:
- name: SubStore
  url: https://raw.githubusercontent.com/DungHoang120401/SubStore/refs/heads/Main/SubStore.sgmodule
  enabled: true
- name: Youtube Premium
  url: https://raw.githubusercontent.com/DungHoang120401/SubStore/refs/heads/Main/Youtube.sgmodule
  enabled: true
