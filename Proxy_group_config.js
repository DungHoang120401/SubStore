default:
  timeout: 3
𝐍𝐨𝐛𝐢𝐭𝐚 𝐏𝐫𝐨𝐦𝐚𝐱:
  type: subnet
  ssid: "default = DIRECT, TYPE:WIFI = DIRECT, TYPE:CELLULAR = 𝐀𝐮𝐭𝐨 𝐒𝐞𝐥𝐞𝐜𝐭"
  hidden: fale
  runs-on: surge, stash, loon, egern, shadowrocket
  img-url: https://cdn0.iconfinder.com/data/icons/awards-6/500/award_king-1024.png
𝐀𝐮𝐭𝐨 𝐒𝐞𝐥𝐞𝐜𝐭:
  type: select
  proxies:
    - 𝐕𝐢𝐧𝐚 𝐏𝐫𝐨𝐦𝐚𝐱
    - 𝐀𝐥𝐥 𝐒𝐞𝐯𝐞𝐫
    - 𝐕𝐢𝐞̣̂𝐭 𝐍𝐚𝐦
    - 𝐒𝐢𝐧𝐠𝐚𝐩𝐨𝐫𝐞
    - 𝐉𝐚𝐩𝐚𝐧
    - 𝐋𝐨𝐚𝐝 𝐁𝐚𝐥𝐚𝐧𝐜𝐞
  img-url: https://cdn0.iconfinder.com/data/icons/awards-6/500/award_achievement-1024.png
𝐕𝐢𝐧𝐚 𝐏𝐫𝐨𝐦𝐚𝐱:
  type: select surge:smart
  sources: [VINA-PREMIUM]
  hidden: false
  img-url: https://cdn1.iconfinder.com/data/icons/vote-reward-7/24/award_reward_stars_star_rating_five-1024.png
𝐀𝐥𝐥 𝐒𝐞𝐯𝐞𝐫:
  type: select surge:smart
  sources: [PROMAX]
  hidden: false
  img-url: https://cdn0.iconfinder.com/data/icons/awards-6/500/award_like-1024.png
𝐕𝐢𝐞̣̂𝐭 𝐍𝐚𝐦:
  type: url-test surge:smart
  regex: /🇻🇳/
  sources: [PROMAX]
  hidden: false
  img-url: https://cdn3.iconfinder.com/data/icons/shirt-world-flags-1/64/shirt_world_flags-55-1024.png
𝐒𝐢𝐧𝐠𝐚𝐩𝐨𝐫𝐞:
  type: url-test surge:smart
  regex: /🇸🇬/
  sources: [PROMAX]
  hidden: false
  img-url: https://cdn3.iconfinder.com/data/icons/shirt-world-flags-1/64/shirt_world_flags-28-1024.png
𝐉𝐚𝐩𝐚𝐧:
  type: url-test surge:smart
  regex: /🇯🇵/
  sources: [PROMAX]
  hidden: false
  img-url: https://cdn3.iconfinder.com/data/icons/shirt-world-flags-1/64/shirt_world_flags-17-1024.png
𝐋𝐨𝐚𝐝 𝐁𝐚𝐥𝐚𝐧𝐜𝐞:
  type: load-balance surge:load-balance
  regex: /🇻🇳/
  sources: [PROMAX]
  hidden: false
  img-url: https://cdn3.iconfinder.com/data/icons/rawan/512/Laures2-1024.png
