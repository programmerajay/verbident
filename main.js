// JS
let hidden = document.getElementsByClassName("card-hidden-content");
let card =  document.getElementsByClassName("card");
var child = card.childern;

for(i=0; i<card.length; i++){
    card[i].addEventListener("click", contents, false);
}

function contents() {
    var content = this.querySelector('.card-hidden-content');
    console.log(content);
    content.classList.toggle("hidden");
  };
