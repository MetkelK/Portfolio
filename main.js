const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');

let mobileMenu = document.getElementById('mobileMenu');

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

// document.getElementById('home').addEventListener('click', function(e) {
// 	console.log(e.target);
// })
