const Twitter = require('twit')
require('dotenv/config');

const TwitterCredentials ={
  consumer_key:         process.env.CONSUMER_KEY,
  consumer_secret:      process.env.CONSUMER_SECRET,
  access_token:         process.env.ACCESS_TOKEN,
  access_token_secret:  process.env.ACCESS_TOKEN_SECRET
};
const port = process.env.PORT || 3000;

module.exports = {
  port,
  TwitterCredentials
};