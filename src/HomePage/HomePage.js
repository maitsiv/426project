import React from 'react';
import { NavBar } from './NavBar/NavBar';
import coolerflag from '../logos/coolerflag.JPG';
import indianfood from '../logos/indianfood.jpg';
import indianfood2 from '../logos/indianfood2.jpg';
import petta from '../logos/petta.jpg';
import omshantiom from '../logos/omshantiom.jpg';

import styles from './HomePage.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
//import { SearchSuggestions } from './SearchSuggestions/SearchSuggestions';
import useReactRouter from 'use-react-router'; 

var sectionStyle = {
  width: "100%",
  height: "600px",
  backgroundImage: `url(${coolerflag})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'

};



export function HomePage() {
    const { history } = useReactRouter();
  
     return (


      
      <div className={styles.landing} >
        <section style={ sectionStyle }>
        <h1 className={styles.india}>Welcome to Bollywood and Bites!</h1>
        <img  className={styles.movie1} src={omshantiom}></img>
        <img className={styles.movie2}src={petta}></img>

        
        <button className="button is-rounded" className={styles.category}>Movies</button>
        <img className={styles.restaurant1} src={indianfood}></img>
        <img className={styles.restaurant2} src={indianfood2}></img>


        <button className="button is-rounded" className={styles.category2}>Restaurants</button>
        <button className="button is-rounded" className={styles.login}>Login</button>
        </section>
      </div>
      
    );
}