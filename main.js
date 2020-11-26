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

openMenu.addEventListener('click', open);

closeMenu.addEventListener('click', close);

document.querySelectorAll('#mobileMenu a').forEach(link => {
	link.addEventListener('click', close)
})