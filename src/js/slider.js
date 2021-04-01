function createSlider(id) {
	let slider = document.createElement('input');
	let label = document.createElement('label');
	let sliderValue = document.createElement('p');
	let fieldset = document.createElement('fieldset');
	let dateFieldset = document.querySelector('.date');

	fieldset.className = 'range';
	sliderValue.className = id;
	sliderValue.id = 'value';
	slider.type = 'range';
	slider.min = 1;
	slider.max = 10;
	slider.classList = 'slider';
	slider.id = id;
	slider.name = id;
	slider.value = 5;
	sliderValue.innerHTML = slider.value;
	slider.required = true;
	label.textContent = capitalizeFirstLetter(id);
	label.htmlFor = id;

	fieldset.appendChild(label);
	fieldset.appendChild(slider);
	fieldset.appendChild(sliderValue);
	dateFieldset.insertAdjacentElement('afterend', fieldset);
}

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function trackValue() {
	let firstSlider = document.querySelector('#inzicht');
	let firstOutput = document.querySelector('.inzicht');
	let secondSlider = document.querySelector('#uitleg');
	let secondOutput = document.querySelector('.uitleg');
	let thirdSlider = document.querySelector('#lesstof');
	let thirdOutput = document.querySelector('.lesstof');

	firstSlider.oninput = function () {
		firstOutput.innerHTML = firstSlider.value;
	};

	secondSlider.oninput = function () {
		secondOutput.innerHTML = secondSlider.value;
	};

	thirdSlider.oninput = function () {
		thirdOutput.innerHTML = thirdSlider.value;
	};
}

function hideRadioButtons() {
	let radioInputs = document.querySelectorAll('.radio:not(:first-child)');
	radioInputs.forEach(element => {
		element.remove();
	});
}

window.addEventListener(
	'load',
	createSlider('lesstof'),
	createSlider('uitleg'),
	createSlider('inzicht'),
	trackValue(),
	hideRadioButtons()
);
