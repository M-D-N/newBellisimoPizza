const langLi = document.getElementById('lang__li');
const langDrop = document.getElementById('lang__drop');
const droparr = document.getElementById('droparr');

const langLi2 = document.getElementById('lang__li2');
const langDrop2 = document.getElementById('lang__drop2');
const droparr2 = document.getElementById('droparr2');

langLi.addEventListener('click', ()=>{
    langDrop.classList.toggle('displaB');
    droparr.classList.toggle('rotate');
})

langLi2.addEventListener('click', ()=>{
  langDrop2.classList.toggle('displaB');
  droparr2.classList.toggle('rotate');
})

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.height){
      panel.style.height = null;
    } else {
      panel.style.height = panel.style.height + "95px";
    }
  });
}