const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');

const mobileMenu = document.getElementById('mobileMenu');

function open() {
	openMenu.style.display = 'none';
	closeMenu.style.display = 'block';
	// mobileMenu.style.display = 'flex';
	gsap.to(mobileMenu, 0.3, {
		display: 'flex',
		opacity: 0.9,
		ease: 'expo.inOut',
	})
}

function close() {
	openMenu.style.display = 'block';
	closeMenu.style.display = 'none';
	// mobileMenu.style.display = 'none';
	gsap.to(mobileMenu, 0.3, {
		display: 'none',
		opacity: 0,
		ease: 'expo.inOut',
	})
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
	let image = project.childNodes[1]
  	let projectContainer = project.childNodes[3]
  	const projectTL = gsap.timeline({paused:true})
  	projectTL.to(image, 0.5, {
  		rotationY: 180,
	    opacity: 0,
	    scale: 0.99,
  		ease: 'expo.inOut',
  	})
	projectTL.from(projectContainer, 0.5, {
	    rotationY: 180,
	    opacity: 0,
	    ease: 'expo.inOut',

	},'<')
	projectTL.reverse()

	project.addEventListener('mouseenter', () => {
	    projectTL.play()
	})
	project.addEventListener('mouseleave', () => {
	    projectTL.reverse()
	})
	project.addEventListener('click', () => {
	  	projectTL.reversed(!projectTL.reversed());
	})
})