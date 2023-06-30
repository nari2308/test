
import { AppBar, Button,  Toolbar } from "@mui/material";
import React from "react";
import './Header.css';


export default function Header() {
  const displayDesktop = () => {
    return <Toolbar>
        <Button variant="text" id="menuButton" href="/react-app/">Home</Button>
        <Button variant="text" id="menuButton" href="/react-app/signup">About</Button>
        <Button variant="text" id="menuButton" href="/react-app/signup">Signup</Button>
        <Button variant="text" id="menuButton" href="/react-app/login">Login</Button>
    </Toolbar>;

  };
  
  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
      
    </header>
  );
}