const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const iconBars = document.querySelector(".icon-bars");
const iconClose = document.querySelector(".icon-close");
const primaryNavigation = document.querySelector(".primary-navigation");
const skillMeter = document.querySelector(".skill-meter");
const space = document.querySelector(".space");

mobileNavToggle.addEventListener("click", (eve) => {
  primaryNavigation.toggleAttribute("data-visible");

  if (primaryNavigation.hasAttribute("data-visible")) {
    iconBars.classList.remove("show");
    iconClose.classList.add("show");
  } else {
    iconClose.classList.remove("show");
    iconBars.classList.add("show");
  }

  console.log("clicked");
});

// space.style.height = skillMeter.offsetHeight + 40 + "px";
