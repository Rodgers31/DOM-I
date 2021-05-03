const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

// CTA section
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navSection = document.querySelectorAll("nav a");
navSection.forEach((nav, index) =>{
  nav.textContent = siteContent.nav[`nav-item-${index +1}`]
});

const MainImg = document.querySelector("#cta-img");
MainImg.setAttribute("src", siteContent["cta"]["img-src"]);

const TextMain = document.querySelector(".cta-text h1");
TextMain.textContent = siteContent["cta"]["h1"];
const TextButton = document.querySelector(".cta-text button");
TextButton.textContent = siteContent["cta"]["button"];


// Main content
let imgContent = document.getElementById("middle-img");
imgContent.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const mainHead = document.querySelectorAll(".text-content h4");
const mainPara = document.querySelectorAll(".text-content p")
//Features
mainHead[0].textContent = siteContent["main-content"]["features-h4"];
mainPara[0].textContent = siteContent["main-content"]["features-content"];

//About
mainHead[1].textContent = siteContent["main-content"]["about-h4"];
mainPara[1].textContent = siteContent["main-content"]["about-content"];

//Services
mainHead[2].textContent = siteContent["main-content"]["services-h4"];
mainPara[2].textContent = siteContent["main-content"]["services-content"];

// Product
mainHead[3].textContent = siteContent["main-content"]["product-h4"];
mainPara[3].textContent = siteContent["main-content"]["product-content"];

//vision
mainHead[4].textContent = siteContent["main-content"]["vision-h4"];
mainPara[4].textContent = siteContent["main-content"]["vision-content"];




