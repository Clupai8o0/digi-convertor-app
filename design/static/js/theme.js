const themeChanger = document.getElementById("theme-changer");
const body = document.body;

function setTheme(theme = "light") {
	//* if theme is already dark
	if (body.getAttribute("data-theme") === "dark" || theme === "light") {
		body.setAttribute("data-theme", "light"); //* Setting the theme
		themeChanger.setAttribute("src", "../static/assets/sun.svg"); //* Changing icon
		localStorage.setItem("theme", "light"); //* Storing theme in localStorage
	} else {
		body.setAttribute("data-theme", "dark"); //* Setting the theme
		themeChanger.setAttribute("src", "../static/assets/moon.svg"); //* Changing icon
		localStorage.setItem("theme", "dark"); //* Storing theme in localStorage
	}
}

//* On load checking localStorage for theme
setTheme(localStorage.getItem("theme"));

//* Listening for button click
themeChanger.addEventListener("click", setTheme);
