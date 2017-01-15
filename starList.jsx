import React from 'react';
import ReactDom from 'react-dom';
import stars from './stars.json';

class StarList extends React.Component {
    render() {
        return  <ul>
                    <li>Star</li>
                    <li>That Star</li>
                    <li>Other Star</li>
                </ul>
    }
}

ReactDom.render(<StarList/>, document.getElementById('starList'));