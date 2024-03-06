
function karty(charactery){

   let temp = ''
   for(let i of charactery){
      temp+=`
      <div class='karta'>
         <div class="karta-content">
            <p class="karta-name">${i.id}. ${i.name} ${i.gender}</p>
            <p class="karta-status">${i.status} ${i.species}</p>
            <p class="karta-origin">${i.origin.name}</p>
            <p class="karta-location">${i.location.name}</p>
         </div>
         <div class="karta-image">
            <img src="${i.image}" alt="">
         </div>
        </div>
        `;
   }
   root.innerHTML=temp
}
var next = '';
var nextButton = document.querySelector(".next-js");

let root = document.querySelector('.root');
nextButton.onclick = function(){
   console.log("dziala")
   fetch(next)
      .then(response => response.json())
      .then(result => {
         next = result.info.next;
         karty(result.results)
         })
}



 
 fetch("https://rickandmortyapi.com/api/character")
 .then(response => response.json())
 .then(result => {

    karty(result.results)

 });