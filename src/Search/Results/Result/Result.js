import React from 'react';
import styles from './Result.module.css';
//import { BusinessRating } from '../../../BusinessRating/BusinessRating';

export function Result(props) {
    const restaurant = props.business;
    if (!restaurant) {
        return ( <div> </div> );
    }

    const tags = restaurant.categories.map(category => (<span className={`tag ${styles['business-tag']}`} key={restaurant.id + category.title}>{category.title}</span>));
    const address = restaurant.location.display_address.map(address => <p key={restaurant.id + address}>{address}</p>);

    return (
        <div className={styles['search-result']}>
            <img src={restaurant.image_url} alt='business' className={styles['business-image']}/>
            <div className={styles['bussiness-info']}>
                <h2 className="subtitle">{restaurant.name}</h2>
                <p>{restaurant.price} {tags}</p>
                
            </div>
            <div className={styles['contact-info']}>
                <p>{restaurant.phone}</p>
                {address}
            </div>
        </div>
    )
}