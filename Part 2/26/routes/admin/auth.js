const express = require('express');
const { validationResult } = require('express-validator');
const { requireEmail, requirePassword, requirePasswordConfirmation, requireEmailExists, requireValidPasswordForUser } = require('./validators');
const usersRepo = require('../../repositories/users');
const signupTemplate = require('../../views/admin/auth/signup');
const signinTemplate = require('../../views/admin/auth/signin');

const router = express();

router.get('/signup', (req, res) => {
    res.send(signupTemplate({}))
});

router.post('/signup',
    [requireEmail, requirePassword, requirePasswordConfirmation],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.send(signupTemplate({ errors }));
        }

        const { email, password } = req.body;
        const user = await usersRepo.create({ email, password });

        req.session.userId = user.id;
        res.send('Account created!');
    }
);

router.get('/signout', (req, res) => {
    req.session = null;
    res.send(`Successfully signed out`);
});

router.get('/signin', (req, res) => {
    if (req.session.userId) {
        return res.send('You are already logged in!');
    }
    res.send(signinTemplate({}));
});

router.post('/signin', [
        requireEmailExists,
        requireValidPasswordForUser
    ], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.send(signinTemplate({ errors }));
        }

        const { email } = req.body;
        const user = await usersRepo.getOneBy({ email });

        req.session.userId = user.id;
        res.send('Successfully signed in!');
    }
);

module.exports = router;
