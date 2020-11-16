import React from 'react';
import { RestaurantNav } from './RestaurantNav/RestaurantNav';
import { SearchOutput } from '../Search/SearchOutput/SearchOutput';
import styles from './RestaurantPage.module.css';
import {Link} from 'react-router-dom';
import { Results } from '../Search/Results/Results';


export function RestaurantPage() {
    return (
        <div className={styles['restaurant']}>
            <RestaurantNav/>
            <SearchOutput/>
            <Results/>
        </div>
    );
} 