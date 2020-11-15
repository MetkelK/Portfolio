let projects = document.querySelectorAll('.projectSection')

projects.forEach(project => {
  let image = project.childNodes[1]
  const projectTL = gsap.timeline({paused:true})
  projectTL.to(image, 0.5, {
  clipPath: 'inset(15%)',
  scale: 0.95,
  ease: 'power2.inOut'
})

  project.addEventListener('mouseenter', () => {
    projectTL.play()
  })
  project.addEventListener('mouseleave', () => {
    projectTL.reverse()
  })

})

new fullpage('#fullpage', {
  //options here
  autoScrolling:true,
  scrollHorizontally: true,
  licenseKey: 'YOUR_KEY_HERE',
  afterLoad: function(origin) {
    const loadedSection = this;
    if(origin.index == 0){
      console.log('front page loaded')
    }
  },
  onLeave: function(origin, destination, direction) {
    const leavingSection = this;

    if(origin.index == 0 && direction == 'down') {
      console.log('going down to bio')
 
    }

    if(origin.index == 1 && direction == 'down') {
      console.log('going down to skills')
    }

    if(origin.index == 1 && direction == 'up') {
      console.log('going up to intro')

    }

    if(origin.index == 2 && direction == 'down') {
      console.log('going down to test')
    }

    if(origin.index == 2 && direction == 'up') {
      console.log('going up to bio')
    }

    if(origin.index == 3 && direction == 'up') {
      console.log('going up to skills')
    }
  }
});

//methods
fullpage_api.setAllowScrolling(true);
