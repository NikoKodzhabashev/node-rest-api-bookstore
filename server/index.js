const env = process.env.NODE_ENV || 'development';

const config = require('./config/settings')[env];
require('./config/database')(config);
const app = require('express')();
require('./config/express')(app);
require('./config/passport')();
app.listen(config.port);