const displayDataButton = document.getElementById("display");
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
