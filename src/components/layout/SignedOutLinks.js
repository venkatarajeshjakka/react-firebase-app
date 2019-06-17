import React, { Component }from 'react'
import { NavLink } from 'react-router-dom'
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";


class SignedOutLinks extends Component
{
    componentDidMount()
    {
        var elem = document.querySelector('.sidenav');
        var instance = M.Sidenav.init(elem, {
            edge: "left"
            
        });
    }
    render()
    {
        return(
           
            <div>
            <ul className="right hide-on-med-and-down">
                <li>
                    <NavLink to='/signup'>SignUp</NavLink>
                    </li>
                    <li>
                    <NavLink to='/signin'>Log In</NavLink>
                    </li>
            </ul>
            
            <ul id="slide-out" className="sidenav">
                 <li><a className="sidenav-close" href="#!"><i className="material-icons icon-close">close</i></a></li>
              <li>
                <div className="user-view">
    
                </div>
            </li>
                <li>
                    <NavLink to='/signup' className="sidenav-close">SignUp</NavLink>
                    </li>
                    <li>
                    <NavLink to='/signin' className="sidenav-close">Log In</NavLink>
                    </li>
                </ul>
            <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
        )
    }

    
}

export default SignedOutLinks;