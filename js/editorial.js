var sideMenu = document.getElementsByClassName("side-menu");
var imgFirst = document.getElementsByClassName("first-row-pictures");
var imgSecond = document.getElementsByClassName("second-row-pictures");

sideMenu[0].addEventListener("mouseover", function () {
  imgFirst[0].children[0].setAttribute("id", "zoom");
  sideMenu[0].style.color = "#bf7979";
});
sideMenu[0].addEventListener("mouseleave", function () {
  imgFirst[0].children[0].removeAttribute("id");
  sideMenu[0].style.color = "#636677";
});

sideMenu[1].addEventListener("mouseover", function () {
  imgFirst[0].children[1].setAttribute("id", "zoom");
  sideMenu[1].style.color = "#bf7979";
});
sideMenu[1].addEventListener("mouseleave", function () {
  imgFirst[0].children[1].removeAttribute("id");
  sideMenu[1].style.color = "#636677";
});

sideMenu[2].addEventListener("mouseover", function () {
  imgSecond[0].children[0].setAttribute("id", "zoom");
  sideMenu[2].style.color = "#bf7979";
});
sideMenu[2].addEventListener("mouseleave", function () {
  imgSecond[0].children[0].removeAttribute("id");
  sideMenu[2].style.color = "#636677";
});
sideMenu[3].addEventListener("mouseover", function () {
  imgSecond[0].children[1].setAttribute("id", "zoom");
  sideMenu[3].style.color = "#bf7979";
});
sideMenu[3].addEventListener("mouseleave", function () {
  imgSecond[0].children[1].removeAttribute("id");
  sideMenu[3].style.color = "#636677";
});

imgFirst[0].children[0].addEventListener("mouseover", function () {
  sideMenu[0].style.color = "#bf7979";
  imgFirst[0].children[0].setAttribute("id", "zoom");
});
imgFirst[0].children[0].addEventListener("mouseleave", function () {
  sideMenu[0].style.color = "#636677";
  imgFirst[0].children[0].removeAttribute("id");
});
imgFirst[0].children[1].addEventListener("mouseover", function () {
  sideMenu[1].style.color = "#bf7979";
  imgFirst[0].children[1].setAttribute("id", "zoom");
});
imgFirst[0].children[1].addEventListener("mouseleave", function () {
  sideMenu[1].style.color = "#636677";
  imgFirst[0].children[1].removeAttribute("id");
});
imgSecond[0].children[0].addEventListener("mouseover", function () {
  sideMenu[2].style.color = "#bf7979";
  imgSecond[0].children[0].setAttribute("id", "zoom");
});
imgSecond[0].children[0].addEventListener("mouseleave", function () {
  sideMenu[2].style.color = "#636677";
  imgSecond[0].children[0].removeAttribute("id");
});
imgSecond[0].children[1].addEventListener("mouseover", function () {
  sideMenu[3].style.color = "#bf7979";
  imgSecond[0].children[1].setAttribute("id", "zoom");
});
imgSecond[0].children[1].addEventListener("mouseleave", function () {
  sideMenu[3].style.color = "#636677";
  imgSecond[0].children[1].removeAttribute("id");
});
