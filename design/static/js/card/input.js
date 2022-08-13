const fromInput = document.getElementById("from-input");
const convertedText = document.getElementById("converted");
const convertedTextContainer = document.getElementById(
	"converted-text-container"
);

const form = document.getElementById("inputs");

const arrowGradientTop = document.getElementById("from-stop");
const arrowGradientBottom = document.getElementById("to-stop");
//TODO: use them

function isValid(input = "", probables = []) {
	//TODO: try catch
	const newArr = [];
	input = input.split("");

	probables
		.map((elem) => elem.toString().toLowerCase())
		.forEach((probable) => {
			for (let i = 0; i < input.length; i++) {
				if (input[i] === probable) {
					newArr.push(probable);
					input.splice(i, 1);
					i = -1;
				}
			}
		});

	if (input.length !== 0) return false;
	return true;
}

function convert(val) {
	// TODO: Convert the digit types
	// TODO: add style to inputs
	let valid = false;
	switch (fromType.value) {
		case options[0]:
			valid = isValid(val, [0, 1]);
			break;
		case options[1]:
			valid = isValid(val, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
			break;
		case options[2]:
			valid = isValid(val, [0, 1, 2, 3, 4, 5, 6, 7, 8]);
			break;
		case options[3]:
			valid = isValid(val, [
				0,
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				"a",
				"b",
				"c",
				"d",
				"e",
				"f",
			]);
			break;
		default:
			throw new Error("Some error in the dropdown value");
	}

	if (!valid) {
		fromInput.classList.add("error");
		return;
	} else fromInput.classList.remove("error");

	convertedText.textContent = val;
	convertedText.classList.add("has-value");
}

convertedTextContainer.addEventListener("click", function() {
	navigator.clipboard.writeText(convertedText.textContent);
})

form.addEventListener("submit", function (e) {
	e.preventDefault();
	//TODO:
});
