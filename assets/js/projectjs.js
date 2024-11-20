const view1 = document.querySelector(".view-1");
const pop1 = document.querySelector(".popup1");
const close1 = document.querySelector(".close-icon1");

const view2 = document.querySelector(".view-2");
const pop2 = document.querySelector(".popup2");
const close2 = document.querySelector(".close-icon2");

const view3 = document.querySelector(".view-3");
const pop3 = document.querySelector(".popup3");
const close3 = document.querySelector(".close-icon3");

const view4 = document.querySelector(".view-4");
const pop4 = document.querySelector(".popup4");
const close4 = document.querySelector(".close-icon4");

const view5 = document.querySelector(".view-5");
const pop5 = document.querySelector(".popup5");
const close5 = document.querySelector(".close-icon5");

const view6 = document.querySelector(".view-6");
const pop6 = document.querySelector(".popup6");
const close6 = document.querySelector(".close-icon6");

const view7 = document.querySelector(".view-7");
const pop7 = document.querySelector(".popup7");
const close7 = document.querySelector(".close-icon7");

const view8 = document.querySelector(".view-8");
const pop8 = document.querySelector(".popup8");
const close8 = document.querySelector(".close-icon8");

const view9 = document.querySelector(".view-9");
const pop9 = document.querySelector(".popup9");
const close9 = document.querySelector(".close-icon9");

const view10 = document.querySelector(".view-10");
const pop10 = document.querySelector(".popup10");
const close10 = document.querySelector(".close-icon10");

const view11 = document.querySelector(".view-11");
const pop11 = document.querySelector(".popup11");
const close11 = document.querySelector(".close-icon11");

const view12 = document.querySelector(".view-12");
const pop12 = document.querySelector(".popup12");
const close12 = document.querySelector(".close-icon12");
const view = document.querySelectorAll(".btn");
const close = document.querySelectorAll(".close");

function overflowHidden() {
  document.documentElement.style.overflow = "hidden";
}
function overflowAuto() {
  document.documentElement.style.overflow = "auto";
}

for (let i = 0; i < view.length; i++) {
  view[i].addEventListener("click", overflowHidden);
}
for (let i = 0; i < close.length; i++) {
  close[i].addEventListener("click", overflowAuto);
}

function popUp1() {
  pop1.classList.toggle("visible");
}

function popUp2() {
  pop2.classList.toggle("visible");
}

function popUp3() {
  pop3.classList.toggle("visible");
}

function popUp4() {
  pop4.classList.toggle("visible");
}

function popUp5() {
  pop5.classList.toggle("visible");
}

function popUp6() {
  pop6.classList.toggle("visible");
}

function popUp7() {
  pop7.classList.toggle("visible");
}

function popUp8() {
  pop8.classList.toggle("visible");
}

function popUp9() {
  pop9.classList.toggle("visible");
}

function popUp10() {
  pop10.classList.toggle("visible");
}

function popUp11() {
  pop11.classList.toggle("visible");
}
function popUp12() {
  pop12.classList.toggle("visible");
}

view1.addEventListener("click", popUp1);
close1.addEventListener("click", popUp1);

view2.addEventListener("click", popUp2);
close2.addEventListener("click", popUp2);

view3.addEventListener("click", popUp3);
close3.addEventListener("click", popUp3);

view4.addEventListener("click", popUp4);
close4.addEventListener("click", popUp4);

view5.addEventListener("click", popUp5);
close5.addEventListener("click", popUp5);

view6.addEventListener("click", popUp6);
close6.addEventListener("click", popUp6);

view7.addEventListener("click", popUp7);
close7.addEventListener("click", popUp7);

view8.addEventListener("click", popUp8);
close8.addEventListener("click", popUp8);

view9.addEventListener("click", popUp9);
close9.addEventListener("click", popUp9);

view10.addEventListener("click", popUp10);
close10.addEventListener("click", popUp10);

view11.addEventListener("click", popUp11);
close11.addEventListener("click", popUp11);

view12.addEventListener("click", popUp12);
close12.addEventListener("click", popUp12);
