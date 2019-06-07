import React from 'react';
import Profiles from '../profiles.json';
import {Redirect} from 'react-router-dom';

// require('bootstrap-material-design')

class Header extends React.Component{


    safeReturn(object,index,defaultValue)
    {
        defaultValue = defaultValue == undefined ? false : defaultValue;
        if(object == undefined || index == undefined)
        {
            return defaultValue;
        }
        if(object[index] == undefined || object[index] === '')
        {
            return defaultValue;
        }
        return object[index];
    }

    userDetails()
    {
        let id = this.safeReturn(this.props.match.params, 'id', '');
        if(id == '')
        {
            return this.redirectToBrand();
        }
        let userProfiles = Profiles.users;
        let user = this.safeReturn(userProfiles,id,false);
        if(user == false)
        {
            return this.redirectToBrand();
        }
        return user;
    }

    redirectToBrand()
    {
        return <Redirect push to="/brand"/>;
    }
    render(){

       let userDetails = this.userDetails();
        console.log("userDetails",userDetails);
        return(
            <div>
                <p>Yanshul</p>
            </div>
        )
    }
}

export default Header;