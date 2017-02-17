import React from 'react';
import stars from '../data/stars.js';
import styles from './Details.scss';

/// Details view for a single star.
export default class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = { star: stars.find((s) => s.id == this.props.params.star) };
    }

    render() {
        if (window.planetarium) {
            window.planetarium.panTo(this.state.star.point.ra, this.state.star.point.ra, 1000);
        }

        return (
            <div className={styles.details}>
                <h1>{this.state.star.name}</h1>
            </div>
        )
    }
}