window.addEventListener('DOMContentLoaded', () => {
    const API_KEY = "f67b2711";
    const form = document.querySelector("form");
    const search = document.querySelector(".header-search");
    const moviesEl = document.querySelector(".movies");
    const paginationEl = document.querySelector('.pagination');
    let currentPage = 1;
    let rows = 10;
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const API_URL = `http://www.omdbapi.com/?apikey=f67b2711&s=${search.value}`;

        getMovies(API_URL);
        search.value = "";

    })

    async function getMovies(url) {
        const resp = await fetch(url);
        const respData = await resp.json();
        showMovies(respData);
        
    }
    async function ShowPage(page) {
        const resp = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search.value}&page=${page}`);
        const respData = await resp.json();
        showMovies(respData);
        displayPagination(respData.totalResults, rows);
    }

    function showMovies(data) {
        moviesEl.innerHTML = "";
        paginationEl.innerHTML="";
        if (!data.Search) {
            moviesEl.innerHTML = "Sorry we cannot find movie";
        }

        data.Search.forEach(movie => {
            const movieEl = document.createElement("div");
            movieEl.classList.add("movie");
            movieEl.innerHTML = `
        <div class="movie">
        <div class="movie-cover-inner">
            <img src="${movie.Poster}"
                class="movie-cover" alt="${movie.Title}" />
            <div class="movie-cover-darkened">
            </div>
        </div>
        <div class="movie-info">
            <div class="movie-title">${movie.Title}</div>
            <div class="movie-year">${movie.Year}</div>
        </div>
    </div>`;
            movieEl.addEventListener("click", () => openModal(movie.imdbID));
            moviesEl.appendChild(movieEl);

        });

    }
    const modalEl = document.querySelector(".modal");
    async function openModal(id) {
        const resp = await fetch("http://www.omdbapi.com/?apikey=f67b2711&i=" + id);
        const respData = await resp.json();
        modalEl.classList.add("modal-show");
        modalEl.innerHTML = `
<div class="modal-card">
    <img class="modal-movie-backdrop" src="${respData.Poster}" alt="">
    <h2>
        <span class="modal-movie-title">${respData.Title}</span>
    </h2>
    <ul class="modal-movie-info">
        <li class="modal-movie-year">Year: ${respData.Year}</li>
        <li class="modal-movie-genre">Genre: ${respData.Genre}</li>
        <li class="modal-movie-runtime">Runtime: ${respData.Runtime}</li>
        <li>Website <a class="modal-movie-website" href="${respData.Website}">${respData.Website}</a></li>
        <li class="modal-movie-plot">Plot: ${respData.Plot}</li>
    </ul>
    <button type="button" class="modal-button-close">Close</button>
</div>
`
        const btnClose = document.querySelector(".modal-button-close");
        btnClose.addEventListener("click", () => closeModal());
    }

    function closeModal() {
        modalEl.classList.remove("modal-show");
        document.body.classList.remove("stop-scrolling");
    }
    window.addEventListener("click", (e) => {
        if (e.target === modalEl) {
            closeModal();
        }
    })
    window.addEventListener("keydown", (e) => {
        if (e.keyCode === 27) {
            closeModal();
        }
    })

    function displayPagination(totalResults, rowPerPage) {
       
        const pagesCount = Math.ceil(totalResults / rowPerPage);
        const ulEl = document.createElement("ul");
        ulEl.classList.add('pagination-list');

        for (let i = 0; i < pagesCount; i++) {
            const liEl = displayPaginationBtn(i + 1);
            ulEl.appendChild(liEl);
        }
        paginationEl.appendChild(ulEl);
        paginationEl = "";
    }

    function displayPaginationBtn(page) {
        const liEl = document.createElement("li");
        liEl.classList.add('pagination-item')
        liEl.innerText = page

        if (currentPage === page) liEl.classList.add('pagination-item-active');

        liEl.addEventListener('click', () => {
            currentPage = page;

            ShowPage(page);

            let currentItemLi = document.querySelector('li.pagination-item-active');
            currentItemLi.classList.remove('pagination-item-active');

            liEl.classList.add('pagination-item-active');
        })

        return liEl;
    }

})