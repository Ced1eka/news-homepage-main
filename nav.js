const pmrNav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");
const bodyBg = document.querySelector("body");
const mq = window.matchMedia("(max-width: 768px)");
const bodBkg = document.querySelector(".bodyBkg");

navToggle.addEventListener("click", () => {
  const isVisible = pmrNav.getAttribute("data-visible");

  if (isVisible === "false") {
    pmrNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
    bodyBg.style.setProperty("background-color", "hsl(var(--clr-pmr-grayBg))");
  } else {
    pmrNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
    bodyBg.style.setProperty("background-color", "hsl(var(--clr-pmr-white))");
  }
});
window.addEventListener("resize", () => {
  const isitVisible = pmrNav.getAttribute("data-visible");
  if (mq.matches && isitVisible === "true") {
    bodyBg.style.setProperty("background-color", "hsl(var(--clr-pmr-grayBg))");
  } else if (isitVisible === "true") {
    bodyBg.style.setProperty("background-color", "hsl(var(--clr-pmr-white))");
  } else {
    bodyBg.style.setProperty("background-color", "hsl(var(--clr-pmr-white))");
  }
});
