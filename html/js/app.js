document.addEventListener('mousemove', e => {
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
		`
	})
})

const button = document.querySelector('.button-start');

function eventclick() {
	this.remove();
	const message = document.createElement('p');
	message.innerText = 'Thank you for sending your kindness to people. You will get back as much as you wish * 100!';
	document.querySelector('.hero-content__p').appendChild(message);
}

button.addEventListener('click', eventclick);