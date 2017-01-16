import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Details from './components/Details.jsx';
import List from './components/List.jsx';
import Stella from './components/Stella.jsx';

ReactDom.render((
    <Router history={browserHistory}>
        <Route path="/" component={Stella}>
            <Route path="/list" component={List}/>
            <Route path="/:star" component={Details}/>
        </Route>
    </Router>
), document.getElementById('root'));