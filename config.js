const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94766494699"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanytofficial:s4salmanyt@cluster0.6wtgil3.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 8000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '94766494699' 
global.devs = '923184070915';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUxLbmg0eUR2ZDYwWXBMNk5lb0lhUVpkUTFJS1VvSm01VjdzdTZjS0ZHdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVWhEWmk0TnBheUp0U3BWK3lvRCtUd251RnlDbkxJVVhXT2JudkN4dnh6Yz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlQUVDU2drV3V5RkErN3Q3bEduMFhlTEpkWWFEYlJwUVBjRlZBK1VnSlh3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpOTVEa3RnbXB1MysyL290K1VjRHhSdWh5djRzaHpQTXlkamJDVUhXK0JRPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRLY2ZYSFg2bmdaS3VSRHJ1Q2R4ZkpEcmJiUFRKSStBZDIxYjZ0Z1pJRTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRIRHJKOVQ4dTZVTzZHUVNKb1oyRk01a0pOZUZVRWFHQXZXKzdZNkJHbG89In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxb3lxTjB0VHhvaHRtRDZ0OVNHeWhKb2s5L0pYWUIvalJaVGxHc1M0eW0rT2lNTmNIOHBTc1RqMjFTYkZZR29wSHZ3RnFQVXpuQXQ2eEFSTms4Nk1Bdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE0MiwiYWR2U2VjcmV0S2V5IjoiRHlYYWk1UmVGeVpsMk4wcDZ2a25nQkFpVnVacGtUc1QrZUtXR3d2YVRlYz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTWt5aDA5ZHFUV0NpSlM0bndSZVdRZyIsInBob25lSWQiOiJhMmZhMzExMC05Yzc3LTQ0OTctYTE4NS0xMmQxMTgyNGRlZGIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiajNoaFlrVy9waFRBS3FYWnI0NVM4Ump1NFFNPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxNEVneWpPYWU2Wk02UjZISEZhNGprR3JMcmc9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNJbTI1NVFIRUliZG1La0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ii8rd3pNVDZEbVlvbnl5ZkhzekFhakdEWUNFaUJ1VTdyeWR0cXBEbVJoQU09IiwiYWNjb3VudFNpZ25hdHVyZSI6ImxzMmUrU1ZrY0pJakExOWVuNitRdDViQTJFMTRjekJ1cEVTZnFPN3BPMnhDY2pucVRNbTNVbFhhdVcydGhZVmhjbHJiMDFXZG1MNDViMHFPcmtPMkJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJHbnRXa2JZRnBXRU5rc0tpNlpMbnlRL01BTHlETmg1NEdybGNKeGRqenZ6NG9xY1NsM2o4bGw1eE1JNEE3TDhvN3FjNUUwcnhFL1ZlT3RyNnNvdkxCUT09In0sIm1lIjp7ImlkIjoiOTQ3MjE0ODcxNjg6ODZAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjE0ODcxNjg6ODZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZi9zTXpFK2c1bUtKOHNueDdNd0dveGcyQWhJZ2JsTzY4bmJhcVE1a1lRRCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTY5NzAwMTA5Nn0=",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '',
  packname:  process.env.PACK_NAME || '',
   
  botname:   process.env.BOT_NAME === undefined ? "𝙓𝙇𝙄𝘾𝙊𝙉-𝙈𝘿" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? ' 🍃⃝⃕@𝘿 𝙝 𝙖 𝙫 𝙚 _ 𝙈𝘿' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? 'false' : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? 'true' : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? 'true' : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'true' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOKU',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
