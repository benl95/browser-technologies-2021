const form = document.getElementById('course-form');

form.addEventListener('input', e => {
	if (e.target.type !== 'submit') {
		const userId = getUserParam();
		const courseId = getCourseParam();

		localStorage.setItem(
			`${userId}-${courseId}-${e.target.name}`,
			e.target.value
		);
	}
});

window.addEventListener('load', loadInputs);

function loadInputs() {
	const inputFields = document.querySelectorAll('form input');

	inputFields.forEach(input => {
		const userId = getUserParam();
		const courseId = getCourseParam();
		const userInput = localStorage.getItem(
			`${userId}-${courseId}-${input.name}`
		);

		if (userInput) {
			if (input.type === 'radio' && input.value === userInput) {
				input.checked = true;
			} else if (input.type !== 'radio') {
				input.value = userInput;
			}
		}
	});
}

function getUserParam() {
	const path = window.location.pathname;
	const splitUrl = path.split('/');
	const userId = splitUrl[3];

	return userId;
}

function getCourseParam() {
	const path = window.location.pathname;
	const splitUrl = path.split('/');
	const courseId = splitUrl[2];

	return courseId;
}
