[General]
ipv6 = true
always-real-ip = *.apple.com
bypass-system = true
skip-proxy = 127.0.0.1,192.168.0.0/16,10.0.0.0/8,172.16.0.0/12,100.64.0.0/10,localhost,*.local,captive.apple.com
tun-excluded-routes = 10.0.0.0/8, 100.64.0.0/10, 127.0.0.0/8, 169.254.0.0/16, 172.16.0.0/12, 192.0.0.0/24, 192.0.2.0/24, 192.88.99.0/24, 192.168.0.0/16, 198.51.100.0/24, 203.0.113.0/24, 224.0.0.0/4, 255.255.255.255/32, 239.255.255.250/32
dns-server = system,8.8.8.8,1.1.1.1
icmp-auto-reply = true
private-ip-answer = true

[Rule]
DST-PORT,5223,PROXY
RULE-SET,https://github.com/lonely0811/unrevoker/raw/main/UNREVOKERSHADOW.conf,REJECT-TINYGIF
DOMAIN-SET,https://github.com/lonely0811/Surge/raw/main/Rule/DADB.conf,REJECT-DROP
RULE-SET,https://github.com/lonely0811/Surge/raw/main/Rule/SADB.conf,REJECT-DROP
FINAL,PROXY

[URL Rewrite]
^https:\/\/api\.baomoi\.com\/a465 _ REJECT-200
(^https?:\/\/[\w-]+\.googlevideo\.com\/(?!dclk_video_ads).+?)&ctier=L(&.+?),ctier,(.+) $1$2$3 302
^https?:\/\/[\w-]+\.googlevideo\.com\/(?!(dclk_video_ads|videoplayback\?)).+&oad _ reject-200
^https?:\/\/(www|s)\.youtube\.com\/api\/stats\/ads _ reject-200
^https?:\/\/(www|s)\.youtube\.com\/(pagead|ptracking) _ reject-200
^https?:\/\/s\.youtube\.com\/api\/stats\/qoe\?adcontext _ reject-200

[Header Rewrite]
^https?://api.revenuecat.com/.+/(receipts$|subscribers/?(.*?)*$) header-del x-revenuecat-etag
^https?://api.revenuecat.com/.+/(receipts$|subscribers/?(.*?)*$) header-del X-RevenueCat-ETag
^https:\/\/spclient\.wg\.spotify\.com\/user-customization-service\/v1\/customize$ header-del if-none-match

[Script]
#Sub-Store
#hostname = sub.store
Sub-Store Core = type=http-request,pattern=^https?:\/\/sub\.store\/((download)|api\/(preview|sync|(utils\/node-info))),script-path=https://github.com/sub-store-org/Sub-Store/releases/latest/download/sub-store-1.min.js,requires-body=true,timeout=120
Sub-Store Simple = type=http-request,pattern=^https?:\/\/sub\.store,script-path=https://github.com/sub-store-org/Sub-Store/releases/latest/download/sub-store-0.min.js,requires-body=true
Sub-Store Sync = type=cron,cronexp=0 0 * * *,wake-system=1,timeout=120,script-path=https://github.com/sub-store-org/Sub-Store/releases/latest/download/cron-sync-artifacts.min.js
#************************************#
#Youtube
#hostname = *.googlevideo.com, youtubei.googleapis.com
youtube.request = type=http-request,pattern=^https:\/\/youtubei\.googleapis\.com\/youtubei\/v1\/(browse|next|player|reel\/reel_watch_sequence|get_watch),requires-body=1,max-size=-1,binary-body-mode=1,engine=jsc,script-path=https://github.com/lonely0811/Surge/raw/main/js/youtube.request.preview.js
youtube.response = type=http-response,pattern=^https:\/\/youtubei\.googleapis\.com\/youtubei\/v1\/(browse|next|player|search|reel\/reel_watch_sequence|guide|account\/get_setting|get_watch),requires-body=1,max-size=-1,binary-body-mode=1,engine=jsc,script-path=https://github.com/lonely0811/Surge/raw/main/js/youtube.response.preview.js,argument="{"lyricLang":"vi","captionLang":"vi","blockUpload":true,"blockImmersive":true,"debug":false}"
#************************************#
#SpotifyPremium
#hostname = spclient.wg.spotify.com
spotify-json = type=http-request,pattern=^https:\/\/spclient\.wg\.spotify\.com\/(artistview\/v1\/artist|album-entity-view\/v2\/album)\/,requires-body=0,script-path=https://raw.githubusercontent.com/app2smile/rules/master/js/spotify-json.js
spotify-proto = type=http-response,pattern=^https:\/\/spclient\.wg\.spotify\.com\/(bootstrap\/v1\/bootstrap|user-customization-service\/v1\/customize)$,requires-body=1,binary-body-mode=1,max-size=0,script-path=https://raw.githubusercontent.com/app2smile/rules/master/js/spotify-proto.js,script-update-interval=0
#************************************#
#SoundCloudGo+
#hostname= api-mobile.soundcloud.com
SoundCloudGo+ = type=http-response,pattern=https://api-mobile.soundcloud.com/configuration/ios,requires-body=1,script-path=https://raw.githubusercontent.com/DungHoang120401/Nobita/refs/heads/Module/SoundCloud.js
#************************************#
#Revenuecat
#hostname = api.revenuecat.com
revenuecat = type=http-response, pattern=^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$), script-path=https://raw.githubusercontent.com/DungHoang120401/Nobita/Module/Locket_Gold.js, requires-body=true, max-size=-1, timeout=60
deleteHeader = type=http-request, pattern=^https:\/\/api\.revenuecat\.com\/.+\/(receipts|subscribers), script-path=https://raw.githubusercontent.com/DungHoang120401/Nobita/Module/LKG_delete_header.js, timeout=60
#************************************#
#Truecaller
#hostname = premium*.truecaller.com
Truecaller = type=http-response,pattern=^https://premium-(.+)\.truecaller\.com/v\d/(subscriptions|products\/apple),requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/DungHoang120401/Nobita/refs/heads/Module/TrueCaller.js

[MITM]
ca-passphrase = Shadowrocket
ca-p12 = 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
enable = true
hostname = %APPEND% *.googlevideo.com, youtubei.googleapis.com, premium*.truecaller.com, sub.store, api.revenuecat.com, spclient.wg.spotify.com, api-mobile.soundcloud.com
