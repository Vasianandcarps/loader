// document.onreadystatechange = function () {
//   let state = document.readyState;
//   if (state == "interactive") {
//     document.getElementById("contents").style.visibility = "hidden";
//     document.getElementById("load").style.visibility = "visible";
//   } else if (state == "complete") {
//     setTimeout(function () {
//       document.getElementById("load").style.visibility = "hidden";
//       document.getElementById("contents").style.visibility = "visible";
//     }, 2000);
//   }
// };

function isVisible(elem) {
  let coords = elem.getBoundingClientRect();

  let windowHeight = document.documentElement.clientHeight;

  // верхний край элемента виден?
  let topVisible = coords.top > 0 && coords.top < windowHeight;

  // нижний край элемента виден?
  let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

  return topVisible || bottomVisible;
}

function showVisible() {
  for (let img of document.querySelectorAll("img")) {
    let realSrc = img.dataset.src;
    if (!realSrc) continue;

    if (isVisible(img)) {
      img.src = realSrc;
      img.dataset.src = "";
    }
  }
}

setTimeout(showVisible, 2000);
window.onscroll = showVisible;
