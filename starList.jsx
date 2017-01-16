import React from 'react';
import ReactDom from 'react-dom';
import stars from './stars.json';

class StarList extends React.Component {
    render() {
        return <ul>
            {stars.map((s, i) =>
                <li key={i}>{s}</li>
            )}
        </ul>
    }
}

ReactDom.render(<StarList />, document.getElementById('root'));