const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ req, errors }) => {
    return layout({
        content: `
            <div>
                <form method="POST">
                    <input name="email" placeholder="email" />
                    ${getError(errors, 'email')}
                    <input name="password" placeholder="password" type="password" />
                    ${getError(errors, 'password')}
                    <input name="passwordConfirmation" placeholder="password confirmation" type="password" />
                    ${getError(errors, 'passwordConfirmation')}
                    <button>Sign Up</button>
                </form>
            </div>
        `
    });
}
