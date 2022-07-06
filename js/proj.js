"use strict";

const bannerBox = document.querySelector("#bannerBox > ul");
const banner_item = document.querySelectorAll(".banner_item");

const prev = document.getElementById("prevBtn");
const next = document.getElementById("nextBtn");

const size = banner_item[0].clientWidth;

let cnt = 0;

// 배너
next.addEventListener("click", () => {
   if (cnt < banner_item.length - 1) {
      cnt++;
      bannerBox.style.transform = "translateX(" + -size * cnt + "px)";
   } else if (cnt == banner_item.length - 1) {
      cnt = 0;
      bannerBox.style.transform = "translateX(" + -size * cnt + "px)";
   }
});

prev.addEventListener("click", () => {
   if (cnt > 0) {
      cnt--;
      bannerBox.style.transform = "translateX(" + -size * cnt + "px)";
   } else {
      cnt = 2;
      bannerBox.style.transform = "translateX(" + -size * cnt + "px)";
   }
});

setInterval(() => {
   if (cnt < banner_item.length - 1) {
      cnt++;
      bannerBox.style.transform = "translateX(" + -size * cnt + "px)";
   } else if (cnt == banner_item.length - 1) {
      cnt = 0;
      bannerBox.style.transform = "translateX(" + -size * cnt + "px)";
   }
}, 3000);

// 기본 위치(top)값
// const floatPosition = parseInt($(".floating").css("top"));

// scroll 인식
// $(window)
//    .scroll(function () {
//       // 현재 스크롤 위치
//       var currentTop = $(window).scrollTop();
//       var bannerTop = currentTop + floatPosition + "px";

//       //이동 애니메이션
//       $(".floating").stop().animate(
//          {
//             top: bannerTop,
//          },
//          500
//       );
//    })
//    .scroll();

// 플로팅메뉴
// const menu = document.getElementById("indexBoxWrap");
// const absoluteTop = window.pageYOffset + menu.getBoundingClientRect().top;

//sticy menu effect
window.onscroll = function () {
   myFunction();
};

const navbar = document.getElementById("indexBox");
const sticky = navbar.offsetTop;

function myFunction() {
   if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky");
   } else {
      navbar.classList.remove("sticky");
   }
}

// 스크롤탑
const scrollBtn = document.querySelector(".btn");
const btnVisibility = () => {
   if (window.scrollY > 0) {
      scrollBtn.style.visibility = "visible";
   } else {
      scrollBtn.style.visibility = "hidden";
   }
};
document.addEventListener("scroll", () => {
   btnVisibility();
});
scrollBtn.addEventListener("click", () => {
   window.scrollTo({
      top: 0,
      behavior: "smooth",
   });
});
