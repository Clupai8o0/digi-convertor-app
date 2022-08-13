//* Reverse Btn
const reverseBtn = document.getElementById("reverse");
const fromArrow = document.getElementById("from-arrow");
const toArrow = document.getElementById("to-arrow");

reverseBtn.addEventListener("click", function () {
	const temp = fromType.value;
	fromType.value = toType.value;
	toType.value = temp;

	disableUsedOption(fromType, toType);
});