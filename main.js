searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
};

let loginForm = document.querySelector(".form-container");
document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
};
window.onscroll = () => {
  if (window.scrollY > 80) {
    searchForm.classList.remove("active");
    document.querySelector(".header .header-2 ").classList.add("active");
  } else {
    document.querySelector(".header .header-2 ").classList.remove("active");
  }
};
window.onload = () => {
  if (window.scrollY > 80) {
    document.querySelector(".header .header-2 ").classList.add("active");
  } else {
    document.querySelector(".header .header-2 ").classList.remove("active");
  }
};

// start new arrivals  slider
let cards = document.querySelectorAll(".arrivals-slider .wrapper .box");
let left = document.querySelector(".arrivals-slider .prev");
let right = document.querySelector(".arrivals-slider .next");

let currentSlide = 0;
let slidescount = cards.length;
left.onclick = previous;
right.onclick = next;

function previous() {
  if (currentSlide == 0) {
    currentSlide = slidescount - 1;
  } else {
    currentSlide--;
  }

  slide();
}
function next() {
  if (currentSlide == slidescount - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  slide();
}

function slide() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
  cards[currentSlide].classList.add("active");
}
// end new arrivalls slider


// start reviews slider 
        let slider  = document.querySelector('.reviews .wrapper'); 
        const arrows   = document.querySelectorAll('.reviews .swipe-btns  i');
        firstElement = document.querySelectorAll(".reviews .wrapper .box")[0];
        let firstElementWidth = firstElement.clientWidth;
        arrows.forEach((arrow) => {
          arrow.addEventListener("click", () => {
              slider.scrollLeft +=
              arrow.id == "left" ? -firstElementWidth : firstElementWidth;
          });
        });        
        let isDown = false ; 
        let startX  ;
        let scrollLeft  ;

        slider.addEventListener('mousedown', (e)=>{
            isDown = true ; 
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft  ; 
            scrollLeft = slider.scrollLeft ; 
        })
    
        slider.addEventListener('mouseleave', () => {
            isDown = false ; 
            slider.classList.remove('active');
        })
    
        slider.addEventListener('mouseup', () => {
            isDown = false; 
            slider.classList.remove('active');
        })


        slider.addEventListener('mousemove', (e) => {
            if(!isDown) return  ;
            e.preventDefault() ;
            const x = e.pageX - slider.offsetLeft  ;
            const walk = (x - startX ) * 3;
            slider.scrollLeft =scrollLeft  - walk  ;
        })
// end revies slider 