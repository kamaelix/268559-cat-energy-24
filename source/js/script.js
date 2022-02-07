var navBB = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggler");

navBB.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function () {
  if (navBB.classList.contains("main-nav-closed")) {
    navBB.classList.remove("main-nav-closed");
    navBB.classList.add("main-nav--opened");
  } else {
    navBB.classList.add("main-nav-closed");
    navBB.classList.remove("main-nav--opened");
  }
});
