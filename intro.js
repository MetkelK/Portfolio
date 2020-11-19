

gsap.to(".name", {
  xPercent: -100,
  // rotate: '90deg',
  // scale: 2,
  // backgroundPosition: '1300px 0',
  scrollTrigger: {
    trigger: "body",
    start: 'top top',
    end: '+=80%',
    scrub: true,
  }
});

gsap.from('.last', {
    xPercent: 90,
    // scale: 0.2,
    scrollTrigger: {
        trigger:'body',
        start: 'top top',
        end: '+=100%',
        scrub: true,
    }
})


const tl = gsap.timeline({paused: true})
tl.to('#wave', 0.3, {
    attr: {
        fill: '#000',
        stroke: '#fff'
    },
    scale: 0.95,

})

document.querySelector('.logo').addEventListener('mouseenter', () => {
    tl.play()
})
document.querySelector('.logo').addEventListener('mouseleave', () => {
    tl.reverse()
})

