gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".svgContainer",
    start: "top top",
    end: "+=10%",
    pin: true,
    scrub: 1,
    // markers: true,
  },
});

tl.to(".first", {
  // delay: 0.5,
  color: "rgb(255,255,255, 1)",
  // rotate: "45deg",
  // scaleX: 2,
  // yPercent: 200,
  // xPercent: 50,
  ease: "expo.Out",
  letterSpacing: "1px",
  textShadow: "5px 5px #000",
  // scaleX: 2,
});
tl.to(
  ".last",
  {
    color: "rgb(255,255,255, 1)",
    delay: 0.6,
    ease: "expo.Out",
    letterSpacing: "1px",
    textShadow: "-5px 5px #000",
  },
  "<"
);
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

const headertl = gsap.timeline({
  scrollTrigger: {
    trigger: ".header",
    start: "top top",
    end: "bottom bottom",
    // pin: true,
    scrub: 1,
    // markers: true,
  },
});
const abouttl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "top top",
    end: "bottom bottom",
    // pin: true,
    scrub: 1,
    // markers: true,
  },
});
const projecttl = gsap.timeline({
  scrollTrigger: {
    trigger: ".project",
    start: "top top",
    end: "bottom bottom",
    // pin: true,
    scrub: 1,
    // markers: true,
  },
});

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

headertl.staggerFrom(
  letters,
  0.2,
  {
    ease: Expo.easeInOut,
    y: "-100%",
    scaleX: 0.8,
    scaleY: 1.5,
    opacity: 0,
  },
  0.04,
  0
);
headertl.staggerFrom(
  otherletters,
  0.2,
  {
    ease: Expo.easeInOut,
    y: "500%",
    scaleX: 0.8,
    scaleY: 1.5,
    opacity: 0,
  },
  0.04,
  0
);
