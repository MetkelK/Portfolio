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