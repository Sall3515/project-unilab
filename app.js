const menuIcons = document.querySelectorAll(".header-items-1");

const navBar = document.querySelector(".toggle-menu");
const prew = document.querySelector(".back");
const next = document.querySelectorAll("svg");
const slider = document.getElementById("slider");

let toggleMenu = false;

let nthOfImage = 1;
let imageUrl = `../design/Image${nthOfImage}.jpg`;
console.log(imageUrl);

menuIcons.forEach((menuIcon) => {
  menuIcon.addEventListener("click", () => {
    toggleMenu = !toggleMenu;
    if (toggleMenu === true) {
      navBar.classList.toggle("active");
    } else {
      navBar.classList.remove("active");
    }
  });
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

const displayDataButton = document.getElementById("button");
console.log(displayDataButton);
displayDataButton.addEventListener("click", fetchData);

function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      if (!res.ok) {
        console.log("Error");
      } else {
        return res.json();
      }
    })
    .then((apiData) => {
      myData(apiData);
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
}

function myData(apiData) {
  const container = document.getElementById("data");
  apiData.forEach((data) => {
    const divElement = document.createElement("div");
    divElement.innerHTML = `
  <div class="card" id="${data.id}">
    <div class="card-image-holder">
        <img class="card-image" src="https://source.unsplash.com/300x225/?beach" alt="beach" />
    </div>
    <div class="card-title" >
        <h2>
            ${data.title}
        </h2>
        <p>${data.body}</p>
    </div>

  </div> `;
    container.appendChild(divElement);
  });
}
