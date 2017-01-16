import React from 'react';
import List from './List.jsx';
import { Link } from 'react-router'

/// Main app view.
export default class Stella extends React.Component {
    render() {
        return (
            <div>
                <ul role="nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/list">List</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}