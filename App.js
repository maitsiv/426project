import React from 'react';
import logo from './logo.svg';
import {HomePage} from './HomePage/HomePage';
import {RestaurantPage} from './RestaurantPage/RestaurantPage';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import {Search} from './Search/Search';
import {LoginPage} from './LoginPage/Login';


//import {SearchBar} from './SearchBar/SearchBar';
//import Home from './Home'

function App() {
  return (
    <Switch>
      <Route path='/search' component={Search}/>
      <Route path='/' component={RestaurantPage}/>
    </Switch>
  );
}
/* <div>
  
    <div class="navbar">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="books.html">Restaurants</a></li>
            <li><a href="interestingfacts.html">Movies</a></li>
            <li><a href="gallery.html">Events</a></li> 
            
          </ul>
    </div>
 
    <div class="wrap">
   <div class="search">
      <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
      <button type="submit" class="searchButton">
        <i class="fa fa-search"></i>
     </button>
   </div>
</div>
    
</div> */ //}


//  );
//}

export default App;