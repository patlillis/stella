import React from 'react';
import stars from '../data/stars.json';
import styles from './Details.scss';

/// Details view for a single star.
export default class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = { star: stars.find((s) => s.id == this.props.params.star) };
    }

    render() {
        return (
            <div className={styles.details}>
                <h1>{this.state.star.name}</h1>
                <h2>{this.state.star.type}</h2>
            </div>
        )
    }
}