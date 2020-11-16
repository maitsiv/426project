import React from 'react';
import styles from './SearchOutput.module.css';

export function SearchOutput(props) {
    let resultMessage = null;
    if (props.restaurantAmount) {
        resultMessage = <p>There are {props.restaurantAmount} Indian Restaurants near you serving {props.term}!</p>
    }
    return (
        <div className={styles.container}>
            <div className={styles['search-summary']}>
                <h1 className='subtitle'><strong>{props.term}</strong> {props.location}</h1>
                {resultMessage}
            </div>
            <div className={styles.filters}>
                <button className="button">
                    <span className="icon"><i className="fas fa-sliders-h"></i></span>
                    <span>All Filters</span>
                </button>
                <div className="buttons has-addons">
                    <button className="button">$</button>
                    <button className="button">$$</button>
                    <button className="button">$$$</button>
                    <button className="button">$$$$</button>
                </div>
                <button className="button">
                    <span className="icon"><i className="fas fa-clock"></i></span>
                    <span>Open Now</span>
                </button>
                <button className="button">
                    <span className="icon"><i className="fas fa-dollar-sign"></i></span>
                    <span>Tastiness</span>
                </button>
            </div>
        </div>
    );
}