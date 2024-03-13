
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
            <img class="images" src="${i.image}" alt="">
         </div>
        </div>
        `;
   }
   root.innerHTML=temp
};
var next = '';
var nextButton = document.querySelector(".next-js");

var nextButton1= document.querySelector(".next-js1");

var prev = '';
var prevButton = document.querySelector(".prev-js");

var prevButton1 = document.querySelector(".prev-js1");

prevButton.disabled = true;
prevButton1.disabled = true;
let root = document.querySelector('.root');

nextButton.onclick = function(){
   console.log("dziala")
   prevButton1.disabled= false;
   prevButton.disabled= false;
   fetch(next)
      .then(response => response.json())
      .then(result => {
         console.log(result)
         next = result.info.next;
         prev = result.info.prev;
         karty(result.results);
         })
}

nextButton1.onclick = function(){
   console.log("dziala")
   prevButton1.disabled= false;
   prevButton.disabled= false;
   fetch(next)
      .then(response => response.json())
      .then(result => {
         console.log(result)
         next = result.info.next;
         prev = result.info.prev;
         karty(result.results);
         })
}

prevButton.onclick = function(){
   
   console.log("YeS!")
   fetch(prev)
      .then(response => response.json())
      .then(result => {
         
         prev = result.info.prev;
         
         next = result.info.next;
         karty(result.results);
   })
}
prevButton1.onclick = function(){
   
   console.log("YeS!")
   fetch(prev)
      .then(response => response.json())
      .then(result => {
         
         prev = result.info.prev;
         
         next = result.info.next;
         karty(result.results);
   })
}

 
 fetch("https://rickandmortyapi.com/api/character")
 .then(response => response.json())
 .then(result => {
      console.log(result)
      next = result.info.next;
      prev = result.info.prev
    karty(result.results)

 });