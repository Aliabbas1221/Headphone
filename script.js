// active navbar
var nav=document.querySelector(".navigation-wrap");
window.onscroll=function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on")
    }
    else{
        nav.classList.remove("scroll-on")
    }
}

 
//  hide menu on media querry
let navbar=document.querySelectorAll(".nav-link");
let collapse=document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a){
    a.addEventListener("click" ,()=>{
        collapse.classList.remove("show")
    } )
})
  
  