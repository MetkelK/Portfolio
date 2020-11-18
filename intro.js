gsap.from(".name", {
  xPercent: -100,
  rotate: '90deg',
  scale: 2,
  // backgroundPosition: '1300px 0',
  scrollTrigger: {
    trigger: "body",
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
  }
});

gsap.to('.last', {
    x: -1300,
    scale: 0.2,
    scrollTrigger: {
        trigger:'.section2',
        start: 'top top',
        scrub: true,
    }
})


const tl = gsap.timeline({pause: true})
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

