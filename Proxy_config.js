default:
  sni: v9.tiktokcdn.com
  font:
    type: sans-serif-bold
    
VIEFAST:
  regex: /(🇻🇳|🇸🇬|🇯🇵|🇭🇰|🇹🇼)/i
  name: "{F} {F:NAME} ({0#}) "
  font:
    type: sans-serif-bold
  sorts:
    - "flag:🇻🇳:first"
  groupBy: flag
  
RENAME:
  name: "{F} {F:NAME} ({0#}) "
  font:
    type: sans-serif-bold
  sorts:
    - "flag:🇻🇳:first"
  groupBy: flag
  
HK:
  name: "{F} 𝗩𝗜𝗡𝗔 𝗣𝗥𝗢𝗠𝗔𝗫 ({0#}) "
  font:
    type: sans-serif-bold
  sorts:
    - "flag:🇭🇰:first"
  groupBy: flag
