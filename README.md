## Case

For the final assignment we must develop and application according to the
principles of Progressive Enhancement. The application must be usable on
multiple browsers and in multiple contexts.

## Survey

Users must be able to fill in the following on the survey:

-  Name
-  Teachers that teached the subject
-  The date they were following the subject
-  Rate teaching material, explanation and own insight from 1-10
-  Data will be saved
-  User can continue where they left if they decide to come back later

## Layers

Functional

-  HTML content works properly
-  User can log in and track the surveys they have to do and which ones are
   completed
-  User can fill in and submit a form, data will be stored

Reliable

-  Form validation works.

Usable

-  CSS adds extra styling to make it more readable for the user.

Pleasurable

-  Filled in answers will be stored in Local Storage. When a user leaves a
   survey and comes back later the input fields have the same value.
-  Slider enhance for user to make it more easy for users to grade a course.

## Browser testing

### Browsers

Desktop:

-  Google Chrome
-  Firefox

Mobile:

-  Google Chrome
-  Samsung internet

### Test cases

Desktop:

-  Keyboard navigation
-  Javascript disabled
-  Look and feel

Mobile:

-  Javascript disabled
-  Look and feel

### Google Chrome Desktop

Since I'm developing the application in Google Chrome I'm also testing it at the
same time in this browser.

-  Check if the `fallback input fields` work if Javascript is disabled.
-  Check if keyboard navigation works
-  Look and feel

Results:

Javascript disabled: The application works when Javascript is disabled. The
slider enhancements dissapear from the DOM since it is made with Javascript and
it return the Radio buttons will be displayed to grade a course.

Keyboard navigation: Keyboard navigation works on the form for the `Sliders` and
`Radio Buttons`

### Firefox Desktop

For the Firefox testing I tested the same test cases as in the Chrome Desktop
Browser.

-  Check if the `fallback input fields` work if Javascript is disabled
-  Check if keyboard navigation works
-  Look and feel

Results:

Javascript disabled: When Javascript is disabled the application works as it
should be. The fallback `Radio Buttons` are rendered.

Keyboard navigation: Keyboard navigation for the form works, but for `<a>`
elements it doesn't. I did some research on this and I found the following
Stackoverflow topic:

[How to allow keyboard focus of links in Firefox?](https://stackoverflow.com/questions/11704828/how-to-allow-keyboard-focus-of-links-in-firefox)

According to the topic users have to enable keyboard navigation on Firefox
browser themselves.

Look and feel: In the Firefox browser the `Sliders` were invisible. After some
research I found out that sliders have to be styled specifically for Firefox.
After implementing the following styling in my CSS the sliders were visible:

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

### Google Chrome Mobile

For Google Chrome Mobile I tested the following test cases:

-  Check if the `fallback input fields` work if Javascript is disabled
-  Look and feel

Results:

Javascript disabled: When Javascript is disabled the application works as it
should be doing. The `fallback input fields` are rendered.

Look and feel: On Google Chrome mobile the border of the login form input fields
are almost invisible. To fix this I styled the `input[type="text"]` as
following:

```css
input[type='range'] {
	border: 1px solid var(--black);
}
```

I put a border on the input fields and colored it black to make the input text
field more visible to mobile users.

### Samsung Internet

For Samsung Internet I tested the following test cases:

-  Check if the `fallback input fields` work if Javascript is disabled
-  Look and feel

Javascript disabled: When Javascript is disabled the application works as it
should be doing. The `fallback input fields` are rendered.

Look and feel: On Samsung Internet the borders of the `input[type="text]` are
also not visible enough. Giving the input fields a border as shown in the Google
Chrome Mobile test results fixed this.

# Installation guide

1. Clone repo
   `git clone https://github.com/benl95/browser-technologies-2021.git`
2. Install packages `npm i`
3. Start up server and run locally `node index` `

# Wireflow

![WhatsApp Image 2021-03-24 at 09 28 53](https://user-images.githubusercontent.com/43675725/112280311-2b4df380-8c85-11eb-890a-04f231c7b5c8.jpeg)

![WhatsApp Image 2021-03-24 at 09 29 10](https://user-images.githubusercontent.com/43675725/112280365-3d2f9680-8c85-11eb-8ff3-e29125da5ccb.jpeg)

![WhatsApp Image 2021-03-24 at 09 29 30](https://user-images.githubusercontent.com/43675725/112280421-4ae51c00-8c85-11eb-825d-aa389d4926a3.jpeg)

![WhatsApp Image 2021-03-24 at 09 29 37](https://user-images.githubusercontent.com/43675725/112280468-56384780-8c85-11eb-8e22-2e9b81dfde59.jpeg)

# License

MIT
