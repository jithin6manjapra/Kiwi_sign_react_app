import React,{useContext} from 'react'
import './Header.css'
import Button from '@material-ui/core/Button';
import { AuthContext, FirebaseContext } from '../../store/FirebaseContext';
import { useHistory } from 'react-router-dom';

function Header() {
const {user}=useContext(AuthContext)
  const {FirebaseData}= useContext(FirebaseContext)
  const history = useHistory()
  console.log(user.displayName)
    return (
        <div className="header">
             <img  className="logo" src={process.env.PUBLIC_URL + '/Images/Logo.png'}  alt="Logo"/>
            <Button  style={{position:"fixed", width:"20px",right:"60px",top:"24px", borderRadius: "40px", backgroundColor: "#3C2244",color:"white",fontSize: "10px" }}
            variant="contained" > Signup </Button>
        
        <img  className="avatar"   src={process.env.PUBLIC_URL + '/Images/Avatar.png'}  alt="Logo"/>
       
        <span>{user ? user.displayName :'Login'}</span>
        { user && <span onClick={()=>{
          FirebaseData.auth().signOut();
          history.push('/login')
        }}>Logout</span>}
       
        
        </div>
    )
}

export default Header
