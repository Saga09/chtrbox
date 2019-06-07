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
    reachCountToObject(reach)
    {
        var returnObject = {};
        reach = parseInt(reach);
        returnObject['count'] = reach;
        returnObject['unit'] = '';
        if(reach < 1000)
        {
            return returnObject;
        }
        else if (reach < 1000000)
        {
            returnObject['count'] = parseFloat(reach/1000).toFixed(0);
            returnObject['unit'] = 'k';
        }
        else if (reach < 1000000000)
        {
            returnObject['count'] = parseFloat(reach/1000000).toFixed(0);
            returnObject['unit'] = 'm';
        }
        else if (reach < 1000000000000)
        {
            returnObject['count'] = parseFloat(reach/1000000000).toFixed(0);
            returnObject['unit'] = 'b';
        }
        return returnObject;
    }

    getCategories(userDetails)
    {
        let categories = this.safeReturn(userDetails,'categories',[]);
        let categoryXml = [];
        for(let i in categories)
        {
            console.log("categories",categories[i]);
            let category = this.safeReturn(categories[i],'name','');
            categoryXml.push(<span key ={i}>{category}</span>)
        }
        return categoryXml;
    }
    render(){

       let userDetails = this.userDetails();
        console.log("userDetails",userDetails);
        let imageUrl = this.safeReturn(userDetails,'imageUrl','');
        let name = this.safeReturn(userDetails,'name','');
        let profession = this.safeReturn(userDetails,'profession','');
        let price = this.reachCountToObject(this.safeReturn(userDetails,'price',0));
        let bio = this.safeReturn(userDetails,'bio','');
        let categoryXml = this.getCategories(userDetails);
        price = price['count'] + price['unit'];
        return(
            <div className="celeb--detail-wrapper">
                <div className="col-md-4 col-sm-4 col-xs-4 celeb-picture">
                    <img src="https://d31wcbk3iidrjq.cloudfront.net/IpPYvx1-B-03C8FDD3-1ED2-46E5-8329-674790F34EAB.png" className="img-responsive" />
                </div>
                <div className="col-md-8 col-sm-8 col-xs-8 celeb-detail">
                    <div className="personal--detail">
                        <h2>{name}</h2>
                        <h3>{profession}</h3>
                        <p className="celeb--decs">{bio}</p>
                        <p className="celeb--form">
                            <span>Book {name} for {price}</span>
                        </p>
                    </div>
                    <div className="celeb-review">
                        <div className="col-sm-4">
                            <p>1 Review</p>
                            <div className="celeb-rating">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                            </div>

                            <p><span>See all reviews</span></p>
                        </div>
                        <div className="col-sm-8">
                            <p>"Thank you SO much! Noel loved this more than words can say. This was perfect!"</p>
                        </div>
                    </div>
                    <div className="celeb-batch">
                        {categoryXml}
                    </div>

                </div>
            </div>
        )
    }
}

export default Header;