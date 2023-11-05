let card = "";
const cardContainer = document.getElementById("trends");
card = `
<div class="heading">
  <h2>TRENDING</h2>
    <div>
        <svg class="back" xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10">
            <g id="arrow_back" data-name="arrow back" opacity="0.9">
                <path id="arrow_back-2" data-name="arrow back"
                    d="M5,6a.908.908,0,0,1-.7-.3l-4-4A.967.967,0,0,1,.3.3.967.967,0,0,1,1.7.3L5,3.6,8.3.3A.967.967,0,0,1,9.7.3a.967.967,0,0,1,0,1.4l-4,4A.908.908,0,0,1,5,6Z"
                    transform="translate(6) rotate(90)" />
            </g>
        </svg>
        <svg class="front" xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10">
            <g id="arrow_back" data-name="arrow back" opacity="0.9">
                <path id="arrow_back-2" data-name="arrow back"
                    d="M5,6a.908.908,0,0,1-.7-.3l-4-4A.967.967,0,0,1,.3.3.967.967,0,0,1,1.7.3L5,3.6,8.3.3A.967.967,0,0,1,9.7.3a.967.967,0,0,1,0,1.4l-4,4A.908.908,0,0,1,5,6Z"
                    transform="translate(6) rotate(90)" />
            </g>
        </svg>
    </div>
</div>

<div class=cards>
 <div class="card">
     <img src="./design/cards/${cardData[0].image}" alt="Avatar" style="width:100%">
         <div class="container">
             <h4>${cardData[0].title}</b></h4>
             <p>${cardData[0].description}</p>
             <span class="time">1h ago</span>
         
         </div>
 </div>
 <div class="card">
     <img src="./design/cards/${cardData[1].image}" alt="Avatar" style="width:100%">
         <div class="container">
             <h4><b>${cardData[1].title}</b></h4>
             <p>${cardData[1].description}</p>
             <span class="time">1h ago</span>
     
         </div>
 </div>
 <div class="card card-1">
     <img src="./design/cards/${cardData[2].image}" alt="Avatar" style="width:100%">
         <div class="container">
             <h4><b>${cardData[2].title}</b></h4>
             <p>${cardData[2].description}</p>
             <span class="time"><img src="./design/icons/Path-5.png">2h ago</span>
         
         </div>
 </div>
</div>

`;
cardContainer.innerHTML = card;
