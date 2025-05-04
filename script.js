var elems = document.querySelectorAll('.elem');
var page2 = document.querySelector("#page2");
var goTop = document.querySelector("#page4 #footer-up h3");
var toggleIcon = document.querySelector("#toggle-icon");
var navLinks = document.querySelector("#nav-links");
var arrowDown = document.querySelector("#page1-bottom i");

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
}

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? null : 'light';
    
    if (newTheme) {
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    } else {
        htmlElement.removeAttribute('data-theme');
        localStorage.removeItem('theme');
    }
});

// Progressive image loading
function handleImageLoading() {
    const images = document.querySelectorAll('.image-div img');
    
    images.forEach(img => {
        // Create placeholder div
        const placeholder = document.createElement('div');
        placeholder.className = 'placeholder';
        placeholder.style.backgroundImage = `url(${img.src}?size=small)`;
        img.parentElement.insertBefore(placeholder, img);

        // Load high quality image
        const highResImage = new Image();
        highResImage.src = img.src;
        highResImage.onload = () => {
            img.classList.add('loaded');
            placeholder.classList.add('hidden');
        };
    });
}

function loading() {
    var tl = gsap.timeline();

    tl.to("#yellow-div1", {
        top: "-100%",
        delay: 0.3,
        duration: 0.4,
        ease: "expo.out" // to learn more visit gsap easing 
    });

    tl.to("#nav svg", {
        delay: -0.2,
        display: "block"
    }, "nav");

    tl.to("#nav-links", {
        delay: -0.6,
        opacity: 1
    }, "nav");

    tl.to("#page1-bottom h3, i", {
        opacity: 1
    }, "nav")

    tl.from("#yellow-div2", {
        top: "100%",
        delay: 0.5,
        duration: 0.5,
        ease: "expo.out" // to learn more visit gsap easing 
    }, "jas");

    tl.to("#loader h1", {
        delay: 0.5,
        duration: 0.5,
        color: "black"
    }, "jas");

    // to change the color of the logo
    tl.to("#nav svg path", {
        delay: -0.3,
        fill: "black"
    }, "endAnime");

    tl.to("#nav-links h3, i", {
        delay: -0.7,
        color: "black"
    }, "endAnime");

    tl.to("#loader", {
        display: "none",
        onComplete: () => {
            handleImageLoading();
        }
        // at end we don't need the loader, just the main page
    });

};

loading();

function locoScrollEffects() {
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    goTop.addEventListener("click", function () {
        // console.log("Jasjeet");

        //locoScroll is the name we gave to our scroll
        locoScroll.scrollTo(0); //don't why #page1 not working
    });

    arrowDown.addEventListener("click", function() {
        locoScroll.scrollTo("#page3");
    })
};

locoScrollEffects();

function navLinksAnime() {
    toggleIcon.addEventListener('click', () => {
        navLinks.classList.toggle('collapsed');
        toggleIcon.classList.toggle('collapsed');
    });
}

navLinksAnime();


elems.forEach(function (ele) {
    ele.addEventListener("mouseenter", function () {
        // console.log("hello");
        var bgImg = ele.getAttribute("data-img");
        page2.style.backgroundImage = `url(${bgImg})`;
    })

    ele.addEventListener("mouseleave", function () {
        // console.log("hello");
        page2.style.backgroundImage = "none";
    })
});





