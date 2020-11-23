import React from 'react';
//import logo from './logo.svg';
import {HomePage} from './HomePage/HomePage';
import {RestaurantPage} from './RestaurantPage/RestaurantPage';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import {Search} from './Search/Search';
import {Autocomplete} from './Autocomplete/Autocomplete';
import { LoginPage } from './Login/Login';
import {ForumPage} from './Forum/Forum';
import { SignupPage } from './Signup/Signup';


//import {SearchBar} from './SearchBar/SearchBar';
//import Home from './Home'

function App() {
  return (
    <Switch>
      <Route path='/search' component={Search}/>
      <Route exact path='/' component={HomePage}/>
      <Route path='/restaurant' component={RestaurantPage}/>
      <Route path='/login' component={LoginPage}/>
      <Route path='/forum' component={ForumPage}/>
      <Route path='/signup' component={SignupPage}/>
    </Switch>
  );
}


export default App;