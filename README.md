# slackkit
The most simple Slack notification package.


## Example
```js
const slack = require('slackkit')(SLACKWEBHOOK);
slack.post({
  "channel": 'signups',
  "text": "New signup"
})
```

## Installation
```bash
npm install slackkit
```

Get your webhook at: https://api.slack.com/incoming-webhooks


## License
Do whatever you want.


## Contributors
- Timothy Verhaeghe (me@timothyverhaeghe.com)
