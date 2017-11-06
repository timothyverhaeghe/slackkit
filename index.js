/*
slack.post({
  "channel": 'signups',
  "text": "New signup"
})
*/

const request = require('request');

module.exports = (webhookKey) => {
  return {
    post: (conf, next) => {
      request({
        url: webhookKey,
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        json: {
          channel: conf.channel,
          text: conf.text,
        },
      }, (err, response) => {
        if (err || response.statusCode !== 200){
          console.log("Error in Slackkit:", err);
        } else {
          if(typeof next === 'function'){
            next(false, {
              success: true
            })
          }
        }
      });
    }
  }
};
