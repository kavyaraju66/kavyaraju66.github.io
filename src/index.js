import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Mainpage from'./pages/main';

ReactDOM.render(<div>Hello world</div>, document.getElementById('root'));

serviceWorker.unregister();
