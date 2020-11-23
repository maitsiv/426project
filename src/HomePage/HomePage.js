import React from 'react';
import { NavBar } from './NavBar/NavBar';
//import coolerflag from '../logos/coolerflag.JPG';
import indianfood from '../logos/indianfood.jpg';
import indianfood2 from '../logos/indianfood2.jpg';
import logo from '../assets/logo.png';

//import petta from '../logos/petta.jpg';
//import omshantiom from '../logos/omshantiom.jpg';
import rice from '../logos/rice.jpg';
import samosa from '../logos/samosa.jpg';
import food from '../logos/food.jpg';
import {Link} from 'react-router-dom';


import styles from './HomePage.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
//import { SearchSuggestions } from './SearchSuggestions/SearchSuggestions';
import useReactRouter from 'use-react-router'; 

var sectionStyle = {
  width: "100%",
  height: "1024px",
  //backgroundImage: `url(${coolerflag})`,
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
        <img className={styles.restaurant1} src={indianfood}></img>
        <img className={styles.restaurant2} src={indianfood2}></img>
        <img className={styles.rice} src={rice}></img>
        <img className={styles.samosa} src={samosa}></img>
        <img className={styles.food} src={food}></img>
        
        <p className={styles.intro}>You can use our website to search up your favorite Indian or Pakistani dishes and find a restaurant in any location!</p>



        <Link to='/restaurant'><button className={styles.category2}>Click here to start searching!</button></Link>
        <Link to='/login'><button className={styles.login}>Login</button></Link>
        <Link to='/signup'><button className={styles.signup}>Sign Up</button></Link>
        <Link to='/'><img src={logo} className={styles.logo} alt='logo' /></Link>
        </section>

      
      </div>
      
    );
}