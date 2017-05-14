var handles = process.argv[2];

if (handles = "my-tweets") {

// Set Up Twitter

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'gcUb1tkB2HUbkpE4Bi7VAfylh',
  consumer_secret: 'Z1lCCIRmiDJiXOYQBAIJyx1Psq4DeLlFAgshPCgOCyV9UU5ttk',
  access_token_key: '854517295485419521-TVfW0uRDbTNZIeaV1tfTAxFQaYlrYMN',
  access_token_secret: 'YKQ2vI2ssbh1p0piFGfODDqoadFRvU64rle2xcTlw7gED'
});
 
// Stream Tweets
var params = {screen_name: 'sodamnfinestein'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets[19].text);
    console.log(tweets[18].text);
    console.log(tweets[17].text);
    console.log(tweets[16].text);
    console.log(tweets[16].text);
    console.log(tweets[14].text);
    console.log(tweets[13].text);
    console.log(tweets[12].text);
    console.log(tweets[11].text);
    console.log(tweets[10].text);
    console.log(tweets[9].text);
    console.log(tweets[8].text);
    console.log(tweets[7].text);
    console.log(tweets[6].text);
    console.log(tweets[5].text);
    console.log(tweets[4].text);
    console.log(tweets[3].text);
    console.log(tweets[2].text);
    console.log(tweets[1].text); 
    console.log(tweets[0].text);
  }
})};