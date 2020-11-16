import React from 'react';
import styles from './NavBar.module.css';

export function NavBar() {
    return (
        <div className={styles['nav-bar']}>
            <div className={styles.left}>
                <span>Write a Review</span>
                <span>Events</span>
            </div>
            <div className={styles.right}>
                <span>Login</span>
                <button className='button'>Sign up</button>
            </div>
        </div>
    );
}