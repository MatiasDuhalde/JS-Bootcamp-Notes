const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const express = require('express');
const authRouter = require('./routes/admin/auth');
const productsRouter = require('./routes/admin/products');

const app = express();

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({
    keys: ['9fncsi01sk3e5']
}));
app.use(authRouter);
app.use(productsRouter);

app.listen(3000, () => {
    console.log('Listening...');
});
