const Twitter = require('twit');
const credentials = require('../../config/config').TwitterCredentials;
const apiClient = new Twitter(credentials);

async function findRecentTweets(){
    const params = { tweet_mode: 'extended', count: 200};
    const data = await apiClient.get(`statuses/home_timeline`, params);
    return data;
}

async function findTweetsByWord(word) {
    if (!word) throw new Error('Se requiere una palabra para realizar la búsqueda');
    const params = { tweet_mode: 'extended', count: 200, q: word, result_type: 'recent', lang: 'es'};
    const data = await apiClient.get(`search/tweets`, params);
    return data;
}

module.exports = {
    findRecentTweets, findTweetsByWord
};