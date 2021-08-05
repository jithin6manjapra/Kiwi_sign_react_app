import React from 'react'
import './Header.css'
import Button from '@material-ui/core/Button';

function Header() {
    return (
        <div className="header">
             <img  className="logo" src={process.env.PUBLIC_URL + '/Images/Logo.png'}  alt="Logo"/>
             <Button  style={{position:"fixed", width:"20px",right:"60px",top:"24px", borderRadius: "40px", backgroundColor: "#3C2244",color:"white",fontSize: "10px" }}
            variant="contained" > Signup </Button>
        
        <img  className="avatar"   src={process.env.PUBLIC_URL + '/Images/Avatar.png'}  alt="Logo"/>
        </div>
    )
}

export default Header
