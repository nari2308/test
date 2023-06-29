import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

function Home() {
    return (
        <div>
            <header className="header">
            <Link to="/home"><button id="homebutton">Home</button></Link>
            <Link to="/signup"><button id="homebutton">Signup</button></Link>
            <Link to="/login"><button id="homebutton">Login</button></Link>
            </header>
            <h1 className="heading">WELCOME TO NEW ENVIRONMENT</h1>
        </div>
        
    );
}

export default Home;