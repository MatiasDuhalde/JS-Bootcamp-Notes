const waitFor = (selector, limit) => {
    if (!limit) {
        limit = 2000;
    }
    return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
            if (document.querySelector(selector)) {
                clearInterval(interval);
                clearTimeout(timeout);
                resolve();
            }
        }, 100);

        const timeout = setTimeout(() => {
            clearInterval(interval);
            reject();
        }, limit);
    });
}

beforeEach(() => {
    document.querySelector('#target').innerHTML = '';
    createAutoComplete({
        root: document.querySelector('#target'),
        fetchData() {
            return [
                { Title: 'Test1' },
                { Title: 'Test2' },
                { Title: 'Test3' }
            ]
        },
        renderOption(movie) {
            return movie.Title + '<br>';
        }
    });
});

it('Dropdown starts closed', () => {
    const dropdown = document.querySelector('.dropdown');
    expect(dropdown.className).not.to.include('is-active');
});

it('After searching dropdown opens up', async () => {
    const input = document.querySelector('.input')
    input.value = 'avengers';
    input.dispatchEvent(new Event('input'));

    await waitFor('.dropdown-item', 5000);

    const dropdown = document.querySelector('.dropdown');
    expect(dropdown.className).to.include('is-active');
});

it('After searching, displays some results', async () => {
    const input = document.querySelector('.input')
    input.value = 'avengers';
    input.dispatchEvent(new Event('input'));

    await waitFor('.dropdown-item', 5000);

    const items = document.querySelectorAll('.dropdown-item');
    expect(items.length).to.equal(3);
});
