import React from 'react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import Profile from './Profile'
import BrandCards from '../brand/index';
// require('bootstrap-material-design')

class Header extends React.Component{
    render(){
        return(
            <div>
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
                <HashRouter>
                        <Switch>
                            <Route path="/dashboard/:id?" component={Profile}/>
                            <Route path="/brand/" component={BrandCards}/>
                            <Redirect to="/brand"/>
                        </Switch>
                </HashRouter>


            </div>
        )
    }
}

export default Header;