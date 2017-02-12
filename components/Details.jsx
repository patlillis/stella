import React from 'react';
import stars from '../data/stars.json';
import styles from './Details.scss';

/// Details view for a single star.
export default class Details extends React.Component {
    render() {
        return (
            <div className={styles.details}>
                <h1>{stars[this.props.params.star].name}</h1>
                <h2>{stars[this.props.params.star].type}</h2>
            </div>
        )
    }
}