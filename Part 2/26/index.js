const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const express = require('express');
const authRouter = require('./routes/admin/auth');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({
    keys: ['9fncsi01sk3e5']
}));
app.use(authRouter);

app.listen(3000, () => {
    console.log('Listening...');
});
