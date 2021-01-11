const { check } = require('express-validator');
const usersRepo = require('../../repositories/users');

module.exports = {
    requireEmail: check('email')
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage('Must be valid email address.')
        .custom(async email => {
            const existingUser = await usersRepo.getOneBy({ email });
            if (existingUser) {
                throw new Error('Email already in use');
            }
        }),
    requirePassword: check('password')
        .isLength({ min: 6 })
        .withMessage('Invalid password.'),
    requirePasswordConfirmation: check('passwordConfirmation')
        .isLength({ min: 6 })
        .withMessage('Invalid password.')
        .custom(async (passwordConfirmation, { req }) => {
            if (passwordConfirmation !== req.body.password) {
                throw new Error('Passwords must match');
            }
        }),
    requireEmailExists: check('email')
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage('Must provide a valid email')
        .custom(async email => {
            const user = await usersRepo.getOneBy({ email });
            if (!user) {
                throw new Error('Email not found');
            }
        }),
    requireValidPasswordForUser: check('password')
        .custom(async (password, { req }) => {
            const user = await usersRepo.getOneBy({ email: req.body.email });
            if (!user) {
                throw new Error('Invalid password');
            }
            const validPassword = await usersRepo.comparePasswords(user.password, password);
            if (!validPassword) {
                throw new Error('Invalid password');
            }
        }),
    requireTitle: check('title')
        .trim()
        .isLength({ min: 5, max: 40 })
        .withMessage('Must be between 5 and 40 characters'),
    requirePrice: check('price')
        .trim()
        .toFloat()
        .isFloat({ min: 0 })
        .withMessage('Must be a number greater than 0')
}
