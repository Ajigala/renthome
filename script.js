const navlink = document.querySelector(".navlink");
const body = document.querySelector("body");
const handlesidebarshow = () => {
  navlink.classList.add("navlinkshow");
  body.classList.add("bodyunscroll");
};

const handlesidebarclose = () => {
  navlink.classList.remove("navlinkshow");
  body.classList.remove("bodyunscroll");
};
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
document.addEventListener("DOMContentLoaded", function (event) {
  // Hide loader when content is fully loaded
  document.body.classList.add("loaded");
});

// Show loader when network activity is detected
window.addEventListener("load", function (event) {
  document.getElementById("spinner").style.display = "none";
});
