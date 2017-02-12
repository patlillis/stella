import React from 'react';
import List from './List.jsx';
import { Link } from 'react-router';
import styles from './Stella.scss';

/// Main app view.
export default class Stella extends React.Component {
    render() {
        return (
            <div className={styles.stella}>
                <ul role="nav">
                    <li>
                        <Link to="/" className={styles.link}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/list" className={styles.link}>
                            List
                        </Link>
                    </li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}