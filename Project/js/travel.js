// Arrow Up Btn > Scroll Top
const up = document.querySelector(".up");

window.addEventListener("scroll", () => {

    if(window.scrollY >= 1200) {

        if(up !== null) {

            up.classList.add("show-up-btn");
        }

    }  else {
        up.classList.remove("show-up-btn");
    }
});

up.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
//=======================================================================
// The Register Form
// Get User Btn Icon
const user = document.querySelector(".right-menu .user");
// Get Cose Form Btn
const closeBtn = document.querySelector(".form .close-form");

// Get register-form
const registerForm = document.querySelector(".register-form");
// Get Form From Parent Element > Container
const form = document.querySelector(".register-form .form");

function showRegisterForm() {

    if(!registerForm.classList.contains(".show-register-form")) {

        registerForm.classList.add("show-register-form");
    }

    if(!form.classList.contains("show-form")) {

        form.classList.add("show-form");
    }
}

function closeRegisterForm() {

    if(!registerForm.classList.contains(".show-register-form")) {

        registerForm.classList.remove("show-register-form");
    }

    
    if(form.classList.contains("show-form")) {

        form.classList.remove("show-form");
    }
}

user.addEventListener("click", showRegisterForm);
closeBtn.addEventListener("click", closeRegisterForm);


// [Form Control] > Get Btns
const btns = document.querySelectorAll(".register-form .btns button");
// [Form Control] > Get Sign Up Btn
const register = document.querySelector(".form .btns .register");
// [Form Control] > Get login Btn
const login = document.querySelector(".form .btns .login");


btns.forEach((btn) => {

    btn.addEventListener("click", (e) => {

        btns.forEach((btn) => {

            btn.classList.remove("active");
        });

        e.currentTarget.classList.add("active");
    });
});

register.addEventListener("click", () => {
    form.classList.add("control-form");
});

login.addEventListener("click", () => {
    form.classList.remove("control-form");
});

// Get Sign Up Link
const signUp = document.querySelector(".create-acc a");

signUp.addEventListener("click", () => {
    form.classList.add("control-form");

    register.classList.add("active");
    login.classList.remove("active");
});
//=======================================================================
// Search Input
const searchInput = document.querySelector(".search-input");
// Search Btn
const searchBtn = document.querySelector(".right-menu .search");
// Close Btn
const close = document.querySelector(".search-input .close");

function cpenSearchInput() {
    searchInput.classList.add("open-search-input");
}

function closeSearchInput() {
    searchInput.classList.remove("open-search-input");
}

searchBtn.addEventListener("click", cpenSearchInput);
close.addEventListener("click", closeSearchInput);
//=======================================================================
// [Show Menu] //
// // Get Nav Menu
// const menu = document.querySelector(".nav-bar .menu");
// Get Burger Bar Btn
const toggleBar = document.querySelector(".nav-bar .toggle");

toggleBar.addEventListener("click", () => {

    // Get Nav Menu From toggle Bar > nextElementSibling
    const menu = toggleBar.nextElementSibling;

    // menu.classList.toggle("open-menu");

    if(!menu.classList.contains("open-menu")) {

        menu.classList.add("open-menu");
    } else {

        menu.classList.remove("open-menu");
    }
});
//=======================================================================
// Get Dots Btn
const dots = document.querySelectorAll("#about .dot");

// Get Control Video Btn
const videoBtn = document.querySelector(".video-slider .control-btn");

//Get Video
const video = document.querySelector("#about .video");

dots.forEach((dot) => {
    dot.addEventListener("click", () => {

        let src = dot.getAttribute("data-src");

        // Get Video From Parent Dot => [previousElementSibling]
        let video = dot.parentElement.previousElementSibling;

        video.src = src;
    });
});

videoBtn.addEventListener("click", () => {

    // const switchBtn = videoBtn.firstElementChild;

    if(!videoBtn.classList.contains("paused")) {

        videoBtn.classList.add("paused");
        video.pause();

    } else {

        videoBtn.classList.remove("paused");
        video.play();
    }
});

// function pausedVideo() {

//     if(this.classList.contains(""))
// }
//=======================================================================
// [Preview Carts] //
// Get Carts Content
let carts = document.querySelectorAll(".cart-content");

// Get preview Carts
let previewCart = document.querySelectorAll(".preview .cart");

carts.forEach((cart) => {

    let data = cart.getAttribute("data-preview");

    cart.addEventListener("click", () => {

        previewCart.forEach((cart) => {

            let name = cart.getAttribute("data-name");

            // Get Preview Parent From Cart Child
            const previewParent = cart.parentElement.parentElement;

            previewParent.classList.add("overlay")

            if(data === name) {
                cart.classList.add("show-cart");
            }
        });
    });
});

previewCart.forEach((preview) => {

    // Get Preview Parent From Cart Child
    const previewParent = preview.parentElement.parentElement;

    // Get Close Btn From Parent Cart
    const closeBtn = preview.lastElementChild;

    closeBtn.addEventListener("click", () => {

        closeBtn.parentElement.classList.remove("show-cart");

        previewParent.classList.remove("overlay")
    });
});
//=======================================================================



