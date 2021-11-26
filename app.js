//SELECTORS
const menu = document.querySelector(".mobile__menu");
const hamburgerButton = document.getElementById("hamburger");
const closeButton = document.getElementById("close");
const navMobileBG = document.querySelector(".nav__mobile_bg");
const navLinkMobile = document.querySelectorAll(".nav-mobile");
let timeAnim = 60;
let timeAnimReverse = 40;
let i = 0;
let k = 4;
//FUCNTIONS
const anim = () => {
  setTimeout(() => {
    if (i < navLinkMobile.length) {
      navLinkMobile[i].classList.remove("anim__reverse");
      navLinkMobile[i].classList.add("anim");
    }
    i++;
    anim();
  }, timeAnim);
};
const animReverse = () => {
  setTimeout(() => {
    if (k < navLinkMobile.length && k >= 0) {
      navLinkMobile[k].classList.remove("anim");
      navLinkMobile[k].classList.add("anim__reverse");
    }
    k--;
    animReverse();
  }, timeAnimReverse);
};
const eventFunction = (e) => {
  if (e.target.id === "close") {
    hamburgerButton.classList.remove("none");
    closeButton.classList.add("none");
    navMobileBG.classList.remove("active");
    animReverse();
    k = 4;
  } else if (e.target.id === "hamburger") {
    hamburgerButton.classList.add("none");
    closeButton.classList.remove("none");
    navMobileBG.classList.add("active");
    navMobileBG.addEventListener("transitionend", () => {
      anim();
    });
    i = 0;
  }
};
//EVENTS
menu.addEventListener("click", eventFunction);
