## Browser Technologies

For the final assignment we must develop and application according to the
principles of Progressive Enhancement. The application must be usable on
multiple browsers and in multiple contexts.

### Survey

Users must be able to fill in the following on the survey:

-  Name
-  Teachers that teached the subject
-  The date they were following the subject
-  Rate teaching material, explanation and own insight from 1-10
-  Data will be saved
-  User can continue where they left off if they decide to come back later

## Live link

[Live link](https://btform.herokuapp.com/)

## Progressive Enhancements

**Local Storage API**

With Local Storage API the answers that users have filled in will be stored in
the local storage. When a user leaves a survey and comes back later the previous
filled in answers will be loaded in the input fields. The user can continue
where they left off in their last session.

**Slider Enhancement**

With Javascript sliders are created and will replace the radio buttons to grade
a course. The value of a slider will be output under the slider to give feedback
to the user what the value of the slider currently is.

### Layers

<details>
<summary>Functional</summary>
<ul>
<li>Users can log in, fill in a survey and submit a survey</li>
<li>Surveys will be displayed on the todo list if they haven't been completed yet,
   completed surveys will be displayed in the completed list </li>
</ul>
</details>

<details>
<summary>Reliable</summary>
<ul>
<li>Form validation works using the HTML required attribute</li>
</ul>
</details>

<details>
<summary>Usable</summary>
<ul>
<li>CSS adds extra styling and makes content more readable for the user</li>
</ul>
</details>

<details>
<summary>Pleasurable</summary>
<ul>
<li>Answers will be stored using Local Storage API, user can continue where they left off</li>
<li>Sliders make it easier for a user to grade a course</li>
<li>Subtle button animation on first survey button to trigger the user to click on it</li>
</ul>
</details>

## Browser testing

### Browsers

-  Google Chrome (desktop)
-  Firefox (desktop)
-  Google Chrome (mobile)
-  Samsung Internet (mobile)

### Google Chrome Desktop

Since I'm developing the application in Google Chrome I'm also testing it at the
same time in this browser.

-  Check if the `fallback input fields` work if Javascript is disabled.
-  Check if keyboard navigation works
-  Look and feel

<details>
<summary>Results</summary>
<ul>
<li>Javascript disabled: The application works when Javascript is disabled. The
slider enhancements dissapear from the DOM since it is made with Javascript and
the radio buttons will be displayed as fallback.</li>
<li>Keyboard navigation: Keyboard navigation works on the form for the sliders
and radio buttons</li>
</ul>
</details>

### Firefox Desktop

For the Firefox testing I tested the same test cases as in the Chrome Desktop
Browser.

-  Check if the `fallback input fields` work if Javascript is disabled
-  Check if keyboard navigation works
-  Look and feel

<details>
<summary>Results</summary>
<ul>
<li>Javascript disabled: When Javascript is disabled the application works. The fallback radio buttons are rendered.</li>
<li>Keyboard navigation: Keyboard navigation for the form works, but for link
elements it doesn't. I did some research on this and I found the following <a href="https://stackoverflow.com/questions/11704828/how-to-allow-keyboard-focus-of-links-in-firefox">Stackoverflow Topic.</a> According to topic users have to enable keyboard navigation themselves for links in Firefox</li>
<li>Look and feel: In the Firefox browser the input[type="range"] were
invisible. After some research I found out that these have to be styled
specifically for Firefox. After implementing the following styling in my CSS the
sliders were visible:

```css
input[type='range']::-moz-range-thumb {
	box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
	border: 1px solid var(--primary);
	height: 22px;
	width: 22px;
	border-radius: 50%;
	background: var(--primary);
	cursor: pointer;
}

input[type='range']::-moz-range-track {
	width: 100%;
	height: 8.4px;
	cursor: pointer;
	box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
	background: var(--primary);
	border-radius: 1.3px;
	border: 0.2px solid #010101;
}
```

</li>
</ul>
</details>

### Google Chrome Mobile

For Google Chrome Mobile I tested the following test cases:

-  Check if the `fallback input fields` work if Javascript is disabled
-  Look and feel

<details>
<summary>Results</summary>
<ul>
<li>Javascript disabled: When Javascript is disabled the application works as it
should be doing. The fallback input fields are rendered.</li>
<li>Look and feel: On Google Chrome mobile the border of the login form input
fields are almost invisible. To fix this I styled the input[type="text"] as
following:

```css
input[type='range'] {
	border: 1px solid var(--black);
}
```

I put a border on the input fields and colored it black to make the input text
field more visible to mobile users.

</li>
</ul>
</details>

### Samsung Internet

For Samsung Internet I tested the following test cases:

-  Check if the `fallback input fields` work if Javascript is disabled
-  Look and feel

<details>
<summary>Results</summary>
<ul>
<li>
Javascript disabled: When Javascript is disabled the application works as it
should be doing. The fallback input fields are rendered.</li>
<li>Look and feel: On Samsung Internet the borders of the input[type="text]
are also not visible enough. Giving the input fields a border as shown in the
Google Chrome Mobile test results fixed this.</li>
</ul>
</details>

## Wireframes and sketches

### Wireframe

<details>
<summary>Wireframe</summary>
<img src="https://user-images.githubusercontent.com/43675725/113268839-20740e00-92d8-11eb-94ef-557c51916f59.png" width="300" height="555">
<img src="https://user-images.githubusercontent.com/43675725/113269003-4f8a7f80-92d8-11eb-8bc2-0df431d3ce33.png" width="300" height="555">
<img src="https://user-images.githubusercontent.com/43675725/113269059-5e713200-92d8-11eb-94b3-cff41b44e633.png" width="300" height="555">
<img src="https://user-images.githubusercontent.com/43675725/113269125-6e891180-92d8-11eb-884f-da9f31710447.png" width="300" height="555">
</details>

### Sketches

<details>
<summary>Sketches</summary>
<img src="https://user-images.githubusercontent.com/43675725/113267487-b1e28080-92d6-11eb-9db5-66224725e41c.jpeg" width="300">
<img src="https://user-images.githubusercontent.com/43675725/113267626-dd656b00-92d6-11eb-82d3-bbff46deaa0e.jpeg" width="300">
<img src="https://user-images.githubusercontent.com/43675725/113267707-f1a96800-92d6-11eb-86a0-d053de20e5e0.jpeg" width="300">
<img src="https://user-images.githubusercontent.com/43675725/113267858-16054480-92d7-11eb-8035-6149927d83df.jpeg">
</details>

## Installation guide

1. Clone repo
   `git clone https://github.com/benl95/browser-technologies-2021.git`
2. Install packages `npm i`
3. Start up server and run locally `node index` `

## License

MIT
