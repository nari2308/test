import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Home  from './Components/Home/Home';
import Header from './Components/Header/Header';


function App() {
  return (
    <>
    <Header />
    <Home />
    <Router>
    <Routes>
      <Route exact path='/react-app' Component={App}></Route>
      <Route  path='/react-app' Component={Home }></Route>
      <Route  path='/react-app/signup' Component={Signup }></Route>
     <Route  path='/react-app/login' Component={Login }></Route>
    </Routes>
   </Router>
   </>
  );
}

export default App;
