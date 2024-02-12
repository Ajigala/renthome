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
