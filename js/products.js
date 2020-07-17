var itemHolderCount = 1;

// PRODUCT VARIABLE 'productName' MUST BE SET ON EACH PRODUCT PAGE
// It must be one of the following:
const PRODUCTS = {
  SINGLE_TOP: {
    colors: {
      red: {
        name: "Super Red",
        images: [
          "/img/Logo.png",
          "/img/Logo.png",
          "/img/Logo.png",
          "/img/Logo.png"
        ]
      },
      blue: {
        name: "Cool Blue",
        images: [
          "/img/Logo.png",
          "/img/Logo.png",
          "/img/Logo.png",
          "/img/Logo.png"
        ]
      },
      green: {
        name: "Army Green",
        images: [
          "img/Logo.png",
          "img/Logo.png",
          "img/Logo.png",
          "img/Logo.png"
        ]
      }
    }
  },

  SOME_OTHER_PRODUCT: {
    colors: {
      red: {
        name: "....",
        images: [
          /* ... */
        ]
      },
      blue: {
        name: "...",
        images: [
          /* ... */
        ]
      }
    }
  }
};

const product = PRODUCTS[productName];

function changeMainPicture(imgs) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}

function addPieces() {
  if (itemHolderCount >= 20) {
    return;
  }
  itemHolderCount++;
  var numberHolder = document.querySelector(".count-holder");
  numberHolder.innerHTML = itemHolderCount;
}
function subPieces() {
  if (itemHolderCount <= 0) {
    return;
  }
  itemHolderCount--;
  var numberHolder = document.querySelector(".count-holder");
  numberHolder.innerHTML = itemHolderCount;
}

function imageZoom(img, resultID) {
  document.getElementById("myresult").style.display = "block";

  var img, lens, result, cx, cy;
  result = document.getElementById(resultID);

  lens = document.createElement("DIV");
  lens.setAttribute("class", "img-zoom-lens");

  img.parentElement.insertBefore(lens, img);

  cx = result.offsetWidth / lens.offsetWidth;
  cy = result.offsetHeight / lens.offsetHeight;

  result.style.backgroundImage = "url('" + img.src + "')";
  result.style.backgroundSize = img.width * cx + "px " + img.height * cy + "px";

  lens.addEventListener("mousemove", moveLens);
  img.addEventListener("mousemove", moveLens);

  lens.addEventListener("mouseleave", function() {
    document.getElementById("myresult").style.display = "none";

    let lenses = document.getElementsByClassName("img-zoom-lens");
    while (lenses[0]) {
      lenses[0].parentNode.removeChild(lenses[0]);
    }
  });

  lens.addEventListener("mouseenter", function() {
    document.getElementById("myresult").style.display = "block";
  });

  function moveLens(e) {
    var pos, x, y;

    e.preventDefault();

    pos = getCursorPos(e);

    x = pos.x - lens.offsetWidth / 2;
    y = pos.y - lens.offsetHeight / 2;

    if (x > img.width - lens.offsetWidth) {
      x = img.width - lens.offsetWidth;
    }
    if (x < 0) {
      x = 0;
    }
    if (y > img.height - lens.offsetHeight) {
      y = img.height - lens.offsetHeight;
    }
    if (y < 0) {
      y = 0;
    }

    lens.style.left = x + "px";
    lens.style.top = y + "px";

    result.style.backgroundPosition = "-" + x * cx + "px -" + y * cy + "px";
  }
  function getCursorPos(e) {
    var a,
      x = 0,
      y = 0;
    e = e || window.event;

    a = img.getBoundingClientRect();

    x = e.pageX - a.left;
    y = e.pageY - a.top;

    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  }
}

document.getElementById("expandedImg").addEventListener("mouseenter", () => {
  imageZoom(document.getElementById("expandedImg"), "myresult");
});

const colors = document.querySelectorAll(".color-button");

colors.forEach(c =>
  c.addEventListener("click", event => {
    colors.forEach(c => c.classList.remove("selected"));
    event.target.classList.add("selected");

    const color = event.target.getAttribute("color");

    const colorInfo = product.colors[color];

    const productImagesEl = document.querySelectorAll(
      ".product-images .product-image"
    );

    for (let i = 0; i < productImagesEl.length; i++) {
      productImagesEl[i].src = colorInfo.images[i];
    }

    // Set shop item color title
    document.querySelector('.shop-item-color').innerText = colorInfo.name;

    // Set first new image as big image
    changeMainPicture(productImagesEl[0]);
  })
);
