import React from 'react'
import PropTypes from 'prop-types';
import logo from '../MyComponents/1.jpg';
 
const propTypes={
    home:PropTypes.bool,
    work:PropTypes.bool,
    contact:PropTypes.bool,
    account:PropTypes.bool
};
const defaultProps = {
    home:false,
    work:false,
    contact:false,
    account:false
};

function Header(props) {
    return (
        <div   >
     <nav className="navbar navbar-expand-lg navbar-dark"   >
        <div className="container-fluid">
          <a className="navbar-brand manish2" href="/"> <img  src="/img/navlogo.svg" alt=""/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 manish">
              <li className="nav-item">
                {props.home ?  <a  className="nav-link active" aria-current="page" href="/">HOME</a> : <a  className="nav-link" aria-current="page" href="/">HOME</a> }   
              </li>
              <li className="nav-item">
                  {props.work?  <a className="nav-link active" href="/work">HOW IT WORKS</a> :  <a className="nav-link" href="/work">HOW IT WORKS</a> }
               
              </li>
              <li className="nav-item">
               {props.contact?  <a className="nav-link active" href="/contact">CONTACT</a>: <a className="nav-link" href="/contact">CONTACT</a>}
              </li>
              {/* <li className="nav-item">
              {props.account?  <a className="nav-link active" href="/login">MY ACCOUNT</a>:   <a className="nav-link" href="/login">MY ACCOUNT</a>}
              </li> */}
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li> */}
            </ul>
      
          </div>
        </div>
      </nav>
        </div>
    )
}
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
export default Header;
