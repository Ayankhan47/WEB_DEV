var btn = document.querySelector("button");
var percent = document.querySelector("h1")
var progress = document.querySelector("#progress");
var box = document.querySelector("#box");
var count = 0;
var clicked = 0;

btn.addEventListener("click", function(){
    if(clicked === 0){
    btn.innerHTML = "Downloading...."
    var int = setInterval(() => {
        count++;
        percent.innerHTML = count + "%"
        progress.style.width = count + "%"
    },50);
    setInterval(() => {
        btn.innerHTML = "Downloaded"
        btn.style.backgroundColor = "rgb(53, 90, 53)"
    }, 5000);
    setTimeout(() => {
        clearInterval(int)
    }, 5000);
    clicked++;
}
})