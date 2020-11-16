import React from 'react';
import useReactRouter from 'use-react-router';
import styles from './Login.module.css';

export function LoginPage() {
    const { history } = useReactRouter(); 
  
 
return (
<div className="{styles['login-card']}">
    <div className= {styles['login-card']}>
        <div className="card-title">
            <h1>B&B Login</h1>
        </div> 

        <div className={styles['content']}>
            <form className="login-form">
                <div className="field">
                    <div className="control">
                        <button type="submit" class="btn btn-primary">Login</button>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <p className="message"></p>
                    </div>
                </div>
            </form>
        </div>
        </div>
</div>

)
}
