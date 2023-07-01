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
      <Route exact path='/' Component={App}></Route>
      <Route  path='/test' Component={Home }></Route>
      <Route  path='/test/signup' Component={Signup }></Route>
     <Route  path='/test/login' Component={Login }></Route>
    </Routes>
   </Router>
   </>
  );
}

export default App;
