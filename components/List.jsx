import React from 'react';
import { Link } from 'react-router'
import SearchInput, { createFilter } from 'react-search-input'
import stars from '../data/stars.js';
import styles from './List.scss';

const KEYS_TO_FILTERS = ['name', 'id']

/// Scrollable list of stars.
export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchTerm: '' };
    }

    render() {
        const filteredStars = stars.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

        return (
            <div className={styles.wrapper}>
                <SearchInput className="search-input" onChange={(e) => this.searchUpdated(e)} />
                <ul className={styles.list}>
                    {filteredStars.map((s) =>
                        <li key={s.id}>
                            <Link to={"/" + s.id} className={styles.link}>
                                {s.name}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        )
    }

    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }
}

