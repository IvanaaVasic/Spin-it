var itemHolderCount = 1;

// PRODUCT VARIABLE 'productName' MUST BE SET ON EACH PRODUCT PAGE
// It must be one of the following:
const PRODUCTS = {
  ASYMETRIC_TOP: {
    colors: {
      violet: {
        name: "Lavander",
        images: [
          "tops/Asymetric/Lila/Studio2-4751.jpg",
          "tops/Asymetric/Lila/Studio2-4768.jpg",
          "tops/Asymetric/Lila/Studio2-4771.jpg",
          "tops/Asymetric/Lila/Studio2-4806.jpg"
        ]
      },
      blue: {
        name: "Aquamarine",
        images: [
          "tops/Asymetric/Plava/Studio1-4.jpg",
          "tops/Asymetric/Plava/Studio1-00113.jpg",
          "tops/Asymetric/Plava/Studio1-00124.jpg",
          "tops/Asymetric/Plava/Studio1-00127-2.jpg"
        ]
      },
      darkBlue: {
        name: "Midnight Blue",
        images: [
          "tops/Asymetric/Teget/Studio1-9715.jpg",
          "tops/Asymetric/Teget/Studio1-9719.jpg",
          "tops/Asymetric/Teget/Studio1-9729.jpg",
          "tops/Asymetric/Teget/Studio1-9733.jpg"
        ]
      }
    }
  },

  BASIC_TOP: {
    colors: {
      black: {
        name: "Black Pearl",
        images: [
          "tops/Basic/Crna/Studio2-4540.jpg",
          "tops/Basic/Crna/Studio2-4565.jpg",
          "tops/Basic/Crna/Studio2-4568.jpg",
          "tops/Basic/Crna/Studio2-4571.jpg"
        ]
      },
      violet: {
        name: "Lavander",
        images: [
          "tops/Basic/Lila/Studio1-5.jpg",
          "tops/Basic/Lila/Studio1-4735.jpg",
          "tops/Basic/Lila/Studio1-4739.jpg",
          "tops/Basic/Lila/Studio1-4787.jpg"
        ]
      }
    }
  },

  CLASSIC_TOP: {
    colors: {
      violet: {
        name: "Lavander",
        images: [
          "tops/Classic/Lila/Studio2-4690.jpg",
          "tops/Classic/Lila/Studio2-4693.jpg",
          "tops/Classic/Lila/Studio2-4696.jpg",
          "tops/Classic/Lila/Studio2-4720.jpg"
        ]
      },
      nude: {
        name: "Nude Pink",
        images: [
          "tops/Classic/Nude/Studio1-00419.jpg",
          "tops/Classic/Nude/Studio1-00451.jpg",
          "tops/Classic/Nude/NNS00462.jpg",
          "tops/Classic/Nude/Studio1--9.jpg"
        ]
      },
      blue: {
        name: "Aquamarine",
        images: [
          "tops/Classic/Plava/Studio1-9541.jpg",
          "tops/Classic/Plava/Studio1-9560.jpg",
          "tops/Classic/Plava/Studio1-9571.jpg",
          "tops/Classic/Plava/Studio1-9627.jpg"
        ]
      },
      pink: {
        name: "Hot Pink",
        images: [
          "tops/Classic/Roze/Studio2-4346.jpg",
          "tops/Classic/Roze/Studio2-4347.jpg",
          "tops/Classic/Roze/Studio2-4351.jpg",
          "tops/Classic/Roze/Studio2-4372.jpg"
        ]
      }
    }
  },
  HEART_TOP: {
    colors: {
      violet: {
        name: "Lavander",
        images: [
          "tops/Heart/Lila/Studio2-4644.jpg",
          "tops/Heart/Lila/Studio2-4651.jpg",
          "tops/Heart/Lila/Studio2-4652.jpg",
          "tops/Heart/Lila/Studio2-4655.jpg"
        ]
      },
      nude: {
        name: "Nude Pink",
        images: [
          "tops/Heart/Nude/Studio2-4603.jpg",
          "tops/Heart/Nude/Studio2-4604.jpg",
          "tops/Heart/Nude/Studio2-4606.jpg",
          "tops/Heart/Nude/Studio2-4609.jpg"
        ]
      },
      blue: {
        name: "Aquamarine",
        images: [
          "tops/Heart/Plava/Studio2-4478.jpg",
          "tops/Heart/Plava/Studio2-4481.jpg",
          "tops/Heart/Plava/Studio2-4486.jpg",
          "tops/Heart/Plava/Studio2-4488.jpg"
        ]
      },
      pink: {
        name: "Hot Pink",
        images: [
          "tops/Heart/Roze/Kaver-00262.jpg",
          "tops/Heart/Roze/Kaver-00265.jpg",
          "tops/Heart/Roze/Kaver-00268.jpg",
          "tops/Heart/Roze/Studio1-00263.jpg"
        ]
      }
    }
  },
  SIMPLICITY_TOP: {
    colors: {
      black: {
        name: "Black Pearl",
        images: [
          "tops/Simplicity/Crni/Studio1-00342.jpg",
          "tops/Simplicity/Crni/Studio1-4413.jpg",
          "tops/Simplicity/Crni/Studio1-4415.jpg",
          "tops/Simplicity/Crni/Studio1-4422.jpg"
        ]
      },
      blue: {
        name: "Aquamarine",
        images: [
          "tops/Simplicity/Plava/Studio1-09808.jpg",
          "tops/Simplicity/Plava/Studio1-09824.jpg",
          "tops/Simplicity/Plava/Studio1-09852.jpg",
          "tops/Simplicity/Plava/Studio1--10.jpg"
        ]
      },
      pink: {
        name: "Hot Pink",
        images: [
          "tops/Simplicity/Roze/Studio2-4393.jpg",
          "tops/Simplicity/Roze/Studio2-4397.jpg",
          "tops/Simplicity/Roze/Studio2-4399.jpg",
          "tops/Simplicity/Roze/Studio2-4400.jpg"
        ]
      }
    }
  },
  BODY_SUIT: {
    colors: {
      darkGreen: {
        name: "Olive Green",
        images: [
          "BodyNakedBack/Maslinasta/Studio2-4498.jpg",
          "BodyNakedBack/Maslinasta/Studio2-4504.jpg",
          "BodyNakedBack/Maslinasta/Studio2-4509.jpg",
          "BodyNakedBack/Maslinasta/Studio2-4513.jpg"
        ]
      },
      blue: {
        name: "Aquamarine",
        images: [
          "BodyNakedBack/Plava/Studio1-4679.jpg",
          "BodyNakedBack/Plava/Studio1-4681.jpg",
          "BodyNakedBack/Plava/Studio1-4684.jpg",
          "BodyNakedBack/Plava/Studio1-09986.jpg"
        ]
      },
      darkBlue: {
        name: "Midnight Blue",
        images: [
          "BodyNakedBack/Teget/main_picture_NakedBack.jpg",
          "BodyNakedBack/Teget/Studio1-09875.jpg",
          "BodyNakedBack/Teget/Studio1-09887.jpg",
          "BodyNakedBack/Teget/Studio1-09912.jpg"
        ]
      }
    }
  },
  DANCE_EXOTIC: {
    colors: {
      violet: {
        name: "Lavander",
        images: [
          "bottoms/underpants/PoleDanceExotic/Lila/Studio2-4645.jpg",
          "bottoms/underpants/PoleDanceExotic/Lila/Studio2-4651.jpg",
          "bottoms/underpants/PoleDanceExotic/Lila/Studio2-4656.jpg",
          "bottoms/underpants/PoleDanceExotic/Lila/Studio2-4690.jpg"
        ]
      },
      nude: {
        name: "Nude Pink",
        images: [
          "bottoms/underpants/PoleDanceExotic/Nude/Studio2-4434.jpg",
          "bottoms/underpants/PoleDanceExotic/Nude/Studio2-4442.jpg",
          "bottoms/underpants/PoleDanceExotic/Nude/Studio2-4450.jpg",
          "bottoms/underpants/PoleDanceExotic/Nude/Studio2-4460.jpg"
        ]
      },
      blue: {
        name: "Aquamarine",
        images: [
          "bottoms/underpants/PoleDanceExotic/Plava/Kaver-09824.jpg",
          "bottoms/underpants/PoleDanceExotic/Plava/Studio1-09809.jpg",
          "bottoms/underpants/PoleDanceExotic/Plava/Studio1-09816.jpg",
          "bottoms/underpants/PoleDanceExotic/Plava/Studio1-09857.jpg"
        ]
      },
      pink: {
        name: "Hot Pink",
        images: [
          "bottoms/underpants/PoleDanceExotic/Roze/Studio2-4755.jpg",
          "bottoms/underpants/PoleDanceExotic/Roze/Studio2-4756.jpg",
          "bottoms/underpants/PoleDanceExotic/Roze/Studio2-4760.jpg",
          "bottoms/underpants/PoleDanceExotic/Roze/Studio2-4762.jpg"
        ]
      },
      black: {
        name: "Black Pearl",
        images: [
          "bottoms/underpants/PoleDanceExotic/Crna/Studio1-7.jpg",
          "bottoms/underpants/PoleDanceExotic/Crna/Studio1-9.jpg",
          "bottoms/underpants/PoleDanceExotic/Crna/Studio1-4427.jpg",
          "bottoms/underpants/PoleDanceExotic/Crna/Studio1-4430.jpg"
        ]
      },
      darkGreen: {
        name: "Olive Green",
        images: [
          "bottoms/underpants/PoleDanceExotic/Maslina/Studio2-4808.jpg",
          "bottoms/underpants/PoleDanceExotic/Maslina/Studio2-4815.jpg",
          "bottoms/underpants/PoleDanceExotic/Maslina/Studio2-4818.jpg",
          "bottoms/underpants/PoleDanceExotic/Maslina/Studio2-4822.jpg"
        ]
      },
      darkBlue: {
        name: "Midnight Blue",
        images: [
          "bottoms/underpants/PoleDanceExotic/Teget/Studio1-9713.jpg",
          "bottoms/underpants/PoleDanceExotic/Teget/Studio1-9715.jpg",
          "bottoms/underpants/PoleDanceExotic/Teget/Studio1-9729.jpg",
          "bottoms/underpants/PoleDanceExotic/Teget/Studio1-9733.jpg"
        ]
      }
    }
  },

  DANCE_COMFORT: {
    colors: {
      violet: {
        name: "Lavander",
        images: [
          "bottoms/underpants/PoleDanceComfort/Lila/Studio1-00481.jpg",
          "bottoms/underpants/PoleDanceComfort/Lila/Studio1-00503.jpg",
          "bottoms/underpants/PoleDanceComfort/Lila/Studio1-00518.jpg",
          "bottoms/underpants/PoleDanceComfort/Lila/Studio1-00526.jpg"
        ]
      },
      nude: {
        name: "Nude Pink",
        images: [
          "bottoms/underpants/PoleDanceComfort/Nude/Studio2-4633.jpg",
          "bottoms/underpants/PoleDanceComfort/Nude/Studio2-4636.jpg",
          "bottoms/underpants/PoleDanceComfort/Nude/Studio2-4637.jpg",
          "bottoms/underpants/PoleDanceComfort/Nude/Studio2-4639.jpg"
        ]
      },
      blue: {
        name: "Aquamarine",
        images: [
          "bottoms/underpants/PoleDanceComfort/Plava/Studio2-4478.jpg",
          "bottoms/underpants/PoleDanceComfort/Plava/Studio2-4481.jpg",
          "bottoms/underpants/PoleDanceComfort/Plava/Studio2-4490.jpg",
          "bottoms/underpants/PoleDanceComfort/Plava/Studio2-4491.jpg"
        ]
      },
      pink: {
        name: "Hot Pink",
        images: [
          "bottoms/underpants/PoleDanceComfort/Roze/Studio2-4373.jpg",
          "bottoms/underpants/PoleDanceComfort/Roze/Studio2-4379.jpg",
          "bottoms/underpants/PoleDanceComfort/Roze/Studio2-4381.jpg",
          "bottoms/underpants/PoleDanceComfort/Roze/Studio2-4393.jpg"
        ]
      },
      black: {
        name: "Black Pearl",
        images: [
          "bottoms/underpants/PoleDanceComfort/crne/Studio2-4713.jpg",
          "bottoms/underpants/PoleDanceComfort/crne/Studio2-4717.jpg",
          "bottoms/underpants/PoleDanceComfort/crne/Studio2-4720.jpg",
          "bottoms/underpants/PoleDanceComfort/crne/Studio2-4723.jpg"
        ]
      },
      darkGreen: {
        name: "Olive Green",
        images: [
          "bottoms/underpants/PoleDanceComfort/Maslina/Studio2-4789.jpg",
          "bottoms/underpants/PoleDanceComfort/Maslina/Studio2-4791.jpg",
          "bottoms/underpants/PoleDanceComfort/Maslina/Studio2-4792.jpg",
          "bottoms/underpants/PoleDanceComfort/Maslina/Studio2-4793.jpg"
        ]
      },
      darkBlue: {
        name: "Midnight Blue",
        images: [
          "bottoms/underpants/PoleDanceComfort/Teget/Studio1-9701.jpg",
          "bottoms/underpants/PoleDanceComfort/Teget/Studio1-9713.jpg",
          "bottoms/underpants/PoleDanceComfort/Teget/Studio1-9719.jpg",
          "bottoms/underpants/PoleDanceComfort/Teget/Studio1-9729.jpg"
        ]
      }
    }
  },

  PERFECT_WAIST: {
    colors: {
      black: {
        name: "Black Pearl",
        images: [
          "bottoms/Helanke/PerfectWaist/crne/Studio2-4773.jpg",
          "bottoms/Helanke/PerfectWaist/crne/Studio2-4776.jpg",
          "bottoms/Helanke/PerfectWaist/crne/Studio2-4779.jpg",
          "bottoms/Helanke/PerfectWaist/crne/Studio2-4781.jpg"
        ]
      },
      darkGreen: {
        name: "Olive Green",
        images: [
          "bottoms/Helanke/PerfectWaist/Maslina/Studio2-4613.jpg",
          "bottoms/Helanke/PerfectWaist/Maslina/Studio2-4621.jpg",
          "bottoms/Helanke/PerfectWaist/Maslina/Studio2-4622.jpg",
          "bottoms/Helanke/PerfectWaist/Maslina/Studio2-4625.jpg"
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
    document.querySelector(".shop-item-color").innerText = colorInfo.name;

    // Set first new image as big image
    changeMainPicture(productImagesEl[0]);
  })
);
