const express = require('express');
const { requireEmail, requirePassword, requirePasswordConfirmation, requireEmailExists, requireValidPasswordForUser } = require('./validators');
const usersRepo = require('../../repositories/users');
const signupTemplate = require('../../views/admin/auth/signup');
const signinTemplate = require('../../views/admin/auth/signin');
const { handleErrors } = require('./middlewares');

const router = express();

router.get('/signup', (req, res) => {
    res.send(signupTemplate({}))
});

router.post('/signup',
    [requireEmail, requirePassword, requirePasswordConfirmation],
    handleErrors(signupTemplate),
    async (req, res) => {
        const { email, password } = req.body;
        const user = await usersRepo.create({ email, password });

        req.session.userId = user.id;
        res.redirect('/admin/products');
    }
);

router.get('/signout', (req, res) => {
    req.session = null;
    res.redirect('/signin');
});

router.get('/signin', (req, res) => {
    if (req.session.userId) {
        return res.send('You are already logged in!');
    }
    res.send(signinTemplate({}));
});

router.post('/signin', [requireEmailExists, requireValidPasswordForUser],
    handleErrors(signinTemplate),
    async (req, res) => {
        const { email } = req.body;
        const user = await usersRepo.getOneBy({ email });

        req.session.userId = user.id;
        res.redirect('/admin/products');
    }
);

module.exports = router;
