import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('container'));
registerServiceWorker();
