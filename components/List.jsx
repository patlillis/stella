import React from 'react';
import { Link } from 'react-router'
import stars from '../data/stars.json';

/// Scrollable list of stars.
export default class List extends React.Component {
    render() {
        return <ul>
            {stars.map((s, i) =>
                <li key={i}><Link to={"/" + s}>{s}</Link></li>
            )}
        </ul>
    }
}