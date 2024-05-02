const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="jastinmtewa@yahoo.com"
global.location="Morogoro,Tanzania."
global.mongodb= process.env.MONGODB_URI || ""

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Dodoma";
global.github=process.env.GITHUB|| "https://github.com/kingjux/Venocyber-md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349075552702";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349075552702";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '3',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5,
global.disablepm = process.env.DISABLE_PM || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2349075552702,255xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,255xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349075552702,255xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://myqr-43bb863fa5eb.herokuapp.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0lPUC9KM1dqdHZadTVzWVdCZWFuUG9LbXhKYm5JMVhUcndIM2dLeXpIYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiclZVcHhxUCs3eUFzdkRZQVFpK0RnRWZlMGx1RlV3TXVhem4zWXRRYVJ3QT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSXRlZjl4K0lWcVUxTU5ZalJEdTRXcFRLS0M0VW1FU0lSRTBPVjhSdUg4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBUkRGQzNXZ20vZ3d3cFI2b3RLVUtMeGI3RDExY0xobkRKSlhnZDJEVDJjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVMNmJpVE9oU1liZkhXOGNucVRGK3JpMHRqZFFSUk1FZUVIQUIvTmlrM2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNjNWt0NEpsRW5VdklBY3h2TUtRSjBHM2F2V2U3MG5OYjlnK0RrUWcvRXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ09QRXpaUVZnemptWHhOeUJLZUhhVGJGVHRZejlmUm1DR2M4cjl1MUJtQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRy8vVWxrR0lDVzNjSFhaWkwyTnkrQXZ0NjQxSFUyL2lpdVc0SE8zUmVqQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9kOVY3VDlSUWllWndRR2R6MUdWOFNFTWUrUGlLb2tXanBnbE5mazNVSjkzTTJDREJEM3l3bzR5VDlCWEw4eW9xb1hKUHAzVEFWZXdScTlQV3Vmb2lRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk0LCJhZHZTZWNyZXRLZXkiOiJSSzFESHF6OGRta21nOUoyQ21ybTFMWW94QXRQbWFzRU14RFdySmRLWnl3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJSOHNRb3E0RVJSbV9QclBDbWZMMEFBIiwicGhvbmVJZCI6IjQ1ODExYWEyLTgwYTEtNDc2OC1iZWIyLWQwNzg1MGJjMjY2NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYZEllS2NFaEVYS1N5c1V6TEhycy9iNXE3dDg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHp4dER2eVRnbzNibC82K1A2dmZ2a3lDUTI0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjdUUzMyVk5GIiwibWUiOnsiaWQiOiIyMzQ5MDc1NTUyNzAyOjE5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkavwnZGsIPCdkbDwnZG18J2RtfCdkbbwnZGp8J2RrPCdkbrwnZG7In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMbWZyTklCRU9PeDBMRUdHQW9nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIwTlRpcXUycUZheVliQnQ2TVRBeTJ1TEhqUEc2c0NLU2FhUHk2ZnhtVW5VPSIsImFjY291bnRTaWduYXR1cmUiOiJ0aVJ5U2pkVUk1WmkzYjZWWVBhenp0ZnFrcXFyL0tmSGMvci9LZG82cWR0alhzKzdibU9yeU1TU2I1RU56SXFZNXM5RkdsWjRUdm9IUVc4WUtoazZEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVmJSanI5TmkxaVlTL0JvYzFobjlRZ0tMdXFkUjFyczZZcTJhUllURjh5NjdvRk81aWhKckhUdG9lYnB0SFNxb1NOdCtrTldyU3hHK0o3cW42b2diaUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDc1NTUyNzAyOjE5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmREVTRxcnRxaFdzbUd3YmVqRXdNdHJpeDR6eHVyQWlrbW1qOHVuOFpsSjEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTQ2OTAyODgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTmlvIn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Venocyber-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.0.0",
  caption : process.env.CAPTION || "©²⁰²⁴ ᴠᴇɴᴏᴄʏʙᴇʀ ᴍᴅ" , // ```『 ²⁴ ᴠᴇɴᴏᴄʏʙᴇʀ-ᴍᴅ 』```", //*『ᴠᴇɴᴏᴄʏʙᴇʀ ᴍᴅ』*\n youtube.com/@JASTINMTEWA-vn9pl"),
 
  author : process.env.PACK_AUTHER|| "𝛁𝚵𝚴𝚯𝐂𝐘𝚩𝚵𝚪-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "𝛁𝚵𝚴𝚯𝐂𝐘𝚩𝚵𝚪 𝚳𝐃",
  ownername:process.env.OWNER_NAME|| "It's Venocyber",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "VENOCYBER",



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.0.0 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
