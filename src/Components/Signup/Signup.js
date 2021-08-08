import React,{useState} from 'react';
import './Signup.css';
import { FirebaseData } from '../../Firebase/Config';
import { useHistory } from 'react-router-dom';

export default function Signup() {


const history = useHistory()
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = (e)=>{
  e.preventDefault()
  FirebaseData.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
    console.log("fg")

    result.user.updateProfile({displayName:username}).then(()=>{

   
      FirebaseData.firestore().collection('user').add({
        id:result.user.uid,
        username:username,
        phone:phone
      }).then(()=>
      {
          history.push("/login")
        })
      }
      )
    })

  }
    
  


  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={process.env.PUBLIC_URL + '/Images/Logo.png'}  alt="Logo"></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={username}
            onChange={((e)=>setUsername(e.target.value))}
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={((e)=>setEmail(e.target.value))}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}
            onChange={((e)=>setPhone(e.target.value))}
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={((e)=>setPassword(e.target.value))}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}