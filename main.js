class Revealer {
   	constructor(el, options) {
        this.options = {
            angle: 0
        };
        Object.assign(this.options, options);

        this.DOM = {};
        this.DOM.el = el;
        this.DOM.inner = this.DOM.el.firstElementChild;
            
        this.DOM.inner.style.width = `calc(100vw * ${Math.abs(Math.cos(this.options.angle * Math.PI/180))} + 100vh * ${Math.abs(Math.sin(this.options.angle * Math.PI/180))})`;
        this.DOM.inner.style.height = `calc(100vw * ${Math.abs(Math.sin(this.options.angle * Math.PI/180))} + 100vh * ${Math.abs(Math.cos(this.options.angle * Math.PI/180))})`;
        this.DOM.el.style.transform = `rotate3d(0,0,1,${this.options.angle}deg)`;

        this.DOM.reverse = this.DOM.inner.querySelector('.revealer--reverse');
        if ( this.DOM.reverse ) {
        	gsap.set(this.DOM.reverse, {rotation: -1*this.options.angle});
        }
    }
}

function navScroll(){
  gsap.utils.toArray('#navlist a').forEach(item => {
    const activeSection = item.getAttribute("href");
    item.addEventListener('click', function(e){
      e.preventDefault();
      gsap.to(window, {duration: 0.1, scrollTo:activeSection});
    });  
  });
}
navScroll();

const content = {
  first: document.querySelector('.revealer--first'),
  second: document.querySelector('.revealer--second')
};

const firstPageContent = {
  enter: content.first.querySelector('.enter')
};

gsap.to('.banner', 0.8,{
  delay: 0.8,
  clipPath: 'inset(1% 0)'
})

gsap.to('.arrow', {
  y: -50,
  repeat: '-1',
  yoyo: true 
})

charming(firstPageContent.enter);
firstPageContent.titleLetters = [...firstPageContent.enter.querySelectorAll('span')];
firstPageContent.titleLetters.sort(() => Math.round(Math.random())-0.5);
let letters = firstPageContent.titleLetters.filter(_ => Math.random() < .5);
let otherletters = firstPageContent.titleLetters.filter(el => letters.indexOf(el) < 0);



const enterTL = gsap.timeline({paused: true})
.staggerTo(letters, 0.2, {
    ease: Quad.easeIn,
    y: '-100%',
    opacity: 0
}, 0.04, 0)
.staggerTo(letters, 0.6, {
    ease: Quint.easeOut,
    startAt: {y: '35%'},
    y: '0%',
    opacity: 1
}, 0.04, 0.2);

firstPageContent.enter.addEventListener('mouseenter', function(){
    enterTL.play()
})

firstPageContent.enter.addEventListener('mouseleave', function(){
    enterTL.reverse()
})

const revealer = new Revealer(content.first, {angle: 0});

const overlays = [];
const overlayElems = [...document.querySelectorAll('.overlay')];
const overlaysTotal = overlayElems.length;
overlayElems.forEach((overlay,i) => overlays.push(new Revealer(overlay, {angle: i % 2 === 0 ? 45 : -45})));

const tlHeader = gsap.timeline({
  scrollTrigger: {
    trigger: '.header',
    start: 'top top',
    end: '+=65%',
    toggleActions: "play pause reverse reset",
    // markers: true,
    scrub: 4,
  }
});

tlHeader.to('.banner', 1.5, {
    ease: Expo.easeInOut,
    y: "300%",
    scaleY: 1.1,
    opacity: 0
},  0)
tlHeader.staggerTo(letters, 0.2, {
    ease: Expo.easeInOut,
    y: '-100%',
    scaleX: 0.8,
    scaleY: 1.5,
    opacity: 0
}, 0.04, 0)
tlHeader.staggerTo(otherletters, 0.2, {
    ease: Expo.easeInOut,
    y: '500%',
    scaleX: 0.8,
    scaleY: 1.5,
    opacity: 0
}, 0.04, 0)

tlHeader.to(revealer.DOM.inner, 1.2, {
    ease: Expo.easeInOut,
    y: '-100%',
}, 0)
tlHeader.to(revealer.DOM.reverse, 1.2, {
    ease: Expo.easeInOut,
    y: '100%'
}, 0)


let t = 0;
for (let i = 0; i <= overlaysTotal-1; ++i) {
t = 0.2*i+0.2
tlHeader.to(overlays[overlaysTotal-1-i].DOM.inner, 0.6, {
    ease: Expo.easeInOut,
    y: '100%'
}, t);
}
tlHeader.to('.revealer--first', 0.1,{
    zIndex: 0
}, ">")

const tlBio = gsap.timeline({
  scrollTrigger: {
    trigger: '.about',
    start: 'top center',
    end: '+=10%',
    toggleActions: "play pause reverse reset",
    // once: true,
    // markers: true,
    scrub: 5,
  }
});
// tlBio.from('.bio h2', {
//   opacity: 0,
//   duration: 1
// })
// tlBio.from('.bio h2', {
//   y: '-500%',
//   duration: 0.5
// },"<-0.25")
// tlBio.from('.column p', {
//   opacity: 0,
//   duration: 1
// })
// tlBio.from('.column p', {
//   y: '500%',
//   duration: 0.5
// }, "<-0.25")



