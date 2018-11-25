import React  from 'react';
import  {NavLink} from 'react-router-dom'


const SignedOutLinks = ()=>{


    return(
        <ul className="right">
            <li><NavLink to="/siginup">Sign Up</NavLink></li>
            <li><NavLink to="/sigin">Log in</NavLink></li>
        </ul>
    )

}
export  default SignedOutLinks;