
import { AppBar, Button,  Toolbar } from "@mui/material";
import React from "react";
import './Header.css';


export default function Header() {
  const displayDesktop = () => {
    return <Toolbar>
        <Button variant="text" id="menuButton" href="/test/">Home</Button>
        <Button variant="text" id="menuButton" href="/test/signup">About</Button>
        <Button variant="text" id="menuButton" href="/test/signup">Signup</Button>
        <Button variant="text" id="menuButton" href="/test/login">Login</Button>
    </Toolbar>;

  };
  
  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
      
    </header>
  );
}