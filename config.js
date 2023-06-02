const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  token_key: process.env.TELEGRAM_TOKEN
};