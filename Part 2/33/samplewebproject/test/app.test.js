const { strictEqual } = require('assert');
const assert = require('assert');

it('has a text input', async () => {
    const dom = await render('index.html');
    const input = dom.window.document.querySelector('input');

    assert(input);
});

it('shows a success message with a valid email', async () => {
    const dom = await render('index.html');
    const input = dom.window.document.querySelector('input');
    input.value = 'asdqwezsc@qweaszxc.com';

    dom.window.document
        .querySelector('form')
        .dispatchEvent(new dom.window.Event('submit'));

    const h1 = dom.window.document.querySelector('h1');

    assert.strictEqual(h1.innerHTML, 'Looks good!');
});

it('shows a fail message with an invalid email', async () => {
    const dom = await render('index.html');
    const input = dom.window.document.querySelector('input');
    input.value = 'asdqwe.com';

    dom.window.document
        .querySelector('form')
        .dispatchEvent(new dom.window.Event('submit'));

    const h1 = dom.window.document.querySelector('h1');

    assert.strictEqual(h1.innerHTML, 'Invalid email');
});
