gsap.registerPlugin(ScrollTrigger);

function random_rgba() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return (
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    r().toFixed(1) +
    ")"
  );
}

const randomColor1 = random_rgba();
const randomColor2 = random_rgba();
const randomColor3 = random_rgba();
const randomColor4 = random_rgba();
const randomColor5 = random_rgba();
const randomColor6 = random_rgba();

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".header",
    start: "top top",
    end: "bottom center",
    pin: true,
    pinSpacing: false,
    scrub: 1,
    // markers: true,
  },
});

tl.to(".first", {
  // delay: 0.5,
  color: "rgb(255,255,255, 1)",
  ease: "expo.Out",
  letterSpacing: "1px",
  textShadow: "5px 5px #000",
});
tl.to(
  ".title",
  {
    // delay: 0.8,
    color: "rgb(255,255,255, 1)",
    ease: "expo.Out",
    letterSpacing: "1px",
    textShadow: "-5px 5px #000",
  },
  "<"
);
tl.to("body", 2, {
  ease: "expo.Out",
  background: `linear-gradient(45deg,
    ${randomColor1} 0%,
    ${randomColor1} 53%,
    ${randomColor2} 53%,
    ${randomColor2} 65%,
    ${randomColor3} 65%,
    ${randomColor3} 71%,
    ${randomColor4} 71%,
    ${randomColor4} 75%,
    ${randomColor5} 75%,
    ${randomColor5} 80%,
    ${randomColor6} 80%,
    ${randomColor6} 100%)`,
});

const headertl = gsap.timeline({
  scrollTrigger: {
    trigger: ".header",
    start: "top top",
    end: "bottom bottom",
    // pin: true,
    scrub: 5,
    // markers: true,
  },
});
const midheadtl = gsap.timeline({
  scrollTrigger: {
    trigger: ".header",
    start: "top top",
    end: "bottom bottom",
    // pin: true,
    scrub: 3,
    // markers: true,
  },
});
const abouttl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "top top",
    end: "bottom bottom",
    // pin: true,
    scrub: 5,
    markers: true,
  },
});
abouttl.to("body", 2, {
  ease: "expo.Out",
  background: `,linear-gradient(45deg,
    ${randomColor1} 0%,
    ${randomColor1} 2%,
    ${randomColor2} 2%,
    ${randomColor2} 5%,
    ${randomColor3} 5%,
    ${randomColor3} 11%,
    ${randomColor4} 11%,
    ${randomColor4} 23%,
    ${randomColor5} 23%,
    ${randomColor5} 47%,
    ${randomColor6} 47%,
    ${randomColor6} 100%)`,
});
const skillstl = gsap.timeline({
  scrollTrigger: {
    trigger: ".skills",
    start: "top top",
    end: "bottom bottom",
    // pin: true,
    scrub: 5,
    // markers: true,
  },
});
const projecttl = gsap.timeline({
  scrollTrigger: {
    trigger: ".project",
    start: "top top",
    end: "bottom bottom",
    // pin: true,
    scrub: 5,
    // markers: true,
  },
});

document.querySelectorAll("path").forEach((path) => {
  tl.staggerTo(path, 3, {
    ease: "expo.inOut",
    attr: {
      fill: random_rgba(),
    },
  });
});

document.querySelectorAll("path").forEach((path) => {
  headertl.staggerTo(path, 3, {
    ease: "expo.inOut",
    attr: {
      fill: random_rgba(),
    },
  });
});
document.querySelectorAll("path").forEach((path) => {
  abouttl.staggerTo(path, 3, {
    ease: "expo.inOut",
    attr: {
      fill: random_rgba(),
    },
  });
});
document.querySelectorAll("path").forEach((path) => {
  projecttl.staggerTo(path, 3, {
    ease: "expo.inOut",
    attr: {
      fill: random_rgba(),
    },
  });
});

const about = {
  title: document.querySelector(".aboutTitle"),
  first: document.querySelector(".aboutP1"),
  second: document.querySelector(".aboutP2"),
  third: document.querySelector(".aboutP3"),
};

charming(about.title);
about.titleLetters = [...about.title.querySelectorAll("span")];
about.titleLetters.sort(() => Math.round(Math.random()) - 0.5);
let letters = about.titleLetters.filter((_) => Math.random() < 0.5);
let otherletters = about.titleLetters.filter((el) => letters.indexOf(el) < 0);

midheadtl.to(letters, {
  ease: Expo.easeOut,
  y: "-500%",
  opacity: 0,
  stagger: 0.5,
});
midheadtl.to(
  ".aboutBio",
  1,
  {
    ease: Expo.easeOut,
    clipPath: "inset(50% 0 50% 0)",
    opacity: 0,
  },
  "<"
);
