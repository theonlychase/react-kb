import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Roboto from 'roboto-fontface';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();