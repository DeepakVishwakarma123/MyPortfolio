let menuButton=document.querySelector("#menubtn")
let links=document.querySelector("#links")

let mobileMenu=() =>{
    links.classList.toggle("mobilemenu")
}
menuButton.addEventListener('click',mobileMenu)