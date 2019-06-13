import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLink'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
const Navbar = (props) =>
{
    const { authValue, profile } = props;
    const links = authValue.uid ?  <SignedInLinks profile={profile} /> : <SignedOutLinks />;

    return(
        <nav className="nav-wapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">
                m-Unicorn
                </Link>
                { links }
            </div>
        </nav>
    )
}

const mapStateToProps = (state) =>
{
   return {
       authValue: state.firebase.auth,
       profile: state.firebase.profile
   }
}
    

export default connect(mapStateToProps) (Navbar);