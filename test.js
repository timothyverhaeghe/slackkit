require('dotenv').config();

const slack = require('./index.js')(process.env.SLACKWEBHOOK)
slack.post({
  "channel": '@timothyverhaeghe',
  "text": "Test test"
})
