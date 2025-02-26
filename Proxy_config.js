default:
  font:
    type: sans-serif-bold
    
VIEFAST:
  regex: /(🇻🇳|🇸🇬|🇯🇵|🇭🇰|🇹🇼)/i
  name: "{F} {F:NAME} {0#} "
  font:
    type: sans-serif-bold
  sorts:
    - "flag:🇻🇳:first"
  groupBy: flag
  
RENAME:
  name: "{F} {F:NAME} {0#} "
  font:
    type: sans-serif-bold
  sorts:
    - "flag:🇻🇳:first"
  groupBy: flag
  
FREE:
  name: "{F} 𝗙𝗥𝗘𝗘 𝗣𝗥𝗢𝗠𝗔𝗫 ({0#}) "
  ips: [103.0.0.0/8]
  sni: data.viettel.vn
  font:
    type: sans-serif-bold
  groupBy: flag
