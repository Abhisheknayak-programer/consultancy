const importantToggler__1 = document.querySelector(".importantToggler1");
const importantToggler__2 = document.querySelector(".importantToggler2");
const importantToggler1 = document.querySelector(".importantToggler__1");
const importantToggler2 = document.querySelector(".importantToggler__2");
importantToggler__1.addEventListener("click", () => {
  importantToggler1.classList.toggle("toggle_absent");
});

importantToggler__2.addEventListener("click", () => {
  importantToggler2.classList.toggle("toggle_absent");
});
