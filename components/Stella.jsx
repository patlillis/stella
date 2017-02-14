import React from 'react';
import { Link } from 'react-router';
import styles from './Stella.scss';

/// Main app view.
export default class Stella extends React.Component {
    render() {
        return (
            <div className={styles.stella}>
                <ul role="nav" className={styles.nav}>
                    <li>
                        <Link to="/locator" className={styles.navLink}>
                            Locator
                        </Link>
                    </li>
                    <li>
                        <Link to="/list" className={styles.navLink}>
                            List
                        </Link>
                    </li>
                </ul>
                <div className={styles.content}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}