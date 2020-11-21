
gsap.to(".name", {
  xPercent: 500,
  // rotate: '90deg',
  scale: 4,
  ease: Circ.easeInOut,
  // backgroundPosition: '1300px 0',
  scrollTrigger: {
    trigger: "body",
    start: 'top top',
    end: '+=100%',
    scrub: true,
  }
});

const projectTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".section3",
        start: 'top center',
        end: '+=50%',
        scrub: true,
        // markers: true,
    }
})
projectTL.to('.name', {
    xPercent: -10,
    rotate: '-90deg',
    scale: 2,
    zIndex: 1,
    ease: Circ.easeInOut,
})

gsap.to('.last', {
    xPercent: -500,
    scale: 4,
    ease: Circ.easeInOut,
    scrollTrigger: {
        trigger:'body',
        start: 'top top',
        end: '+=90%',
        scrub: true,
    }
})

gsap.from('.skillsName', {
    xPercent: -500,
    scale: 4,
    ease: Circ.easeInOut,
    scrollTrigger: {
        trigger:'.section1',
        start: 'bottom bottom',
        end: '+=20%',
        scrub: true,
    }
})

gsap.to('nav', {
    background: 'linear-gradient(360deg,#000000,#152331)',
    ease: Circ.easeInOut,
    scrollTrigger: {
        trigger:'body',
        start: 'top top',
        end: '+=100%',
        scrub: true,
    }
})


const tl = gsap.timeline({paused: true})
tl.to('#wave', 0.5, {
    attr: {
        fill: '#000',
        stroke: '#fff'
    },
    scale: 0.95,
    ease: Circ.easeInOut,
})

document.querySelector('.logo').addEventListener('mouseenter', () => {
    tl.play()
})
document.querySelector('.logo').addEventListener('mouseleave', () => {
    tl.reverse()
})

