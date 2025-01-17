import React from 'react';
//import useReactRouter from 'use-react-router';
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from './Login.module.css';
//import firebase from "firebase/app";
//import "firebase/auth";
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom';

export function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      return username.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }
  
    return (
      <div className={styles.login}>
        <Link to='/'><img src={logo} className={styles.logo} alt='logo' /></Link>
          <div className= {styles.loginCard}>
     
            <h1>B&B Login</h1>
        <div className={styles.content}>
        <Form onSubmit={handleSubmit}>
          <Form.Group  controlId="username">
            <Form.Label>Username </Form.Label>
            <Form.Control
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group  controlId="password">
            <Form.Label>Password </Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button  type="submit" disabled={!validateForm()}>
            Login
          </Button>
        </Form>
        </div>
        </div>
      </div>
      
    );
 /* firebase.auth().signInWithEmailAndPassword(username, password)
  .then((user) => {
    // Signed in 
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
*/
  }