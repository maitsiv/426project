import React from 'react';
import { Result } from './Result/Result';
import styles from './Results.module.css';
//import {Spinner} from '../../Spinner/Spinner.js';

export function Results(props) {
    let searchResults;
    if(props.businesses && props.businesses.length) {
        searchResults = props.businesses.map(b => <Result key={b.id} business={b}/>);
    }

    return (
        <div className={styles['search-results']}>
            {searchResults}
        </div>
    );
}