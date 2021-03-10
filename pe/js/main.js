if ('querySelector' in document) {
	// enhance the application
	let cont = document.querySelector('.pies');
	let img = document.createElement('img');
	img.src = '../img/candles-transparent.png';

	cont.appendChild(img);
}

// Example of checking if opacity exists in the current browser

// var supportsOpacity = typeof document.body.style.opacity === 'string';
// if (supportsOpacity) {
// 	// enhance the component
// }
