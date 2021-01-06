const APIkey = '540445f0'

const autocompleteConfig = {
    renderOption(movie) {
        const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;
        return `
        <img src='${imgSrc}' />
        ${movie.Title} (${movie.Year})
        `
    },
    inputValue(movie) {
        return movie.Title;
    },
    async fetchData(searchTerm) {
        const response = await axios.get('http://www.omdbapi.com/', {
            params: {
                apikey: APIkey,
                s: searchTerm
            }
        });
    
        if (response.data.Error) {
            return new Array();
        }
        return response.data.Search;
    }
};

createAutoComplete({
    ...autocompleteConfig,
    root : document.querySelector('#left-autocomplete'),
    onOptionSelect(movie) {
        document.querySelector('.tutorial').classList.add('is-hidden');
        onMovieSelect(movie, document.querySelector('#left-summary'), 'left');
    }
});
createAutoComplete({
    ...autocompleteConfig,
    root : document.querySelector('#right-autocomplete'),
    onOptionSelect(movie) {
        document.querySelector('.tutorial').classList.add('is-hidden');
        onMovieSelect(movie, document.querySelector('#right-summary'), 'right');
    }
});

let leftMovie;
let rightMovie;
const onMovieSelect = async (movie, summaryElement, side) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: APIkey,
            i: movie.imdbID
        }
    });

    summaryElement.innerHTML = movieTemplate(response.data);
    if (side === 'left') {
        leftMovie = response.data;
    } else {
        rightMovie = response.data;
    }
    if (leftMovie && rightMovie) {
        runComparison();
    }
};

const runComparison = () => {
    const leftSideStats = document.querySelectorAll('#left-summary .notification');
    const rightSideStats = document.querySelectorAll('#right-summary .notification');
    leftSideStats.forEach((leftStat, index) => {
        const rightStat = rightSideStats[index];
        const leftSideValue = parseInt(leftStat.dataset.value);
        const rightSideValue = parseInt(rightStat.dataset.value);
        if (rightSideValue > leftSideValue) {
            leftStat.classList.remove('is-primary');
            leftStat.classList.add('is-warning');
            rightStat.classList.add('is-primary');
            rightStat.classList.remove('is-warning');
        } else if (rightSideValue < leftSideValue) {
            rightStat.classList.remove('is-primary');
            rightStat.classList.add('is-warning');
            leftStat.classList.add('is-primary');
            leftStat.classList.remove('is-warning');
        }
    });
};

const movieTemplate = movieDetail => {
    const boxOffice = parseInt(movieDetail.BoxOffice.replace(/\$/g, '').replace(/,/g, ''));
    const metascore = parseInt(movieDetail.Metascore);
    const imdbRating = parseFloat(movieDetail.imdbRating);
    const imdbVotes = parseInt(movieDetail.imdbVotes.replace(/,/g, ''));
    const awards = movieDetail.Awards.split(' ').reduce((a, b) => {
        const value = parseInt(b);
        if (isNaN(value)) return a;
        return a + value;
    }, 0);

    return `
    <article class='media'>
        <figure class='media-left'>
            <p class='image'>
                <img src='${movieDetail.Poster}' />
            </p>
        </figure>
        <div class='media-content'>
            <div class='content'>
                <h1>${movieDetail.Title}</h1>
                <h4>${movieDetail.Genre}</h4>
                <p>${movieDetail.Plot}</p>
            </div>
        </div>
    </article>
    <article data-value=${awards} class='notification is-primary'>
        <p class='title'>${movieDetail.Awards}</p>
        <p class='title'>Awards</p>
    </article>
    <article data-value=${boxOffice} class='notification is-primary'>
        <p class='title'>${movieDetail.BoxOffice}</p>
        <p class='title'>Box Office</p>
    </article>
    <article data-value=${metascore} class='notification is-primary'>
        <p class='title'>${movieDetail.Metascore}</p>
        <p class='title'>Metascore</p>
    </article>
    <article data-value=${imdbRating} class='notification is-primary'>
        <p class='title'>${movieDetail.imdbRating}</p>
        <p class='title'>IMDB Rating</p>
    </article>
    <article data-value=${imdbVotes} class='notification is-primary'>
        <p class='title'>${movieDetail.imdbVotes}</p>
        <p class='title'>IMDB Votes</p>
    </article>
    `;
};
