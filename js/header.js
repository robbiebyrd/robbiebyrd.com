function kickit() {
  let vid = document.getElementById("background-video");
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "instant",
  });
  vid.onplay = function () {
    let lines = document.querySelectorAll(".blahblah *"),
      i;
    for (i = 0; i < lines.length; ++i) {
      lines[i].classList.add("fade-in-test-animation-" + (i + 1));
    }
    let headerElem = document.getElementById("headersss");
    headerElem.style.opacity = 1;
    document.getElementById("main-1").style.display = "none";
    document.getElementById("headersss").classList.add("header-animation");
    document.getElementById("sec1").classList.add("flash-bg");
  };

  vid.play();
}

document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("hider").onclick = kickit;

  var galleryElems = document.querySelectorAll('.carousel');

  for ( var i=0, len = galleryElems.length; i < len; i++ ) {
    var galleryElem = galleryElems[i];
    new Flickity( galleryElem, {
     autoPlay: false,
      wrapAround: true,
      fullscreen: true,
    });
  }
});
