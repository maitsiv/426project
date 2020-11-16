import React from 'react';
import { SearchBar } from '../../SearchBar/SearchBar';
import {Link} from 'react-router-dom';
import styles from './RestaurantNav.module.css';
import useReactRouter from 'use-react-router'; 


export function RestaurantNav(props) {   
    const { history } = useReactRouter();
  
    function search(term, location) {
      const urlEncodedTerm = encodeURI(term);
      const urlEncodedLocation = encodeURI(location);
      history.push(
        `/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`
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