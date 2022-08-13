//* Dropdown elements
const fromType = document.getElementById("from-type");
const toType = document.getElementById("to-type");

//* Constants
const options = ["binary", "decimal", "octal", "hexadecimal"];
function optionsForEach(callback = () => {}) {
	options.forEach((option, i) => callback(option, i));
}

//* Disabling the used dropdown option
function disableUsedOption(from, to) {
	optionsForEach((option) => {
		const toOption = to.querySelector(`option.${option}`),
			fromOption = from.querySelector(`option.${option}`);

		if (from.value === option) toOption.setAttribute("disabled", "disabled");
		else toOption.removeAttribute("disabled");

		if (to.value === option) fromOption.setAttribute("disabled", "disabled");
		else fromOption.removeAttribute("disabled");
	});
}

//* Initial disabling of options
disableUsedOption(fromType, toType);

//* Event listeners
// Dropdown click
fromType.addEventListener("change", function () {
	disableUsedOption(fromType, toType);
});
toType.addEventListener("change", function () {
	disableUsedOption(fromType, toType);
});
