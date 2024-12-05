let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-content");

for(let tablink of tablinks){
    tablink.addEventListener('click', function(event){
        openTab(event.target.getAttribute('data-tab'), event.currentTarget);
    });
}
function openTab(tabName, element){
    for(let tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    element.classList.add("active-link");
    document.getElementById(tabName).classList.add('active-tab');
}

document.addEventListener("DOMContentLoaded", function(){
    const projectLinks = document.querySelectorAll('.project-link');

    projectLinks.forEach(link => {
        link.addEventListener('click', function(event){
            event.preventDefault();
            const projectURL = link.getAttribute('data-url'); // gets the url from the attribute
            window.open(projectURL,"_blank");

        });
   
    });
});

let sideMenu = document.getElementById("sidemenu");
function openmenu(){
    sideMenu.style.right = '0';
}
function closemenu(){
    sideMenu.style.right = '-200px';
}

// Gets the button element
const goToTopBtn = document.getElementById('goToTopBtn');

// Show or hide the button based on scroll position
window.addEventListener('scroll', function () {
    if (window.scrollY > 300) { // Shows when scrolled down 300px
        goToTopBtn.style.display = 'block';
    } else {
        goToTopBtn.style.display = 'none';
    }
});

// Scroll to top when the button is clicked
goToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth' // Smooth scroll to top
    });
});