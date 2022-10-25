const letters = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];
const symbols = [
	"~",
	"`",
	"!",
	"@",
	"#",
	"$",
	"%",
	"^",
	"&",
	"*",
	"(",
	")",
	"_",
	"-",
	"+",
	"=",
	"{",
	"[",
	"}",
	"]",
	",",
	"|",
	":",
	";",
	"<",
	">",
	"?",
	".",
	"/",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let hasLetters = true;
let hasNumbers = true;
let hasSymbols = true;

let passwordOneEl = document.getElementById("password-one");
let passwordTwoEl = document.getElementById("password-two");

let lettersEl = document.getElementById("letters-el");
let numbersEl = document.getElementById("numbers-el");
let symbolsEl = document.getElementById("symbols-el");

let copyEl = document.getElementById("copy-el");

function getRandomChar() {
	let characters = [];

	if (hasLetters) {
		characters.push(...letters);
	}
	if (hasNumbers) {
		characters.push(...numbers);
	}
	if (hasSymbols) {
		characters.push(...symbols);
	}

	let randIndex = Math.floor(Math.random() * characters.length);

	return characters[randIndex];
}

function renderPasswords() {
	let passwordOne = "";
	let passwordTwo = "";
	for (let i = 0; i < 15; i++) {
		passwordOne += getRandomChar();
		passwordTwo += getRandomChar();
	}

	passwordOneEl.textContent = passwordOne;
	passwordTwoEl.textContent = passwordTwo;
}

function clickToCopy(id) {
	let copyText = document.getElementById(`password-${id}`);
	if (copyText.textContent === "") return;

	navigator.clipboard.writeText(copyText.textContent);
	copyEl.textContent =
		"Copied Password To Clipboard: " + copyText.textContent;
}

const buttonDark = `
	background-color: var(--clr-blue-light);
	color: var(--clr-blue-dark)
`;

const buttonLight = `
	background-color: var(--btn-green);
	color: var(--txt-white);
`;

function setChars(id) {
	if (id === "letters") {
		hasLetters = !hasLetters;
	} else if (id === "numbers") {
		hasNumbers = !hasNumbers;
	} else if (id === "symbols") {
		hasSymbols = !hasSymbols;
	}

	if (!hasLetters && !hasNumbers && !hasSymbols) {
		hasLetters = true;
	}

	if (hasLetters) {
		lettersEl.style.cssText = buttonLight;
	} else {
		lettersEl.style.cssText = buttonDark;
	}
	if (hasNumbers) {
		numbersEl.style.cssText = buttonLight;
	} else {
		numbersEl.style.cssText = buttonDark;
	}
	if (hasSymbols) {
		symbolsEl.style.cssText = buttonLight;
	} else {
		symbolsEl.style.cssText = buttonDark;
	}
}
