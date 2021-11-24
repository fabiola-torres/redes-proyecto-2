const { findRecentTweets, findTweetsByWord } = require('./repository');

async function searchRecentTweets(){
    return await findRecentTweets();
}

async function searchTweetsByWord(word) {
    return await findTweetsByWord(word);
}

module.exports = {
    searchRecentTweets,searchTweetsByWord
}