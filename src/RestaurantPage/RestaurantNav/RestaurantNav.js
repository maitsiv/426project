import React from 'react';
import { SearchBar } from '../../SearchBar/SearchBar';
import {Link} from 'react-router-dom';
import styles from './RestaurantNav.module.css';
import useReactRouter from 'use-react-router'; 


export function RestaurantNav(props) {   
    const { history } = useReactRouter();
  
    function search(food, location) {
      const urlFood = encodeURI(food);
      const urlLocation = encodeURI(location);
      history.push(
        `/search?find_desc=${urlFood}&find_loc=${urlLocation}`
      );
    }

    return (
        <div className={styles['restaurantNav']}>   
            <h1 id= {styles['restaurantHeader']}>Restaurant Page</h1>
            <SearchBar search={search} />      
            <i className="fas fa-utensils"></i>
            
        </div>
    );
} 