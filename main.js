document.querySelector(".mobile-button").addEventListener("click",function(event)
    {
        document.querySelector(".mobile-menu").classList.toggle("hide");
        document.querySelectorAll(".mobile-btn").forEach(function(item){
            item.classList.toggle("btn-hide");
    })
});

let menu = document.querySelector('.fixed-menu');
menu.addEventListener("click", function(event){
    let clickTarget = event.target;
    let currentActive =  document.querySelector('.active');

    if (clickTarget.classList.contains("nav-link")){
        clickTarget.classList.add('active');
        currentActive.classList.remove('active');
        let mobile = document.querySelector(".mobile-menu");
        if (!mobile.classList.contains("hide")){
            mobile.classList.add("hide");
        }
        document.querySelectorAll(".mobile-btn").forEach(function(item){
            item.classList.toggle("btn-hide");
    })
    }
    let body = document.querySelector('body');
    let mobileMenu = document.querySelector(".mobile-menu");
    if (!body.classList.contains("off-scroll") && !mobileMenu.classList.contains("hide")){
        body.classList.add("off-scroll");
    }
    else{
        body.classList.remove("off-scroll")
    }
});

let classLink = '.main.link';

Window.onscroll = function(){
let h = document.documentElement.clientHeight;
if (Window.scrollY >= h*4 ){
    classLink = ".comments-link";
}
else if (Window.scrollY >= h*3 ){
    classLink = ".works-link";
} 
else if (Window.scrollY >= h*2 ){
    classLink = ".scills-link";
}
else if (Window.scrollY >= h ){
    classLink = ".about-link";
}

let classLink = '.main.link';
}


