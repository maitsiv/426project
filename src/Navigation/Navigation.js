import React from 'react';
import logo from '../assets/logo.png';
import styles from './Navigation.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
import {Link} from 'react-router-dom';

export function Navigation(props) {
    return (
        <div className={styles['nav-bar']}>
            <Link to='/'><img src={logo} className={styles.logo} alt='logo' /></Link>
            <SearchBar small term={props.term} location={props.location} search={props.search}/>
            <button className={`button ${styles['nav-button']}`}>Login</button>
            <button className={`button ${styles['nav-button']}`}>Sign Up</button>
        </div>
    );
}