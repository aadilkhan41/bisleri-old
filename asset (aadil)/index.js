function renderPhoneMenu(){
    document.querySelector(".phone-menu").style.left = "0";
    document.querySelector(".phone-menu").style.width = "100%";
}

function hidePhoneMenu(){
    document.querySelector(".phone-menu").style.left = "-50px";
    document.querySelector(".phone-menu").style.width = "0%";
}

function renderSubMenu(className){
    document.querySelector("."+className).style.display = "block";
}

function hideSubMenu(className){
    document.querySelector("."+className).style.display = "none";
}





function emptyCart(){
    document.querySelector('.empty-cart-msg').style.top = "135px";

    setTimeout(() => {
        document.querySelector('.empty-cart-msg').style.top = "0";
    }, 1000);
}



function hideAppAd(){
    document.querySelector(".app-ad").style.display = "none";
    document.querySelector("header").style.top = "0px";
}

function renderwater(id){
    let obj1 = document.querySelector(".bisleri-water-panel");
    let obj2 = document.querySelector(".vedica-water-panel");
    let obj3 = document.querySelector(".fizzy-drinks-panel");
    document.querySelector(".brand-trust-panel .active").classList.remove("active");

    if(id==1){
        document.querySelector(".bisleri-water i").classList.add("active");
        obj1.style.display = "flex";
        obj2.style.display = "none";
        obj3.style.display = "none";
    }else if(id==2){
        document.querySelector(".vedica-water i").classList.add("active");
        obj1.style.display = "none";
        obj2.style.display = "flex";
        obj3.style.display = "none";
    }else if(id==3){
        document.querySelector(".fizzy-drinks i").classList.add("active");
        obj1.style.display = "none";
        obj2.style.display = "none";
        obj3.style.display = "flex";
    }
}

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    loader.style.display = "none";
});





let bannerHeight = 0;
adjustBannerHeights();

function adjustBannerHeights() {
    const aspectRatioWidth = 640;
    const aspectRatioHeight = 269;
    const contObj = document.getElementById('banner-container');
    const containerWidth = contObj.offsetWidth;

    if (window.innerWidth <= 480) {
        contObj.innerHTML = "<div class='banners' id='banners'><div class='banner'><img src='https://www.bisleri.com/images/home-banner-slider/bisleri-banner-home-mob.webp' alt='Bisleri Banner' id='banner1'></div><div class='banner'><img src='https://www.bisleri.com/images/home-banner-slider/vedica-banner-mob.webp' alt='Vedica Banner' id='banner2'></div><div class='banner'><img src='https://www.bisleri.com/images/home-banner-slider/fizz-banner-mob.webp' alt='Fizz Banner' id='banner3'></div></div><div class='buttons'><button title='Bisleri Packaged Drinking Water' class='button active' onclick='showBanner(0)'></button><button title='Vedica - Himalayan Spring Water' class='button' onclick='showBanner(1)'></button><button title='Carbonated Soft Drinks' class='button' onclick='showBanner(2)'></button></div>";
        bannerHeight = "auto";
    } else {
        contObj.innerHTML = "<div class='banners' id='banners'><div class='banner'><img src='asset/bisleri-banner-home.webp' alt='Bisleri Banner' id='banner1'></div><div class='banner'><img src='asset/vedica-banner.webp' alt='Fizz Banner' id='banner2'></div><div class='banner'><img src='asset/fizz-banner.webp' alt='Vedica Banner' id='banner3'></div></div><div class='buttons'><button class='button active' onclick='showBanner(0)'>Bisleri Packaged Drinking Water</button><button class='button' onclick='showBanner(1)'>Vedica - Himalayan Spring Water</button><button class='button' onclick='showBanner(2)'>Carbonated Soft Drinks</button></div>";
        bannerHeight = (containerWidth / aspectRatioWidth) * aspectRatioHeight;
    }

    document.querySelector('.banner-container').style.height = bannerHeight === "auto" ? "auto" : bannerHeight + "px";
}

function showBanner(index) {
    const banners = document.getElementById('banners');

    if (window.innerWidth <= 480) {
        const bannerWidth = document.querySelector('.banner').offsetWidth;
        banners.scrollTo({ left: index * bannerWidth, behavior: 'smooth' });
    } else {
        banners.style.transform = `translateY(-${index * bannerHeight}px)`;
    }

    // Update active button
    const buttons = document.querySelectorAll('.button');
    buttons.forEach((button, i) => {
        button.classList.toggle('active', i === index);
    });
}

window.onload = function() {
    adjustBannerHeights();
};

window.onresize = function() {
    adjustBannerHeights();
};









// Get the button
const backToTopButton = document.querySelector(".backtoup");

// Show button when user scrolls down 300px
window.onscroll = () => {
    if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Scroll to top when button is clicked
backToTopButton.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// Select Elements
const toggleButton = document.querySelector(".down"); // Default state: down
const dropdownMenu = document.querySelector(".drop-down");
const headerLoc = document.querySelector(".header-loc");

// Toggle Dropdown Visibility and Class
toggleButton.addEventListener("click", () => {
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none"; // Hide dropdown
        toggleButton.classList.remove("up");
        toggleButton.classList.add("down"); // Reset class
    } else {
        dropdownMenu.style.display = "block"; // Show dropdown
        toggleButton.classList.remove("down");
        toggleButton.classList.add("up"); // Change class
    }
});

// Replace Text on List Click
dropdownMenu.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        toggleButton.textContent = event.target.textContent; // Replace text
        dropdownMenu.style.display = "none"; // Hide dropdown
        toggleButton.classList.remove("up");
        toggleButton.classList.add("down"); // Set class back to 'down'
    }
});

// Hide Dropdown on Outside Click
document.addEventListener("click", (event) => {
    if (!headerLoc.contains(event.target)) {
        dropdownMenu.style.display = "none";
        toggleButton.classList.remove("up");
        toggleButton.classList.add("down");
    }
});

function renderSearchBar(){
    document.querySelector(".search-bar-panel").style.display = "flex";
}

function hideSearchBar(){
    document.querySelector(".search-bar-panel").style.display = "none";
}