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
    const projectLink = document.getElementById('project-link');

    const projectURL = "https://techshop-five.vercel.app/";
    projectLink.addEventListener('click', function(event){
        event.preventDefault();
        window.open(projectURL,"_blank");
    });
});