const characters = [
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
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
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
	"/",
];

let passwordOneEl = document.getElementById("password-one");
let passwordTwoEl = document.getElementById("password-two");

function generateRandomChar() {
	let randIndex = Math.floor(Math.random() * characters.length);

	return characters[randIndex];
}

function genPasswords() {
	let passwordOne = "";
	let passwordTwo = "";
	for (let i = 0; i < 15; i++) {
		passwordOne += generateRandomChar();
		passwordTwo += generateRandomChar();
	}

	passwordOneEl.textContent = passwordOne;
	passwordTwoEl.textContent = passwordTwo;
}

function clickToCopy(id) {
	let copyText = document.getElementById(`password-${id}`);

	navigator.clipboard.writeText(copyText.textContent);
	alert("Copied: " + copyText.textContent);
}
