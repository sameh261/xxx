
var acc = document.getElementsByClassName("accordion");
var i;
let btn =document.getElementById('btn');


window.onscroll=function(){
  if(scrollY >=400){
    btn.style.display='block'
  }else{
    btn.style.display='none'
  }
}
btn.onclick=function(){
  scroll({
    left:0,
    top:0,
    behavior:'smooth'
  })
}

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}