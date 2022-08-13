import "./global.css";

// Containers
import Convertor from "./containers/converter";
import Formula from "./containers/formula";

// State
import { useRecoilValue } from "recoil";
import { themeState } from "./atoms/themeAtom";
import { Theme } from "./lib/types";

function App() {
	const theme = useRecoilValue(themeState);

	return (
		<div className={theme === Theme.Light ? "light" : "dark"}>
			<Convertor />
			<Formula />
		</div>
	);
}

export default App;
