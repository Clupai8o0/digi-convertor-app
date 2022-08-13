//* Setting the style for the dropdown option
function setDropdownStyle(dropdown) {
	optionsForEach((option) => {
		if (dropdown.value === option) {
			dropdown.classList.add(option);
		} else dropdown.classList.remove(option);
	});
}

function setReverseBtnStyle() {
	//* Changing the linear gradient
	reverseBtn.style.backgroundImage = `linear-gradient(
			rgba(255, 255, 255, 0),
			rgba(255, 255, 255, 0)
		),
		linear-gradient(180deg, var(--${fromType.value}), var(--${toType.value}))`;

	//* Changing arrow styles
	optionsForEach((option) => {
		if (fromType.value === option) {
			fromArrow.classList.add(option);
		} else fromArrow.classList.remove(option);

		if (toType.value === option) {
			toArrow.classList.add(option);
		} else toArrow.classList.remove(option);
	});
}

function setStyle() {
	setDropdownStyle(fromType);
	setDropdownStyle(toType);
	setReverseBtnStyle();
}

//* Initial set for dropdown style
setStyle();

//* Event listeners
// Dropdown click
fromType.addEventListener("change", function () {
	setStyle();
});
toType.addEventListener("change", function () {
	setStyle();
});

// Reversing dropdown options
reverseBtn.addEventListener("click", function () {
	setStyle();
});
