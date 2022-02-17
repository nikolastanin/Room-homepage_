

let urls = ["./images/desktop-image-hero-1.jpg",
"./images/desktop-image-hero-2.jpg",
"./images/desktop-image-hero-3.jpg",];
const images = document.querySelector(".hero");
const text_items = document.querySelectorAll(".hero-text__item");
console.log(images);
console.log(text_items);
const rightBtn = document.querySelector("#right-btn");
const leftBtn = document.querySelector("#left-btn");
const menuBtn = document.getElementById("menu-toggle__btn");
const menuList = document.getElementById("menu-list");
const menu = document.getElementById("menu");
var i =0;
//default image and text
window.addEventListener("load", function () {
  text_items[0].className = "hero__enabled";
    // hero.style.backgroundImage = `url("${bgImages[count]}")`;
  });

//functions for carousel

const nextItem = () =>{

    if(i == text_items.length-1){
       
       i=0;
    }
    else{
       
        i++;
    }
    resetElements();
    text_items[i].className ="hero__enabled";
    images.style.backgroundImage = `url("${urls[i]}")`;
}

const prevItem = () =>{
    console.log("prev");
    if(i!==0){
        i -=1;
    }
    else{
        i = urls.length - 1;
    }
    resetElements();
    text_items[i].className ="hero__enabled";
    images.style.backgroundImage = `url("${urls[i]}")`;
}


//Menu toggle
const menuToggle = (e) =>{
  let icon = e.target;
  //   console.log(icon.className);
  // if(menuList.style.display==""){
  //   menuList.style.display="block";
  //   menuBtn.src ="images/icons/icon-close.svg";
  //   menu.style.backgroundColor="rgba(0, 0, 0, 0.8)";
  //   menu.style.transition ="all 0.5s";
  // }
  // else{
  //        menuList.style.display="flex";
  //        menuList.style.display="none";
  //        menuBtn.src ="images/icons/icon-hamburger.svg";
  //        menu.style.backgroundColor="";
  //  }
if(menuList.className =="menu show"){
menuList.className = "menu show hide";
menuBtn.src ="images/icons/icon-close.svg";
   menu.style.backgroundColor="rgba(0, 0, 0, 0.8)";
  menu.style.transition ="all 0.5s";
  
}
else{
  menuList.className ="menu show";
  menuBtn.src ="images/icons/icon-hamburger.svg";
          menu.style.backgroundColor="";
}

 


  //new
   
  
}

//event listeners for buttons
rightBtn.addEventListener("click",nextItem);
leftBtn.addEventListener("click",prevItem);
menuBtn.addEventListener("click",menuToggle);
  //reverting classes back to disabled
  const resetElements = () =>{
  text_items.forEach(element => {
      element.className ="hero__disabled";
  });

}