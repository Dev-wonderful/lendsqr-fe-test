import React from "react";
import lendsqrLogo from '../assets/header-logo.svg';
import loginLogo from '../assets/login.png'
import { Link } from 'react-router-dom'

interface LoginProps{}

const Login: React.FC<LoginProps> = () => {
    return(
        <header className='login-grid'>
            <nav className='login-grid__nav' aria-label="company logo"><img src={lendsqrLogo} alt="" /></nav>
            <div className="login-grid__hero grid-container">
                <div className="grid-container__child"><img src={loginLogo} alt="" /></div>
                <section className="grid-container__login login">
                    <form>
                        <h3>Welcome!</h3>
                        <p>Enter details to login.</p>
                        <label htmlFor="email">
                            <input type="email" name="email" id="" placeholder="Email"/>
                        </label>
                        <label htmlFor="password">
                            <input type="password" name="password" id="" placeholder="Password"/>
                        </label>
                        <span>FORGOT PASSWORD?</span>
                        <button type="submit"><Link to="/dashboard">LOG IN</Link></button>
                    </form>
                </section>
            </div>
        </header>
        
    )
}

export default Login