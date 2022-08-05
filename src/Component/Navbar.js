import React from "react";
import {Link}from "react-router-dom";
function Navbar(){
    return(
    <nav>
    <div className="nav-wrapper ">
    <a href="/" className="left brand-logo"><img  style = {{height : "65px"}} src = "./CD_L.png" alt=" "/></a>
      <ul id="nav-mobile" className="right ">
        <li><Link to="/user/login"><p style={{
          'fontSize':'1.2rem',
          'fontFamily':'sans-serif'
          
        }}>Log In</p></Link></li>
        <li><Link to="/user/register"><p style={{
         'fontSize':'1.2rem',
         'fontFamily':'sans-serif'
        }}>Sign Up</p></Link></li>
        <li><Link to="/user/addcollege"><p style={{
         'fontSize':'1.2rem',
         'fontFamily':'sans-serif'
        }}>Clg Registration</p></Link></li>
      </ul>
    </div>
    </nav>
    )
}
export default Navbar;