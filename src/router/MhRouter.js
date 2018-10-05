import {Router, Route, hashHistory} from 'react-router';
import App from "../liangshen-mh/js/App";
import Home from "../liangshen-mh/js/mh-web/mh-home/Home";


render((
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/home" component={Home}/>
        <Route path="/index" component={Home}/>
    </Router>
),document.getElementById('app'));
