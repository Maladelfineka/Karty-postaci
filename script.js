let characters = [{
   "id": 1,
   "name": "Rick Sanchez",
   "status": "Alive",
   "species": "Human",
   "type": "",
   "gender": "Male",
   "origin": {
       "name": "Earth (C-137)",
       "url": "https://rickandmortyapi.com/api/location/1"
   },
   "location": {
       "name": "Citadel of Ricks",
       "url": "https://rickandmortyapi.com/api/location/3"
   },
   "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
   "episode": [
       "https://rickandmortyapi.com/api/episode/1"
   ],
   "url": "https://rickandmortyapi.com/api/character/1",
   "created": "2017-11-04T18:48:46.250Z"
},
{
   "id": 2,
   "name": "Morty Smith",
   "status": "Alive",
   "species": "Human",
   "type": "",
   "gender": "Male",
   "origin": {
       "name": "unknown",
       "url": ""
   },
   "location": {
       "name": "Citadel of Ricks",
       "url": "https://rickandmortyapi.com/api/location/3"
   },
   "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
   "episode": [
       "https://rickandmortyapi.com/api/episode/1"
   ],
   "url": "https://rickandmortyapi.com/api/character/2",
   "created": "2017-11-04T18:50:21.651Z"
}];


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

console.log(characters)
console.log("test");
let root = document.querySelector('.root');
console.log(root);

let API_KEY = 'live_wdbxClxk38p5aP0l2Dv1UUwkOXPTu1xDhfu3OaVNzvjgwHZYC2zyW2lsR2ETmWtN';
karty(characters)

 
 fetch("https://rickandmortyapi.com/api/character")
 .then(response => response.json())
 .then(result => {
    karty(result.results)

 });