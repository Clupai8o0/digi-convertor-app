import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { themeState } from "../atoms/themeAtom";
import { Theme } from "../lib/types";

const ThemeChanger = () => {
	const [theme, setTheme] = useRecoilState(themeState);

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");
		if (storedTheme) {
			if (storedTheme === Theme.Light) {
				setTheme(Theme.Light);
			} else setTheme(Theme.Dark);
		}
	}, []);

	function handleThemeChange() {
		if (theme === Theme.Light) {
			setTheme(Theme.Dark);
			localStorage.setItem("theme", Theme.Light);
		} else {
			setTheme(Theme.Light);
			localStorage.setItem("theme", Theme.Light);
		}
	}

	return (
		<img
			src={`${theme === Theme.Light ? "sun" : "moon"}.svg`}
			alt="Theme Changer"
			onClick={handleThemeChange}
		/>
	);
};

export default ThemeChanger;
