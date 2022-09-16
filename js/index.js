let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")
let img4 = document.getElementById("img4")
let mainimg = document.getElementById("mainimg")
let layerimg1 = document.getElementById("layerimg1")
let layerimg2 = document.getElementById("layerimg2")
let layerimg3 = document.getElementById("layerimg3")
let layerimg4 = document.getElementById("layerimg4")
let mainlayerimg = document.getElementById("mainlayerimg")
let countt = document.getElementById("count")
let price = document.getElementById("price")
let emptyCart = document.getElementById("emptyCart")



function getsrc(data) {
    mainimg.src = data[1]
    allimg = [img1, img2, img3, img4]
    for (let i = 0; i < allimg.length; i++) {
        allimg[i].classList.remove("activ1")
    }
    let id = document.getElementById(data[0])
    id.classList.add("activ1")
}
function plus() {
    let text = parseInt(countt.textContent)
    text = (text + 1)
    countt.innerHTML = `<span onclick="minuus()"  style="cursor: pointer;"><i  class="fas fa-minus maincolor"></i></span> ${text} <span onclick="plus()" style="cursor: pointer;"><i class="maincolor fas fa-plus"></i></span>`
}
function minuus() {
    let text = countt.textContent
    if (text == 1) {
        return false
    } else {
        text = (text - 1)
        countt.innerHTML = `<span onclick="minuus()"  style="cursor: pointer;"><i  class="fas fa-minus maincolor"></i></span> ${text} <span onclick="plus()" style="cursor: pointer;"><i class="maincolor fas fa-plus"></i></span>`
    }
}
function layerup(data) {


    if(window.innerWidth>=768){
    mainlayerimg.src = data
    allimgg = [layerimg1, layerimg2, layerimg3, layerimg4]
    activesrc = []
    for (let i = 0; i < allimgg.length; i++) {
        if (
            allimgg[i].src == mainlayerimg.src
        ) {
            activesrc.push(allimgg[i])
        }
    }
    let activeimg = document.getElementById(activesrc[0].id)
    activeimg.classList.add("activ1")
    let layer = document.getElementById("layer")
    layer.classList.replace("d-none", "d-flex")
}else{
    false
}
}
function closse() {
    layer.classList.replace("d-flex", "d-none")
    allimgg = [layerimg1, layerimg2, layerimg3, layerimg4]
    for (let i = 0; i < allimgg.length; i++) {
        allimgg[i].classList.remove("activ1")
    }
}
function getlayersrc(data) {
    mainlayerimg.src = data[1]
    allimg = [layerimg1, layerimg2, layerimg3, layerimg4]
    for (let i = 0; i < allimg.length; i++) {
        allimg[i].classList.remove("activ1")
    }
    let id = document.getElementById(data[0])
    id.classList.add("activ1")
}
function openCart() {
    let cart = document.getElementById("cart")
    cart.classList.remove("d-none")
}
function closeCart() {
    let cart = document.getElementById("cart")
    cart.classList.add("d-none")
}
function addToCart() {
    display()
}
function display() {
    totall = 125* parseInt(countt.textContent)
    let cartona = ` <div class=" col-md-2 mt-4" style="width: 20%;">
    <img class="w-100 rounded-3 " src="./images/image-product-1.jpg" alt="">
  </div>
  <div class="col-md-8 offset-md-1 mt-3">
    <p style="color: rgba(0, 0, 0,0.5);">Lorem ipsum dolor sit amet.</p>
    <p  style=" line-height: 0; color: rgba(0, 0, 0,0.5);">$125.00 x ${countt.textContent} <span class=" text-black fw-bold">$${totall}</span></p>
  </div>
  <div id="emptyCart" onclick="emotycart()" class="col-md-1" style=" cursor: pointer;"> <i class="fas fa-trash maincolor"></i></div>`
    let innerCart = document.getElementById("innerCart")
    innerCart.innerHTML = cartona
}
function emotycart() {
    cartona = ""
    let innerCart = document.getElementById("innerCart")
    innerCart.innerHTML = cartona
}
function tosun() {
    let moon = document.getElementById("moon")
    let sun = document.getElementById("sun")
    moon.classList.replace("opacity-1", "opacity-0")
    sun.classList.replace("opacity-0", "opacity-1")
    body.classList.replace("bg-black", "bg-white")
    let nav = document.getElementById("nav")
    nav.classList.replace("navbar-dark", "navbar-light")
    let fffd = document.querySelectorAll(".mood")
    for (let i = 0; i < fffd.length; i++) {
        fffd[i].style.color = "black";
    }
    let mood2 = document.querySelector(".mood2")
    mood2.style.backgroundColor = "rgba(180, 177, 177, 0.5)";
}
function tomoon() {
    let moon = document.getElementById("moon")
    let sun = document.getElementById("sun")
    sun.classList.replace("opacity-1", "opacity-0")
    moon.classList.replace("opacity-0", "opacity-1")
    let body = document.getElementById("body")
    body.classList.add("bg-black")
    body.classList.replace("bg-white", "bg-black")
    let nav = document.getElementById("nav")
    nav.classList.replace("navbar-light", "navbar-dark")



    
    let fffd = document.querySelectorAll(".mood")
    for (let i = 0; i < fffd.length; i++) {
        fffd[i].style.color = "white";
    }
    let mood2 = document.querySelector(".mood2")
    mood2.style.backgroundColor = "white";
}

// function right() {
    
//     // let allsrc=["./images/image-product-1.jpg","./images/image-product-2.jpg","./images/image-product-3.jpg","./images/image-product-4.jpg"]
// // console.log(allsrc.indexOf(mainlayerimg.src));
//     console.log(mainlayerimg.src);
// }
