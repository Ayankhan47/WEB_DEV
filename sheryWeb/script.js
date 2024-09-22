var main = document.querySelector("#main");
var cursor = document.querySelector('#cursor')
var text = document.querySelector("#text")
var body = document.querySelector("body")
var btn = document.querySelectorAll("button")
var h4 = document.querySelectorAll("h4")
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
body.addEventListener('mouseenter' , function(){
    cursor.style.opacity = 1;
})
body.addEventListener('mouseleave' , function(){
    cursor.style.opacity = 0;
})
btn.forEach(function(elem){
elem.addEventListener('mouseenter' , function(){
    cursor.style.scale = 0;
})
elem.addEventListener('mouseleave' , function(){
    cursor.style.scale = 1;
})
})
h4.forEach(function(elem){
    elem.addEventListener('mouseenter' , function(){
        cursor.style.scale = 0;
    })
    elem.addEventListener('mouseleave' , function(){
        cursor.style.scale = 1;
    })
    })