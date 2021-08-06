const navSlide = () => {
  const navs = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-item");
  let bars = document.querySelector("#bars");

  bars.addEventListener("click", () => {
    //toggle on and off
    navs.classList.toggle("nav-active");
    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkfade 0.5s ease forwards ${
          index / 7 + 1
        }s`;
      }
    });
   
    
  });
};
navSlide();
