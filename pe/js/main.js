if ('querySelector' in document) {
	// enhance the application
}
if (
	'querySelector' in document &&
	'localStorage' in window &&
	'addEventListener' in window
) {
	// bootstrap the javascript application
}

var supportsOpacity = typeof document.body.style.opacity === 'string';
if (supportsOpacity) {
	// enhance the component
}

// var font = new FontFaceObserver('My Family', {
//     weight: 400
//   });

// font.load().then(function () {
//     console.log('Font is available');
// }, function () {
//     console.log('Font is not available');
// });
