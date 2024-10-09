const users = [
  {
    username: "john doe",
    dp: "https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
    story:
      "https://images.unsplash.com/photo-1727776021288-7b89aa660e21?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "jane smith",
    dp: "https://images.unsplash.com/flagged/photo-1556151994-b611e5ab3675?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
    story:
      "https://images.unsplash.com/photo-1726688837501-404e3b15761e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "mark jones",
    dp: "https://images.unsplash.com/photo-1462804993656-fac4ff489837?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1727373631936-f925cc04b4db?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "lisa wong",
    dp: "https://images.unsplash.com/photo-1514315384763-ba401779410f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGVsfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1728055067992-67e59408e24f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "alex taylor",
    dp: "https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVsfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1728149673686-c9e7bb86c88b?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "emma clark",
    dp: "https://images.unsplash.com/photo-1470072508653-1be229b63562?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG1vZGVsfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1728155253434-262ab74ef031?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
var clutter = "";

users.forEach(function (elem,idx) {
    clutter += `<div class="story">
            <img
            id="${idx}"
            src="${elem.dp}"
            alt=""
            />
            <div class="names black">
              <h4>${elem.username}</h4>
            </div>
            </div>`;
});

var card = document.querySelector("#card")
var story = document.querySelector(".story");
var storiyan = document.querySelector("#storiyan");
var full = document.querySelector("#full");
var dp = document.querySelector(".dp")
var names = document.querySelector(".names h4")
var close = document.querySelector("#close")

storiyan.innerHTML = clutter;
var time = 0;

storiyan.addEventListener("click",function(dets){
    var targetObject = users[dets.target.id]
    full.style.display = "block"
    full.style.backgroundImage = `url(${targetObject.story})`
    dp.style.backgroundImage = `url(${targetObject.dp})`
    names.innerHTML = `${targetObject.username}`
    card.style.overflow = "hidden"

    var storyInterval = setInterval(function(){
      time++;
      growth.style.width = time+"%"
    },40)

    setTimeout(function(){
      time = 0;
      clearInterval(storyInterval) 
      full.style.display = "none"
      card.style.overflowY = "auto"
    },4000)
    close.addEventListener("click" ,function(){
      time = 0;
      clearInterval(storyInterval) 
      full.style.display = "none"
      card.style.overflowY = "auto"
    })
})