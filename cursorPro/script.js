var main = document.querySelector("#main");
var cursor = document.querySelector('#cursor')
var text = document.querySelector("h1")
main.addEventListener('mousemove', function(dets){
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
})
text.addEventListener('mouseenter' , function(){
    cursor.style.scale = 2.5;
})
text.addEventListener('mouseleave' , function(){
    cursor.style.scale = 1;
})