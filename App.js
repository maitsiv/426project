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

export default App;