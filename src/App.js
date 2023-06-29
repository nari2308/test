import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home  from './Components/Home';


function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route exact path='/' Component={App}></Route>
      <Route  path='/home' Component={Home }></Route>
      <Route  path='/signup' Component={Signup }></Route>
     <Route  path='/login' Component={Login }></Route>
    </Routes>
   </Router>
   </>
  );
}

export default App;
