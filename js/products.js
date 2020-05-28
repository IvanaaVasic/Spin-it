var count = 1;

function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}

function addPieces() {
  console.log(count);

  count++;
  var numberHolder = document.querySelector(".count-holder");
  var plus = document.querySelector(".plus-button");
  numberHolder.innerHTML = count;
}
function subPieces() {
  console.log(count);
  count--;
  var numberHolder = document.querySelector(".count-holder");
  var minus = document.querySelector(".minus-button");
  numberHolder.innerHTML = count;
}
