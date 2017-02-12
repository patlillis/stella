import React from 'react';
import { Link } from 'react-router'
import stars from '../data/stars.json';
import styles from './List.scss';

/// Scrollable list of stars.
export default class List extends React.Component {
    render() {
        return <ul>
            {Object.keys(stars).map((s) =>
                <li key={s}>
                    <Link to={"/" + s} className={styles.link}>
                        {stars[s].name}
                    </Link>
                </li>
            )}
        </ul>
    }
}