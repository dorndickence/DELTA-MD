const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94766494699"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanytofficial:s4salmanyt@cluster0.6wtgil3.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || '8000'
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '94766494699' 
global.devs = '923184070915';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUNSQit6UmtJNjZlL3dIckdFblBWTmxtTDlxdHk0dGV5V1VNSVNiZWhVWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVlkzdTZEUjlOanBkZlh1eFVFamVrVXB1UWxRbWhzYWxUemNDVk9QWkJ4Yz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhRHZCTjdOY3FTKzAvbHN0bklKYjdDOXBNc2N0SzdkV2ZBRERCK2ZYOTFrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaU0tobHFOUW5oMGhtemUyQ0kxamtocEg3QlRGRXJkVUU2Y0pLWE12TFc4PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdFTXZtbmczSzB3Y2RHbVFjWnR4WlpFZ3dUK25MTUp4VjRNN0lPY1VEVjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlM1Y3Y2TFR3SW12TkE2NjZrRFF0VGRVWUJ0R3JOTjc5UG1OSUJtbXo3eGs9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqVnRWbjZ1RS9TUURhSHdYNmhFU1c2NHozeFB0U1ZpUVFiMURtZm1rM1NWMElqNVJnUVlpbTg0T2wzK25Qc3hiMVVSMHVmcmRySFVOb2YycUxLbE1CUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE2OSwiYWR2U2VjcmV0S2V5IjoiNlBUK1FWVm53OUNSb1JlMnUxU1FUOUJ1bHptVnd5TXhNS3FYWW91cTlPWT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiaFdNeU9CNERSNzJYRXNvZGpJMW5tQSIsInBob25lSWQiOiJhNzRiYWY2NC02MDBkLTRjMTItOGZiMy00YmY2OTAyNDU5NWYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieENFdk1id0JYYk14cDZSWVNadWpSTmtmRVBVPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjWjJyUTd3NUhGM0NzbDlQekJnWkFWSno3NXM9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNOVGZsZEFGRU5UbG1La0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ii9Nc2s2L0RUUnFISzEvTmtLdEpuWkxmb3VFZHNQbmI4SHByeHR4WHBzQmc9IiwiYWNjb3VudFNpZ25hdHVyZSI6InBmZUMvTStpaXBpeXo3TTFNZWVzbFlFbU5kdGtSWk1hWUt6VFZBb3RLQzIvaTlJSU9WYU1RM3pSSWxDYjRPbWlaNml0dnF2b2JPYlVrRU5Id1BjZkJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJUdC9hYmNZcDhZNE5lQ3B3b2sxRk50OEQwYm5jQXNYcSs4WVZoaXd4UkFBTlZTdHBTMjBoWU9ZN2ZmVnJHU25QQXU1NVJNQk1VRDVMZUtsYmpvMkVEQT09In0sIm1lIjp7ImlkIjoiOTQ3NjY0OTQ2OTk6MzVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4Ly68J2YvyDwnZmdIPCdmZYg8J2ZqyDwnZmaIF8g4bSN4bSF4Z+aIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzY2NDk0Njk5OjM1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZ6TEpPdncwMGFoeXRmelpDclNaMlMzNkxoSGJENTIvQjZhOGJjVjZiQVkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE2OTcwMDIxOTl9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '',
  packname:  process.env.PACK_NAME || '',
   
  botname:   process.env.BOT_NAME === undefined ? "𝙓𝙇𝙄𝘾𝙊𝙉-𝙈𝘿" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? ' 🍃⃝⃕@𝘿 𝙝 𝙖 𝙫 𝙚 _ 𝙈𝘿' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? 'true' : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? 'true' : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? 'true' : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? 'false' : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? 'false' : process.env.LEVEL_UP_MESSAGE,
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
