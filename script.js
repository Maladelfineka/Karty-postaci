
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

function nextButtonFunction(){
   fetch(next)
      .then(response => response.json())
      .then(result => {
         next = result.info.next;
         prev = result.info.prev;
         karty(result.results);
         })

};

function prevButtonFunction(){
   if (prev != null){
      fetch(prev)
      .then(response => response.json())
      .then(result => {
         
         prev = result.info.prev;
         next = result.info.next;
         karty(result.results);
      })
   }
}
var next = '';
var nextButton = document.querySelector(".next-js");

var nextButton1= document.querySelector(".next-js1");

var prev = '';
var prevButton = document.querySelector(".prev-js");

var prevButton1 = document.querySelector(".prev-js1");

let root = document.querySelector('.root');




nextButton.onclick = function(){
   nextButtonFunction();
};

nextButton1.onclick = function(){
   nextButtonFunction();
};

prevButton.onclick = function(){
   prevButtonFunction();
};
prevButton1.onclick = function(){
   prevButtonFunction();
};

 
 fetch("https://rickandmortyapi.com/api/character")
 .then(response => response.json())
 .then(result => {
      next = result.info.next;
      prev = result.info.prev
    karty(result.results)

 });