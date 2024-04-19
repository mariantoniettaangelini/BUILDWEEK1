let conteiner = document.getElementById('rec')
let starOffID = '';

document.addEventListener("DOMContentLoaded", (event) => {
  // starClick();
  var stelle = document.querySelectorAll('.stella');
  stelle.forEach(function (element) {
    element.addEventListener('click', function (event) {
      let id = event.target.id;
      let stelleLenght = stelle.length;

      GetStar(stelle, id, stelleLenght);

    })
  })

})

function GetStar(stelle, id, stelleLenght) {
  for (let i = 0; i < stelleLenght; i++) {
    if (i < id) {
      // console.log('siamo in minore sono dentro');
      stelle[i].src = "./star.svg";
    } else {
      // console.log('siamo in maggiore sono entrato');
      stelle[i].src = "./star-off.svg";
    }
  }
}
for (let i = 0; i < 10; i++) {
  starOffID +=`<img src="./star-off.svg" alt="stellina" class="stella" id="${i + 1}">`;
}
conteiner.innerHTML = starOffID; 