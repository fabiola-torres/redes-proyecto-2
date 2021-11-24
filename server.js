const port = require('./config/config').port;
const config = require('./config/config');
const express = require('express');
const app = express();

app.use(require('cors')());
app.use(require('body-parser').json());

app.use('/tweets', require('./api/Controllers/TweetsController'));

app.listen(port, () => console.log(`Server running on port ${port}...`));



