const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? ',
PORT: process.env.PORT === undefined ? "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=311c588fdf89a087" : process.env.PORT,
SESSION_NAME: process.env.PORT === undefined ? "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=VJwBUQSC#5o7k4P7azdtjb0bO69vw15OXHiQ2XJwc4HsH34iShd8,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgresql://postgres:@Asitha2005b@db.waiqbrnuxkjebghzhovz.supabase.co:5432/postgres' : process.env.POSTGRESQL_URL,
};
