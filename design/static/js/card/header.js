//* Type Texts
const fromText = document.getElementById("from-text");
const toText = document.getElementById("to-text");

//* Helper capitalize function
function capitalize(string = "") {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

fromType.addEventListener("change", function (event) {
	fromText.textContent = capitalize(event.target.value);
});
toType.addEventListener("change", function (event) {
	toText.textContent = capitalize(event.target.value);
});