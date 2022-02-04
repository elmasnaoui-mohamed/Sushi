// Start Header
document.querySelector(".logo i").onclick = function () {
  this.classList.toggle("fa-times");
  if (this.classList.contains("fa-bars")) {
    document.querySelector("header nav").classList.remove("active");
    this.parentElement.nextElementSibling.onclick = function () {
      document.querySelector("header nav").classList.remove("active");
      document.querySelector(".logo i").classList.remove("fa-times");
    };
  }
  if (this.classList.contains("fa-times")) {
    document.querySelector("header nav").classList.add("active");
  }
};
window.onscroll = function () {
  if (window.scrollY >= "20") {
    document.querySelector("header").style.borderBottom =
      "4px solid var(--main-color)";
  } else {
    document.querySelector("header").style.borderBottom = "none";
  }
};
// End Header
// Start Go Up to the Top
document.querySelector(".phone-email .up").onclick = function (e) {
  e.preventDefault();
  window.scrollTo(0, 0);
};
// End Go Up to the Top
// Start Footer
let date = new Date();
let year = date.getFullYear();
document.querySelector(".copyright span").innerHTML = year;
// End Footer
// Start Loader
window.onload = function () {
  document.querySelector(".loader").style.display = "none";
};
// End Loader
