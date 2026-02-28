const menuBtn = document.getElementById("menu-btn");
const drawer = document.getElementById("drawer");
const overlay = document.getElementById("overlay");
const menuIcon = document.getElementById("menu-icon");

let isOpen = false;

function openMenu() {
  drawer.classList.remove("-translate-x-full");
  drawer.classList.add("translate-x-0");

  overlay.classList.remove("opacity-0", "invisible");
  overlay.classList.add("opacity-100", "visible");

  menuIcon.setAttribute("icon", "mdi:close");

  isOpen = true;
}

function closeMenu() {
  drawer.classList.remove("translate-x-0");
  drawer.classList.add("-translate-x-full");

  overlay.classList.remove("opacity-100", "visible");
  overlay.classList.add("opacity-0", "invisible");

  menuIcon.setAttribute("icon", "mdi:menu");

  isOpen = false;
}

menuBtn.addEventListener("click", () => {
  isOpen ? closeMenu() : openMenu();
});

overlay.addEventListener("click", closeMenu);
