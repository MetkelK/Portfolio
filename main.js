gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    start: "top top",
    end: "+=50%",
    pin: true,
    scrub: 1,
    // markers: true,
  },
});

tl.to(".first", {
  delay: 0.5,
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
    delay: 0.8,
    color: "rgb(255,255,255, 1)",
    ease: "expo.Out",
    letterSpacing: "1px",
    textShadow: "-5px 5px #000",
  },
  "<"
);

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

var color = random_rgba();

document.querySelectorAll("path").forEach((path) => {
  tl.staggerTo(path, 0.2, {
    // stagger: {
    //   amount: 24,
    //   each: 8,
    //   //repeat: -1,
    // },
    attr: {
      fill: random_rgba(),
    },
  });
});
