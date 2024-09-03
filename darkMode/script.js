var modeBtn = document.querySelector("#toggle");
var login = document.querySelector("#login");
var main = document.querySelector("#main");
var box = document.querySelector("#box");
var inputs = document.querySelectorAll("input");

var btnclicked = 0;

modeBtn.addEventListener("click", function () {
  if (btnclicked % 2 === 0) {
    main.style.backgroundColor = "#0D1117";
    main.style.color = "white";
    box.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    box.style.boxShadow = "10px 10px rgb(81, 170, 199),inset 2px 2px 10px black";
    login.style.backgroundColor = "rgb(81, 170, 199)";
    login.style.color = "black";
    inputs.forEach(function (inp) {
      inp.style.backgroundColor = "black";
      inp.style.color = "white";
    });
  } else {
    main.style.backgroundColor = "#FAF0E6";
    main.style.color = "#0D1117";
    box.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    box.style.boxShadow = "10px 10px lightblue ,inset 2px 2px 10px white";
    login.style.backgroundColor = "lightblue";
    login.style.color = "black";
    inputs.forEach(function (inp) {
      inp.style.backgroundColor = "white";
      inp.style.color = "black";
      inp.style.border = "solid 2px lightblue";
    });
  }
  btnclicked++;
});