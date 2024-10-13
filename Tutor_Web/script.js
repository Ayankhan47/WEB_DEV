var cursor = document.querySelector("#cursor");
var body = document.querySelector('body');
var a = document.querySelectorAll("a");
var btn = document.querySelectorAll("button")

body.addEventListener('mousemove', function(dets){
    cursor.style.left = dets.x + 'px';
    cursor.style.top = dets.y + 'px';
})
a.forEach(function(links){
links.addEventListener("mouseenter", function(){
    cursor.style.height = "0px";
})
links.addEventListener("mouseleave", function(){
    cursor.style.height = "24px";
})
})
btn.forEach(function(button){
    button.addEventListener("mouseenter", function(){
        cursor.style.height = "0px";
    })
    button.addEventListener("mouseleave", function(){
        cursor.style.height = "24px";
    })
    })