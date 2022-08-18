import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./variables.css";
import "./media-queries.css";

import { RecoilRoot } from "recoil";

window.scrollTo({
	top: 0,
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RecoilRoot>
			<App />
		</RecoilRoot>
	</React.StrictMode>
);
