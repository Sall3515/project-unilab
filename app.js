const menuIcon = document.querySelector(".header-items-1");

const navBar = document.querySelector(".toggle-menu");
const prew = document.querySelector(".back");
const next = document.querySelectorAll("svg");
const slider = document.getElementById("slider");

let toggleMenu = false;

let nthOfImage = 1;
let imageUrl = `../design/Image${nthOfImage}.jpg`;
console.log(imageUrl);

menuIcon.addEventListener("click", () => {
  toggleMenu = !toggleMenu;
  if (toggleMenu === true) {
    navBar.classList.toggle("active");
  } else {
    navBar.classList.remove("active");
  }
});

next.forEach((item) => {
  item.addEventListener("click", () => {
    if (nthOfImage < 3) {
      nthOfImage++;
      let imageUrl = `../design/Image${nthOfImage}.jpg`;
      slider.setAttribute("src", imageUrl);
      console.log(imageUrl);
    } else {
      nthOfImage = 0;
    }
  });
});
