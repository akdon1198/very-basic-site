
let hoverevent = document.querySelectorAll(".dropdown")
let box = document.querySelectorAll(".box");
let stickynavbar = document.querySelector(".sticky-nav-bar")
let searchcancelbar = document.querySelector(".search-cancel-bar");
let drop = document.querySelectorAll(".drop")
let input = document.querySelector(".input-cont")
let navinput = document.querySelector(".nav-input-cont");
let navsearchcancelbar = document.querySelector(".nav-search-cancel-bar")
var fluidtop = document.querySelector(".container-fluid-advertise-top-banner")
var navbartop = document.querySelector(".nav-bar");
let searchicon = "fa-search";
let cancelicon = "fa-times";
const conatiner = document.querySelector(".center-image")
const movies = [{image:"https://itbook.store/img/books/9781484206485.png"},{image:"https://itbook.store/img/books/9781484211830.png"},{image:"https://itbook.store/img/books/9781484268780.png"}, {image:"https://itbook.store/img/books/9781617291609.png"},{image:"https://itbook.store/img/books/9781782168355.png"},{image:"https://itbook.store/img/books/9781783553273.png"},{image:"https://itbook.store/img/books/9781785287527.png"},{image:"https://itbook.store/img/books/9781785289989.png"},{image:"https://itbook.store/img/books/1001592208320.png"},{image:"https://itbook.store/img/books/1001629462276.png"}]
let previous = document.querySelector(".previous")
let next = document.querySelector(".next")
for(let i = 0; i < movies.length; i++){
    let card = document.createElement("div")
    card.innerHTML = ` <div class="card" style="width: 18rem;">
    <img src="${movies[i].image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
            card's content.</p>
        <a href="#" class="btn btn-primary">Add to favourite</a>
    </div>
</div>`
conatiner.appendChild(card);
}
const bestsellerbook = document.querySelectorAll(".hide");
let preidx = 0;
let nextidx = 7;
for(let i = preidx; i <= nextidx; i++){
    bestsellerbook[i].style.display = "block";
}
previous.addEventListener("click", (e) => {
    if(preidx == 0) return;
    preidx--;
    nextidx--;
    for(let i = 0; i < bestsellerbook.length; i++) bestsellerbook[i].style.display = "none";
    for(let i = preidx; i <= nextidx; i++){
        bestsellerbook[i].style.display = "block";
    }
})
next.addEventListener("click", (e) => {
    if(nextidx == bestsellerbook.length - 1) return;
    preidx++;
    nextidx++;
    for(let i = 0; i < bestsellerbook.length; i++) bestsellerbook[i].style.display = "none";
    for(let i = preidx; i <= nextidx; i++){
        bestsellerbook[i].style.display = "block";
    }
})
stickynavbar.style.display = "none"
window.onscroll = function(){
    // console.log(window.scrollY);
    if(window.scrollY >= 230){
        stickynavbar.style.display = "flex"
        stickynavbar.style.position = "sticky"
        stickynavbar.style.top = 210
    }else{
        stickynavbar.style.display = "none"
        stickynavbar.style.position = "absolute"
    }
}
navsearchcancelbar.addEventListener("click", (e) => {
    let child = navsearchcancelbar.children[1];
    if(child.classList.contains(searchicon)){
        child.classList.remove(searchicon);
        child.classList.add(cancelicon);
        navinput.style.display = "block"
    }else if(child.classList.contains(cancelicon)){
        child.classList.add(searchicon);
        child.classList.remove(cancelicon);
        navinput.style.display = "none"
    }
})
searchcancelbar.addEventListener("click", (e) => {
    let child = searchcancelbar.children[1];
    if(child.classList.contains(searchicon)){
        child.classList.remove(searchicon);
        child.classList.add(cancelicon);
        input.style.display = "block"
    }else if(child.classList.contains(cancelicon)){
        child.classList.add(searchicon);
        child.classList.remove(cancelicon);
        input.style.display = "none"
    }
})
const fullcontainer = document.querySelector(".fullcontainer")
for(let i = 0; i < 6; i++){
    drop[i].addEventListener("mouseenter", (e) => {
        box[i].style.display = "block";
        fullcontainer.style.opacity = 0.4;
    })
    hoverevent[i].addEventListener("mouseenter", (e) => {
        box[i].style.display = "block";
        fullcontainer.style.opacity = 0.4;
    })
    hoverevent[i].addEventListener("mouseleave", (e) => {
        box[i].style.display = "none"
        fullcontainer.style.opacity = 1;
    })
    drop[i].addEventListener("mouseleave", (e) => {
        box[i].style.display = "none";
        fullcontainer.style.opacity = 1;
    })
}