const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');

const mobileMenu = document.getElementById('mobileMenu');

function open() {
	openMenu.style.display = 'none';
	closeMenu.style.display = 'block';
	mobileMenu.style.display = 'flex';
}

function close() {
	openMenu.style.display = 'block';
	closeMenu.style.display = 'none';
	mobileMenu.style.display = 'none';
}

gsap.utils.toArray('nav a').forEach(function(link) {
	link.addEventListener('click', function(e) {
		e.preventDefault();
		gsap.to(window, {
			duration: 0.5,
			scrollTo: e.target.getAttribute('href')
		});
	});
});

document.getElementById('scroll').addEventListener('click', function(e) {
	e.preventDefault();
	gsap.to(window, {
		duration: 0.5,
		scrollTo: e.target.getAttribute('href')
	});
});

openMenu.addEventListener('click', open);

closeMenu.addEventListener('click', close);

document.querySelectorAll('#mobileMenu a').forEach(link => {
	link.addEventListener('click', close)
})

gsap.from('.scrollArrow i', {
	y: 40,
	duration: 0.7,
	yoyo: true,
	repeat: -1,
	ease: Bounce.Out
})

let logoTL = gsap.timeline({ paused: true })
logoTL.to('#logo', 0.3, {
	fill: '#000',
	stroke: '#fff',
	scale: 0.99
})

document.getElementById('logo').addEventListener('mouseenter', () => {
	logoTL.play()
})

document.getElementById('logo').addEventListener('mouseleave', () => {
	logoTL.reverse()
})

let pro = document.querySelectorAll('.pro')

pro.forEach(project => {
	console.log(project.childNodes)
	let image = project.childNodes[1]
  	let projectContainer = project.childNodes[3]
  	const projectTL = gsap.timeline({paused:true})
  	projectTL.to(image, 0.5, {
  		rotationY: 180,
	    opacity: 0,
  		ease: 'power2.inOut'
  	})
	projectTL.from(projectContainer, 0.5, {
	    // scaleX: 0,
	    rotationY: 180,
	    opacity: 0,
	    ease: 'expo.inOut',
	    // clipPath: 'inset(15%)',
	},'<')

	  project.addEventListener('mouseenter', () => {
	    projectTL.play()
	  })
	  project.addEventListener('touchstart', () => {
	    projectTL.play()
	  })
	  project.addEventListener('mouseleave', () => {
	    projectTL.reverse()
	  })
	  project.addEventListener('touchend', () => {
	    projectTL.reverse()
	  })
})