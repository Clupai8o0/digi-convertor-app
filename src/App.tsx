import "./global.css";

// Containers
import Convertor from "./containers/converter";
import Formula from "./containers/formula";

// State
import { useRecoilValue } from "recoil";
import { themeState } from "./atoms/themeAtom";
import { Theme } from "./lib/types";

// Notifications
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { useEffect } from "react";

function App() {
	const theme = useRecoilValue(themeState);

	

	return (
		<div className={theme === Theme.Light ? "light" : "dark"}>
			<ReactNotifications />
			<Convertor />
			<Formula />
		</div>
	);
}

export default App;
