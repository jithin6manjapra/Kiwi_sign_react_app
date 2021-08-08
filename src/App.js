import './App.css'
import Home from './Pages/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Signupm from './Pages/Signupm';
import Admin from './Components/Admin/Admin';
import Login from './Components/Login/Login';
import UserHome from './Components/UserHome/UserHome'

import { AuthContext} from './store/FirebaseContext';
import React,{useContext,useEffect} from 'react';
import {FirebaseContext} from './store/FirebaseContext'


function App() {

  const {user,setUser}=useContext(AuthContext)
  
  
  const {FirebaseData}=useContext(FirebaseContext)
 
   
  useEffect(()=>{
    FirebaseData.auth().onAuthStateChanged((user)=>
    {
      setUser(user)
    })
 
   })


  return (
    <div className="App">
  
    <Router>

    <Route exact path='/'>
          <Home/>
      </Route>


      <Route exact path='/signup'>
          <Signupm></Signupm>
      </Route>


      <Route exact path='/admin'>
          <Admin/>
      </Route>

      <Route exact path='/login'>
        <Login/>
      </Route>

      <Route exact path='/user_home'>
       <UserHome/>
      </Route>

      </Router>

    </div>
  );
}

export default App;
