import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App.tsx";
import { projectConfig } from "./projectConfig.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<App config={projectConfig} />
	</React.StrictMode>,
);