const tlSkills = gsap.timeline({
  scrollTrigger: {
    trigger: ".skills",
    start: 'top bottom',
    end: '+=20%',
    toggleActions: "play pause reverse reset",
    // once: true,
    scrub: 1,
    // markers: true,
  }
});
tlSkills.from('.skills h2', {
  y: '-500%',
  duration: 1
})
tlSkills.from('.skills h2', {
  opacity: 0,
  duration: 0.5
}, "<0.5")


// tlSkills.from('.skill--list', {
//   y: '500%',
//   duration: 1
// })
// tlSkills.from('.skill--list', {
//   opacity: 0,
//   duration: 0.5
// }, "<-0.25")


const tlProjects = gsap.timeline({
   scrollTrigger: {
    trigger: ".projects",
    start: 'top +=80%',
    end: '+=80%',
    scrub: 2,
    // toggleActions: "play pause reverse reset",
    once: true,
    // markers: true
  } 
})

// tlProjects.from('.projects h2', {
//   y: '-500%',
//   duration: 1
// })
// tlProjects.from('.projects h2', {
//   opacity: 0,
//   duration: 0.5
// }, "<0.5")
// tlProjects.from('#project1', 1, {
//   duration: 1,
//   opacity: 0,
//   x: '-500%'
// })
// tlProjects.from('#project2', 1, {
//   duration: 1,
//   opacity: 0,
//   x: '500%'
// })
// tlProjects.from('#project3', 1, {
//   duration: 1,
//   opacity: 0,
//   x: '-500%'
// })
// tlProjects.from('#project4', 1, {
//   duration: 1,
//   opacity: 0,
//   x: '500%'
// })


// let buttonTimeline = gsap.timeline({ paused: true })
// .to('.buttonContainer', 0.5, {
//   clipPath: 'inset(1% 0)',
// })
// .to('.textContainer', 0.5, {
//   clipPath: 'inset(1% 0)',
// }, '<')
// .to('.projectImage', 0.5, {
//   scale: 1.2
// },'<')

// document.querySelector('.projectTest').addEventListener('mouseenter', () => {
//   buttonTimeline.play();
// })

// document.querySelector('.projectTest').addEventListener('mouseleave', () => {
//   buttonTimeline.reverse();
// })

// let otherButton = gsap.timeline({paused:true})
// .to('.project', 0.3, {
//   background:'linear-gradient(45deg, #030C11 0%, #030C11 10%,#0F3E57 10%, #0F3E57 15%,#1B6F9D 15%, #1B6F9D 19%,#2E9FDC 19%, #2E9FDC 25%,#73BFE7 25%, #73BFE7 37%,#B9DFF3 37%, #B9DFF3 100%)'
// })


const prjt = document.querySelectorAll('.project')

prjt.forEach(project => {
  let txt = project.childNodes[3]
  let btn = project.childNodes[5]

  const projectTL = gsap.timeline({paused:true})
  projectTL.to(txt, {
    clipPath: 'inset(0px 0px 0px 0px)',
    duration: 0.5,
    ease: Expo.easeInOut
  })
  projectTL.to(btn, {
    clipPath: 'inset(0px 0px 0px 0px)',
    duration: 0.5,
    ease: Expo.easeInOut
  }, '<')
  project.addEventListener('mouseenter', () => {
    projectTL.play()
  })
  project.addEventListener('mouseleave', () => {
    projectTL.reverse()
  })
})


const buttons = document.querySelectorAll('.projectButton')

buttons.forEach(btn => {
  const tl = gsap.timeline({paused: true})
  tl.to(btn, {
    background:'linear-gradient(135deg, #030C11 0%, #030C11 10%,#0F3E57 10%, #0F3E57 15%,#1B6F9D 15%, #1B6F9D 19%,#2E9FDC 19%, #2E9FDC 25%,#73BFE7 25%, #73BFE7 37%,#B9DFF3 37%, #B9DFF3 100%)',
    color: '#000',
    duration: 0.3,
    ease: Expo.easeInOut
  })
  btn.addEventListener('mouseenter', () => {
    tl.play()
  })
  btn.addEventListener('mouseleave', () => {
    tl.reverse()
  })
})

const contactTL = gsap.timeline({paused:true})
contactTL.to('.contact_button', {
  // background:'linear-gradient(135deg, #030C11 0%, #030C11 10%,#0F3E57 10%, #0F3E57 15%,#1B6F9D 15%, #1B6F9D 19%,#2E9FDC 19%, #2E9FDC 25%,#73BFE7 25%, #73BFE7 37%,#B9DFF3 37%, #B9DFF3 100%)',
    // color: '#000',
    // clipPath: 'inset(0px 0px 0px 0px)',
    backgroundColor: '#000',
    color: '#B9DFF3',
    duration: 0.3,
    ease: Expo.easeInOut 
})

document.querySelector('.contact_button').addEventListener('mouseenter', () => {
    contactTL.play()
  })
  document.querySelector('.contact_button').addEventListener('mouseleave', () => {
    contactTL.reverse()
  })