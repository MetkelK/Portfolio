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
      gsap.to(window, {duration: 1, scrollTo:activeSection});
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

const revealer = new Revealer(content.first, {angle:360});

const overlays = [];
const overlayElems = [...document.querySelectorAll('.overlay')];
const overlaysTotal = overlayElems.length;
overlayElems.forEach((overlay,i) => overlays.push(new Revealer(overlay, {angle: i % 2 === 0 ? 360 : 180})));

const tlHeader = gsap.timeline({
  scrollTrigger: {
    trigger: '.header',
    start: 'top top',
    end: '+=100%',
    toggleActions: "play pause reverse reset",
    // markers: true,
    scrub: 5,
    snap: {
        snapTo: 1,
        duration: 0.3,
        ease: Expo.easeIn
    }
  }
});
tlHeader.to('.banner', 1.5, {
    ease: Expo.easeInOut,
    y: "150%",
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
    y: '-100%'
}, 0)
tlHeader.to(revealer.DOM.reverse, 1.2, {
    ease: Expo.easeInOut,
    y: '100%'
}, 0)
tlHeader.to('.revealer--first', {
    zIndex: 0
})

let t = 0;
for (let i = 0; i <= overlaysTotal-1; ++i) {
t = 0.2*i+0.2
tlHeader.to(overlays[overlaysTotal-1-i].DOM.inner, 1, {
    ease: Expo.easeInOut,
    y: '100%'
}, t);
}
tlHeader.to('nav ul', 0.5, {
  background: 'linear-gradient(315deg, #9e8fb2 0%, #a7acd9 74%)'
})


const tlBio = gsap.timeline({
  scrollTrigger: {
    trigger: '.about',
    start: 'top +=20%',
    end: '+=20%',
    toggleActions: "play pause reverse reset",
    // markers: true,
    scrub: 1
  }
});
tlBio.from('.bio h2', {
  opacity: 0,
  duration: 1
})
tlBio.from('.bio h2', {
  y: '-500%',
  duration: 0.5
},"<-0.25")
tlBio.from('.column p', {
  opacity: 0,
  duration: 1
})
tlBio.from('.column p', {
  y: '500%',
  duration: 0.5
}, "<-0.25")


const tlSkills = gsap.timeline({
  scrollTrigger: {
    trigger: ".skills",
    start: 'top center',
    end: '+=20%',
    toggleActions: "play pause reverse reset",
    scrub: 1
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

tlSkills.from('.skill--list', {
  y: '500%',
  duration: 1
})
tlSkills.from('.skill--list', {
  opacity: 0,
  duration: 0.5
}, "<-0.25")

tlSkills.to('nav ul', {
  background: "linear-gradient(45deg,#000000,#152331)"
}, "+=4")
tlSkills.to('nav ul li a', {
  color: "#fff"
})

const tlProjects = gsap.timeline({
   scrollTrigger: {
    trigger: ".projects",
    start: 'top +=80%',
    end: '+=80%',
    scrub: 1,
    toggleActions: "play pause reverse reset",
    // markers: true
  } 
})
tlProjects.from('.projects h2', {
  y: '-500%',
  duration: 1
})
tlProjects.from('.projects h2', {
  opacity: 0,
  duration: 0.5
}, "<0.5")
tlProjects.from('#project1', 1, {
  duration: 1,
  opacity: 0,
  x: '-500%'
})
tlProjects.from('#project2', 1, {
  duration: 1,
  opacity: 0,
  x: '500%'
})
tlProjects.from('#project3', 1, {
  duration: 1,
  opacity: 0,
  x: '-500%'
})
tlProjects.from('#project4', 1, {
  duration: 1,
  opacity: 0,
  x: '500%'
})
tlProjects.to('nav ul', {
  background: "linear-gradient(45deg,#e0eafc,#cfdef3)"
}, '<10')
tlProjects.to('nav ul li a', {
  color: "#000"
})