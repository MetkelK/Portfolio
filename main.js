//LOGO ANIMATION
let logoTL = gsap.timeline({ paused: true });

logoTL.to("#logo", 0.3, {
  fill: "#000",
  stroke: "#fff",
  scale: 0.99,
});

document.getElementById("logo").addEventListener("mouseenter", () => {
  logoTL.play();
});

document.getElementById("logo").addEventListener("mouseleave", () => {
  logoTL.reverse();
});

//MOBILE MENU FUNCTIONS
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

function open() {
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
  gsap.to(mobileMenu, 0.3, {
    display: "flex",
    opacity: 0.9,
    ease: "expo.inOut",
  });
}

openMenu.addEventListener("click", open);

function close() {
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
  gsap.to(mobileMenu, 0.3, {
    display: "none",
    opacity: 0,
    ease: "expo.inOut",
  });
}

closeMenu.addEventListener("click", close);

document.querySelectorAll("#mobileMenu a").forEach((link) => {
  link.addEventListener("click", close);
});

//NAV SCROLL TO
gsap.utils.toArray("nav a").forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(link);
    gsap.to(window, {
      duration: 0.5,
      scrollTo: e.target.getAttribute("href"),
    });
  });
});

//ARROW SCROLL
document.getElementById("scroll").addEventListener("click", function (e) {
  e.preventDefault();
  gsap.to(window, {
    duration: 0.5,
    scrollTo: e.target.getAttribute("href"),
  });
});

//ARROW BOUNCE
gsap.from(".scrollArrow i", {
  y: 40,
  duration: 0.7,
  yoyo: true,
  repeat: -1,
  ease: Bounce.Out,
});
