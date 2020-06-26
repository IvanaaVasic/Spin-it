var sideMenu = document.getElementsByClassName("side-menu");
var imgFirst = document.getElementsByClassName("first-row-pictures");
var imgSecond = document.getElementsByClassName("second-row-pictures");

sideMenu[0].addEventListener("mouseover", function () {
  imgFirst[0].children[0].setAttribute("id", "zoom");
  sideMenu[0].style.color = "#bf7979";
  imgFirst[0].children[0].src = "imgEditorial/Artboard2.png";
});
sideMenu[0].addEventListener("mouseleave", function () {
  imgFirst[0].children[0].removeAttribute("id");
  sideMenu[0].style.color = "#636677";
  imgFirst[0].children[0].src = "imgEditorial/picture-1-ribbon.png";
});

sideMenu[1].addEventListener("mouseover", function () {
  imgFirst[0].children[1].setAttribute("id", "zoom");
  sideMenu[1].style.color = "#bf7979";
  imgFirst[0].children[1].src = "imgEditorial/Artboard1.png";
});
sideMenu[1].addEventListener("mouseleave", function () {
  imgFirst[0].children[1].removeAttribute("id");
  sideMenu[1].style.color = "#636677";
  imgFirst[0].children[1].src = "imgEditorial/picture-2-ribbon.png";
});

sideMenu[2].addEventListener("mouseover", function () {
  imgSecond[0].children[1].setAttribute("id", "zoom");
  sideMenu[2].style.color = "#bf7979";
  imgSecond[0].children[1].src = "imgEditorial/Artboard4.png";
});
sideMenu[2].addEventListener("mouseleave", function () {
  imgSecond[0].children[1].removeAttribute("id");
  sideMenu[2].style.color = "#636677";
  imgSecond[0].children[1].src = "imgEditorial/picture-4-ribbon.png";
});
sideMenu[3].addEventListener("mouseover", function () {
  imgSecond[0].children[0].setAttribute("id", "zoom");
  sideMenu[3].style.color = "#bf7979";
  imgSecond[0].children[0].src = "imgEditorial/Artboard3.png";
});
sideMenu[3].addEventListener("mouseleave", function () {
  imgSecond[0].children[0].removeAttribute("id");
  sideMenu[3].style.color = "#636677";
  imgSecond[0].children[0].src = "imgEditorial/picture-3-ribbon.png";
});

imgFirst[0].children[0].addEventListener("mouseover", function () {
  sideMenu[0].style.color = "#bf7979";
  imgFirst[0].children[0].setAttribute("id", "zoom");
  imgFirst[0].children[0].src = "imgEditorial/Artboard2.png";
});
imgFirst[0].children[0].addEventListener("mouseleave", function () {
  sideMenu[0].style.color = "#636677";
  imgFirst[0].children[0].removeAttribute("id");
  imgFirst[0].children[0].src = "imgEditorial/picture-1-ribbon.png";
});
imgFirst[0].children[1].addEventListener("mouseover", function () {
  sideMenu[1].style.color = "#bf7979";
  imgFirst[0].children[1].setAttribute("id", "zoom");
  imgFirst[0].children[1].src = "imgEditorial/Artboard1.png";
});
imgFirst[0].children[1].addEventListener("mouseleave", function () {
  sideMenu[1].style.color = "#636677";
  imgFirst[0].children[1].removeAttribute("id");
  imgFirst[0].children[1].src = "imgEditorial/picture-2-ribbon.png";
});
imgSecond[0].children[0].addEventListener("mouseover", function () {
  sideMenu[3].style.color = "#bf7979";
  imgSecond[0].children[0].setAttribute("id", "zoom");
  imgSecond[0].children[0].src = "imgEditorial/Artboard3.png";
});
imgSecond[0].children[0].addEventListener("mouseleave", function () {
  sideMenu[3].style.color = "#636677";
  imgSecond[0].children[0].removeAttribute("id");
  imgSecond[0].children[0].src = "imgEditorial/picture-3-ribbon.png";
});
imgSecond[0].children[1].addEventListener("mouseover", function () {
  sideMenu[2].style.color = "#bf7979";
  imgSecond[0].children[1].setAttribute("id", "zoom");
  imgSecond[0].children[1].src = "imgEditorial/Artboard4.png";
});
imgSecond[0].children[1].addEventListener("mouseleave", function () {
  sideMenu[2].style.color = "#636677";
  imgSecond[0].children[1].removeAttribute("id");
  imgSecond[0].children[1].src = "imgEditorial/picture-4-ribbon.png";
});
