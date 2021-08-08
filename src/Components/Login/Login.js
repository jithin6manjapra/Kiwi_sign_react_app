import React,{useState,useContext} from 'react';
import { useHistory } from 'react-router-dom';
//import { FirebaseContext } from '../../Store/FirebaseContext';
import {FirebaseContext} from '../../Store/FirebaseContext'

import './Login.css';


function Login() {

    
  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')

  
  const {FirebaseData}=useContext(FirebaseContext)
  const history = useHistory()
  const handleLogin =(e)=>{
    e.preventDefault()
    

    let f=0;
    if(email==="admin@kiwisign.nz" && password==="qwerty")
    { f=0;}
    else { f=0; }
   

   

    FirebaseData.auth().signInWithEmailAndPassword(email,password).then(()=>{
       
     {f? history.push("/Admin"):history.push("/User_home")}
   
    } ).catch((error)=>{
      alert(error.message)
    })



  }




  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={process.env.PUBLIC_URL + '/Images/Logo.png'}  alt="Logo"></img>
        <form onSubmit={ handleLogin } >
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={((e)=>{setEmail(e.target.value)})}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={((e)=>{setPassword(e.target.value)})}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;