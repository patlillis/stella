import React from 'react';
import { Link } from 'react-router'
import stars from '../data/stars.json';

/// Scrollable list of stars.
export default class List extends React.Component {
    render() {
        return <ul>
            {Object.keys(stars).map((s) =>
                <li key={s}><Link to={"/" + s}>{stars[s].name}</Link></li>
            )}
        </ul>
    }
}