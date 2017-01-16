import React from 'react';

/// Details view for a single star.
export default class Details extends React.Component {
    render() {
        return <h1>{this.props.params.star}</h1>
    }
}