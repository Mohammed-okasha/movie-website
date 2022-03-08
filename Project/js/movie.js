// // Open Menu ==========================
// Get Menu =====
const header = document.querySelector("header");
// // Get Menu Icon Bar Btn
// const menuIcon = document.querySelector(".navigation .menu-icon");

// function openMenu() {

//     menu.classList.toggle("open-menu");
// }

// menuIcon.addEventListener("click", openMenu);

window.onscroll = function() {
    if(window.scrollY >= 20) {

        header.classList.add("fix-icon");

    } else {
        header.classList.remove("fix-icon");
    }
};
//=============================================================================
// [Watch Movie] > Selcet Item
// Get Watched Movie
const watchedMovie = document.querySelector(".watched-movie");
const watchBtn = document.querySelector(".watch-movie .watch-btn");
const closeBtn = watchedMovie.lastElementChild;

const watchMovie = function () {
    watchedMovie.classList.add("paly-movie");
}

const closeMovie = function () {
    watchedMovie.classList.remove("paly-movie");
}

watchBtn.addEventListener("click", watchMovie);
closeBtn.addEventListener("click", closeMovie);
//=============================================================================