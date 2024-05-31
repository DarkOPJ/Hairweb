// This is for the navbar changing color and height after passing the 1st outer of the homepage
const navbar = document.querySelector(".navbar");
const navbar_logo = document.querySelector(".logo");
const navbar_links = document.querySelectorAll(".nav-menu a");
const navbar_button = document.querySelectorAll(".hamburger span");
const sectionOne = document.querySelector(".outer-1");

const sectionOneOptions = {
    rootMargin: "-100px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver
(function(
    entries,
    sectionOneObserver
){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            navbar.classList.add("nav-active");
            navbar_logo.classList.add("logo-active");
            navbar_links.forEach(link => link.classList.add("nav-link-active"));
            navbar_button.forEach(link => link.classList.add("bar-active"));
        }
        else{
            navbar.classList.remove("nav-active");
            navbar_logo.classList.remove("logo-active");
            navbar_links.forEach(link => link.classList.remove("nav-link-active"));
            navbar_button.forEach(link => link.classList.remove("bar-active"));
        }
    });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
//