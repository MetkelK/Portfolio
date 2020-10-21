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

const content = {
    first: document.querySelector('.revealer--first'),
    second: document.querySelector('.revealer--second')
};

const firstPageContent = {
    enter: content.first.querySelector('.enter')
};

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

const revealer = new Revealer(content.first, {angle:45});

const overlays = [];
const overlayElems = [...document.querySelectorAll('.overlay')];
const overlaysTotal = overlayElems.length;
overlayElems.forEach((overlay,i) => overlays.push(new Revealer(overlay, {angle: 225})));

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".header",
    start: "top top",
    end: "bottom bottom",
    endTrigger: "main",
    scrub: 0.25,
    markers: true,
    pin: true,
    pinSpacing: true,
    snap: 1
  }
});
tl.staggerTo(otherletters, 1.2*0.8, {
    ease: Expo.easeInOut,
    y: '-100%',
    scaleX: 0.8,
    scaleY: 1.5,
    opacity: 0
}, 0.04, 0)
tl.to(firstPageContent.enter, 1.2*0.5, {
    ease: Expo.easeInOut,
    opacity: 0,
    y: '-500'
}, 0)
tl.to(revealer.DOM.inner, 1, {
    ease: Expo.easeInOut,
    y: '-100%'
}, 0)
tl.to(revealer.DOM.reverse, 1, {
    ease: Expo.easeInOut,
    y: '100%'
}, 0)
let t = 0;
for (let i = 0; i <= overlaysTotal-1; ++i) {
t = 0.1*i+0.1
tl.to(overlays[overlaysTotal-1-i].DOM.inner, 1, {
    ease: Expo.easeInOut,
     y: '100%'
}, t);
}
tl.from('.banner', 0.25, {
    scaleX: 0
})
tl.from('.banner', 0.65, {
    yPercent: 100, 
    ease: Expo.easeOut
})