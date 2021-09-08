const navLinks = document.querySelectorAll(".nav__link");
const dropDown = document.querySelector(".dropDown");
const main = document.querySelector("main");
const dropDowncol2 = document.querySelector(".dropDown__col__2");
const dropDowncol3 = document.querySelector(".dropDown__col__3");
const colOneOpen = document.querySelector("#colOneOpen");
const colTwoOpen = document.querySelector("#colTwoOpen");

navLinks.forEach((element) => {
  element.addEventListener("click", () => {
    dropDowncol2.style.opacity = 0;
    dropDowncol3.style.opacity = 0;
    dropDown.classList.add("navDisabled");
    dropDown.classList.toggle("navDisabled");
  });
});

main.addEventListener("mouseover", () => {
  dropDown.classList.add("navDisabled");
});

colOneOpen.addEventListener("click", () => {
  dropDowncol2.style.opacity = 1;
});

colTwoOpen.addEventListener("click", () => {
  dropDowncol3.style.opacity = 1;
});
