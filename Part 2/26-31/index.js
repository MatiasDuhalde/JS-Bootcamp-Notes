const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const express = require('express');
const authRouter = require('./routes/admin/auth');
const adminProductsRouter = require('./routes/admin/products');
const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');

const app = express();

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({
    keys: ['9fncsi01sk3e5']
}));
app.use(authRouter);
app.use(adminProductsRouter);
app.use(productsRouter);
app.use(cartsRouter);

app.listen(3000, () => {
    console.log('Listening...');
});
