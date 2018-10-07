import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
// import registerServiceWorker from './registerServiceWorker';
import hashHistory from "react-router/es/hashHistory";
import Router from "react-router/es/Router";
import Route from "react-router/es/Route";
import IndexHome from "./liangshen-mh/js/mh-web/mh-home/IndexHome";
import IndexDetail from "./liangshen-mh/js/mh-web/mh-styleDetails/IndexDetail";
import IndexMassage from "./liangshen-mh/js/mh-web/mh-userMassage/IndexMassage";
import IndexSelect from "./liangshen-mh/js/mh-web/mh-styleSelect/IndexSelect";



ReactDOM.render((
        <Router history={hashHistory}>
            <Route path="/" component={IndexHome}/>
            <Route path="/style" component={IndexDetail}/>
            <Route path="/style/select" component={IndexSelect}/>
            <Route path="/massage" component={IndexMassage}/>
        </Router>
    ),document.body
);
