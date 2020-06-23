import React from 'react';
import ReactDOM from 'react-dom';

import Visualizer from './Visualizer/Visualizer';
import * as serviceWorker from './serviceWorker';

import "./index.css"
import "./fontawesome.css"

ReactDOM.render(<Visualizer />, document.getElementById('root'));

serviceWorker.register()
