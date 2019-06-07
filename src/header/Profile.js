import React from 'react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import Profile from './Profile'

// require('bootstrap-material-design')

class Header extends React.Component{
    render(){
        return(
            <div>
                <HashRouter>
                        <Switch>
                            <Route path="/dashboard/:activeTab?" component={Profile}/>
                            <Redirect to="/dashboard"/>
                        </Switch>
                </HashRouter>
            </div>
        )
    }
}

export default Header;