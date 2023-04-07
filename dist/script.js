// collapsible
var coll = document.getElementsByClassName("collapsible");
var next = document.querySelector(".next");

// About
for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      //Add event listener for window resize
      window.addEventListener("resize", function () {
        var contents = document.getElementsByClassName("content");
        for (var j = 0; j < contents.length; j++) {
          contents[j].style.maxHeight = contents[j].scrollHeight + "px";
        }
      });
    }
  });
}

// next arrow
next.addEventListener("click", function () {
  coll[0].classList.add("active");
  var content = coll[0].nextElementSibling;
  if (
    !content.style.maxHeight ||
    content.style.maxHeight <= content.scrollHeight + "px"
  ) {
    content.style.maxHeight = content.scrollHeight + "px";
  }
});

//  Nav controls
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Bottom nav controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("section");
  let tabs = document.getElementsByClassName("tab");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace(" active2", "");
  }
  slides[slideIndex - 1].style.display = "block";
  tabs[slideIndex - 1].className += " active2";
}
