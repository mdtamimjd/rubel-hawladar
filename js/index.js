let menuBtn = document.getElementById("menuBtn");
let menuMobile = document.getElementById("menuMobile");

menuBtn.addEventListener("click", () => {
  if (menuBtn.innerText === "menu") {
    menuMobile.classList.remove("-translate-y-[500px]");
    menuBtn.innerText = "close";
  } else {
    menuMobile.classList.add( "-translate-y-[500px]");
    menuBtn.innerText = "menu";
  }
});
