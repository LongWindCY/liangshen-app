import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './liangshen-mh/js/App';
import 'antd/dist/antd.css';
import registerServiceWorker from './registerServiceWorker';
import hashHistory from "react-router/es/hashHistory";
import Router from "react-router/es/Router";
import Route from "react-router/es/Route";
import IndexHome from "./liangshen-mh/js/mh-web/mh-home/IndexHome";
import IndexDetail from "./liangshen-mh/js/mh-web/mh-styleDetails/IndexDetail";


ReactDOM.render((
        <Router history={hashHistory}>
            <Route path="/" component={IndexHome}/>
            {/*<Route path="/style" component={IndexDetail}/>*/}
        </Router>
    ),document.body
);
