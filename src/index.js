import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './liangshen-mh/js/App';
import 'antd/dist/antd.css';
// import mhSider from './liangshen-mh/js/fixed-component/mhSider'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();

