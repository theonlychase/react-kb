import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter }  from "react-router-dom";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
// Listens for tap/touch/click events. Required as of now. 
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

ReactDOM.render((
	<BrowserRouter>
		<MuiThemeProvider muiTheme={getMuiTheme()}>
			<App />
		</MuiThemeProvider>
	</BrowserRouter>
), 
document.getElementById("root"));

registerServiceWorker();


