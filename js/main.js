// Get the modal
var bioModal = document.getElementById("bioModal");
var readMoreButton = document.getElementById("readMoreButton");
var fullScrenHero = document.querySelectorAll(".full-screen-hero");
var exactFullScreenElement = document.getElementById("fullScreenHero");

readMoreButton.addEventListener("click", scrollToBio);

function scrollToBio(e) {
  // bioModal.style.display = "block";
  e.preventDefault();
  const offsetTop = document.querySelector("#shortBio").offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}

/**
 * check_webp_feature:
 * @param {'lossy' | 'lossless' | 'alpha' | 'animation'} feature 'feature' can be one of 'lossy', 'lossless', 'alpha' or 'animation'.
 * @param {()=> callback 'callback(feature, result)' will be passed back the detection result (in an asynchronous way!)
 */
function check_webp_feature(feature, callback) {
  var kTestImages = {
    lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
    lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
    alpha:
      "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
    animation:
      "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
  };
  var img = new Image();
  img.onload = function () {
    var result = img.width > 0 && img.height > 0;
    callback(feature, result);
  };
  img.onerror = function () {
    callback(feature, false);
  };
  img.src = "data:image/webp;base64," + kTestImages[feature];
}

window.onload = function () {
  check_webp_feature("lossless", function (feature, success) {
    if (!success) {
      // Recurse theough elements with WebP background and add the no-webp class
      fullScrenHero.forEach(function (bgElement) {
        bgElement.classList.add("no-webp");
      });
    }
  });
};

window.onscroll = function (event) {
  //   const totalScrolled = window.innerHeight + window.scrollY;
  //   if (totalScrolled >= document.body.offsetHeight) {
  //     console.log("Is Bottom");
  //   }
  if (window.scrollY >= exactFullScreenElement.clientHeight) {
    console.log("Reached the bottom");
  }
};
