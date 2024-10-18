//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/50938857741 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "50938857741";
global.owner = process.env.OWNER_NUMBER || "237656520674";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/kbc224.mp4,https://files.catbox.moe/dhii42.mp4,https://files.catbox.moe/lgj91g.mp4,https://files.catbox.moe/hvjoe6.mp4,https://files.catbox.moe/4ogeum.mp4,https://files.catbox.moe/0cmaxl.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kgtech-v2-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUNqVTA5a1lZNk5Qa21iZXMwbG5OSHM2eHhISGtnTzVBNS9iaHlUWkgxND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmZtUWJjSEtyS203T0JpYXpkL2VyTHVVVmhUY1J3RVNheG5kWXRwYXhGYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1TG9HRGRQRW5xcmltUjdLQXBCeGJhcEV6TlZyY0pJcHlQKzYxakV0QzNrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDOXJ0QmsrUHJYdi9TeUlLL00vQ2kzSEVTNkxYc29yNHdQelRWZlErZFVVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktNeFg2M3R0SXRiU3hyNloxQWVIWno4U0RKK2JtWlo5UlNiY3AwaXJoWE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFSUnBia2VIOTlxZG9ZcE9udk1ZSTM3cG96ajNMR2ZzbkdYUlM0aGQ5bms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUlPblNzaW5xWUk1UHFCYTNpNElhdGd0anpQbjlsZ1NEL2xoSFRRVFNWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1BkQmk0K3dzNFBCU0MvNExoZEcyQmJxS2h5T0lNZzFaRG84RWpDMXhBZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitpWTJaMmw3dmxyUnlXcWIwRm0vNW9xUTFOUzlLYTNsUTFKRjd0cW9kWmpIMkoreG9tTnhXRUovazdEaXNlbzJEdmZHZjkxc3JWbGVPbDNuUldueWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgzLCJhZHZTZWNyZXRLZXkiOiJ1cE5Ga0t0Ky8zU1FPeFU0N3UvVnN5NmJXOElaOEF2K2M1TnFHQ00zaU5rPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjUwOTM4ODU3NzQxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjJERjAyMjI3QUI1NTg5RjE5MDAxMDZEMTZCMUVDOTc0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjkyOTU3MDF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjUwOTM4ODU3NzQxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjFDNUM3OEQ2QzI0RjA0QkI1NzI0N0JDNEZDRUIxRUNCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjkyOTU3MDF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IllqeFJDbTVnU0thSVBWdzR1ejFjQ2ciLCJwaG9uZUlkIjoiMTMwZTMwN2YtNzc0ZS00NTBkLTg2ODktZWQ0OGI1MGQ4YjI0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNVSWhkbVdzb2w1YkJFSG8yeHFVZGF4Tk9xWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGK1pRaldxZ3E2azcxYkRyWFlkNy9jaVcwbmM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMVBLRkdQTDgiLCJtZSI6eyJpZCI6IjUwOTM4ODU3NzQxOjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4oiGTuKIhktPSkkg8J+nmOKAjeKZgu+4jyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTkh3NDdnSEVNWHF5N2dHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibTlMQUkxV2tZcG9BS1MyRktXRW9tdnFuNHJodzduRzNKUUh6Q2tSM1ZXYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWjNiYlg1Z1lZRzY5N0V0eCtFMW9WcWtlbnA3bS84L2tQdVUvOHFvNi9TQ2M0NnE0M3BpTXpMVjEvZ2ZCdnRMRjFZMkw5RXVMSFlpbFc3SnpiNzd4QXc9PSIsImRldmljZVNpZ25hdHVyZSI6IlEwRFlsQkMxZkptQXJxeURxNnZUUlZETTVFOTM2NWQ2K0U2ZkxBbzl3aU0vOHpUSkVwcEpqSmJ1UGxib2JJVGxqR0hRV3hXUVdCR1RGN1dMaG14eWdRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5Mzg4NTc3NDE6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJadlN3Q05WcEdLYUFDa3RoU2xoS0pyNnArSzRjTzV4dHlVQjh3cEVkMVZuIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5Mjk1Njk4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUcvRCJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜ KG TECH⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
