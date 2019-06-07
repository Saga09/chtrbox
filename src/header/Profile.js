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
            <div className="celeb--detail-wrapper">
                <div className="celeb-picture">
                    <img src="https://d31wcbk3iidrjq.cloudfront.net/IpPYvx1-B-03C8FDD3-1ED2-46E5-8329-674790F34EAB.png" className="img-responsive" />
                </div>
                <div className="celeb-detail">
                    <div className="personal--detail">
                        <h2>Paul Ben-Victor</h2>
                        <h3>Actor - The Wire</h3>
                        <p className="celeb--decs">You might know me from The Wire, Entourage, Everybody Hates Chris, The 3 Stooges and more</p>
                        <p className="celeb--form">
                            <span>Book Paul Ben-Victor for $60</span>
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
                        <span>Podcast</span>
                        <span>Comedian</span>
                        <span>Actors</span>
                        <span>Disney</span>
                        <span>TV</span>
                        <span>Media</span>
                    </div>

                </div>
            </div>
        )
    }
}

export default Header;