

// const rightBtn = document.getElementById("right-btn");
// const leftBtn = document.getElementById("left-btn");
// console.log(rightBtn, leftBtn);
// const carouselFunc = () =>{
//     console.log("radi");
// }
// rightBtn.addEventListener("click", carouselFunc);
// leftBtn.addEventListener("click", carouselFunc);


const carousel = document.querySelectorAll(".carousel__container");
console.log(carousel);

carousel.forEach(element => {
    console.log(element.childNodes);
});