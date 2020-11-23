import React from 'react';
import { SearchBar } from '../../SearchBar/SearchBar';
import {Link} from 'react-router-dom';
import styles from './RestaurantNav.module.css';
import logo from '../../assets/logo.png';
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
            <Link to='/'><img src={logo} className={styles.logo} alt='logo' /></Link>
            <h1 id= {styles['restaurantHeader']}>Restaurant Search</h1>
            <SearchBar search={search} />      
            <i className="fas fa-utensils"></i>
            
        </div>
    );
} 