import React,{useContext} from 'react'
import './Header.css'
import Button from '@material-ui/core/Button';
import { AuthContext } from '../../store/FirebaseContext';


function Header() {
    const {user}=useContext(AuthContext)
  //const {firebase}= useContext(FirebaseContext)
    return (
        <div className="header">
             <img  className="logo" src={process.env.PUBLIC_URL + '/Images/Logo.png'}  alt="Logo"/>
            <Button  style={{position:"fixed", width:"20px",right:"60px",top:"24px", borderRadius: "40px", backgroundColor: "#3C2244",color:"white",fontSize: "10px" }}
            variant="contained" > Signup </Button>
        
        <img  className="avatar"   src={process.env.PUBLIC_URL + '/Images/Avatar.png'}  alt="Logo"/>
        <span>{user ? user.displayName :'Login'}</span>
        </div>
    )
}

export default Header
