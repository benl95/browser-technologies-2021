if ('querySelector' in document) {
	// enhance the application
	let cont = document.querySelector('.pies');
	let img = document.createElement('img');
	img.src = '/pe/img/candles-transparent.png';
	img.style.height = '290px';
	img.style.width = '295px';

	cont.appendChild(img);
}

// Example of checking if opacity exists in the current browser

// var supportsOpacity = typeof document.body.style.opacity === 'string';
// if (supportsOpacity) {
// 	// enhance the component
// }
