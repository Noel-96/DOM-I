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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



let headerNav = document.querySelectorAll('nav a');


// for (var key in  siteContent['nav']) {
//   if ( siteContent['nav'].hasOwnProperty(key)) {
//     headerNav.forEach( link => link.textContent = siteContent['nav'][key].toString());
//       console.log(key + " -> " + siteContent['nav'][key]);
//   }
// }

let arrayNav = Array.from(headerNav);
arrayNav[0].textContent = siteContent['nav']['nav-item-1'];
arrayNav[1].textContent = siteContent['nav']['nav-item-2'];
arrayNav[2].textContent = siteContent['nav']['nav-item-3'];
arrayNav[3].textContent = siteContent['nav']['nav-item-4'];
arrayNav[4].textContent = siteContent['nav']['nav-item-5'];
arrayNav[5].textContent = siteContent['nav']['nav-item-6'];



let h1 = document.querySelector('div.cta-text h1');
h1.textContent = siteContent["cta"]["h1"];

let button = document.querySelector('div.cta-text  button');
button.textContent = siteContent["cta"]["button"];


//let source = document.getElementById("cta-img");
let source = document.querySelector("section.cta img");
source.setAttribute('src', siteContent["cta"]["img-src"]);


let textContent1 = document.querySelector('div.top-content .text-content:nth-of-type(1) h4');
let firstH4 = textContent1.querySelector('h4');
textContent1.textContent = siteContent["main-content"]["features-h4"];

let textContent2 = document.querySelector('div.top-content .text-content:nth-of-type(1) p');
let firstP = textContent2.querySelector('p');
textContent2.textContent = siteContent["main-content"]["features-content"];


let textContent3 = document.querySelector('div.top-content .text-content:nth-of-type(2) h4');
let secondH4 = textContent3.querySelector('h4');
textContent3.textContent = siteContent["main-content"]["about-h4"];

let textContent4 = document.querySelector('div.top-content .text-content:nth-of-type(2) p');
let secondP = textContent4.querySelector('p');
textContent4.textContent = siteContent["main-content"]["about-content"];



let middileImg = document.getElementById("middle-img");
middileImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);




let bottomContentFirstH4 = document.querySelector('div.bottom-content .text-content:nth-of-type(1) h4');
bottomContentFirstH4.textContent = siteContent["main-content"]["services-h4"];

let bottomContentFirstp = document.querySelector('div.bottom-content .text-content:nth-of-type(1) p');
bottomContentFirstp.textContent = siteContent["main-content"]["services-content"];


let bottomContentSecondH4 = document.querySelector('div.bottom-content .text-content:nth-of-type(2) h4');
bottomContentSecondH4.textContent = siteContent["main-content"]["product-h4"];

let bottomContentSecondp = document.querySelector('div.bottom-content .text-content:nth-of-type(2) p');
bottomContentSecondp.textContent = siteContent["main-content"]["product-content"];


let bottomContentThirdH4 = document.querySelector('div.bottom-content .text-content:nth-of-type(3) h4');
bottomContentThirdH4.textContent = siteContent["main-content"]["vision-h4"];

let bottomContentThirdp = document.querySelector('div.bottom-content .text-content:nth-of-type(3) p');
bottomContentThirdp.textContent = siteContent["main-content"]["vision-content"];


//update the contact
let contacth4 = document.querySelector("section.contact h4");
contacth4.textContent = siteContent["contact"]["contact-h4"];

let contactP = document.querySelector('section.contact p:nth-of-type(1)')
contactP.textContent = siteContent["contact"]["address"];

let contactSecondP = document.querySelector('section.contact p:nth-of-type(2)')
contactSecondP.textContent = siteContent["contact"]["phone"];

let contactThirdP = document.querySelector('section.contact p:nth-of-type(3)')
contactThirdP.textContent = siteContent["contact"]["email"];


//updating footer
let footerp = document.querySelector('footer p');
footerp.textContent = siteContent["footer"]["copyright"];