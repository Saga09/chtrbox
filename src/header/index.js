import React from 'react';

// require('bootstrap-material-design')

class Header extends React.Component{
    render(){
        return(
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Search</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Signup</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Login</a>
                </li>
            </ul>
        )
    }
}

export default Header;