import {Router, Route, Redirect, IndexRoute, hashHistory} from 'react-router';
import IndexHome from "../liangshen-mh/js/mh-web/mh-home/IndexHome";
import IndexStyle from "../liangshen-mh/js/mh-web/mh-styleDetails/IndexDetail";
import App from "../liangshen-mh/js/App";
import React from "react";



render((
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/home" component={IndexHome}/>
        <Route path="/style" component={IndexStyle}/>
    </Router>
),document.getElementById('app'));
