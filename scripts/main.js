import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Details from '../components/Details.jsx';
import List from '../components/List.jsx';
import Locator from '../components/Locator.jsx';
import Stella from '../components/Stella.jsx';

$(document).ready(function () {
    window.planetarium = $.virtualsky({
        'id': 'starmap',
        'projection': 'gnomic',
        'ra': 83.8220833,
        'dec': -5.3911111,
        'ground': false,
        'constellations': true,
        'fov': 100,
        'showposition': false,
        'showdate': false,
        'showplanetlabels': false,
        'showplanets': false,
        'cardinalpoints': false,
        'transparent': true,
        'credit': false
    });
});

ReactDom.render((
    <Router history={browserHistory}>
        <Route path="/" component={Stella}>
            <IndexRoute component={List} />
            <Route path="/locator" component={Locator} />
            <Route path="/list" component={List} />
            <Route path="/:star" component={Details} />
        </Route>
    </Router>
), document.getElementById('root'));
