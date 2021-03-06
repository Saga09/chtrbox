import React from 'react';
import Profiles from '../profiles.json';
import {NavLink} from 'react-router-dom';
import $ from 'jquery'

class Card extends React.Component{

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

    componentDidMount(){

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
    getCardDetail(){
        let cardXml = []

         let userprofiles = Profiles.users;
       // let userprofiles = [];

        for(let i in userprofiles){
            let imageUrl = this.safeReturn(userprofiles[i],'imageUrl','');
            let name = this.safeReturn(userprofiles[i],'name','');
            let type = this.safeReturn(userprofiles[i],'profession','');
            let price = this.reachCountToObject(this.safeReturn(userprofiles[i],'price',0));
            price = price['count'] + price['unit'];
            if(imageUrl == '')
            {
                continue;
            }
            let navigateTo = '/dashboard/'+ i;
            cardXml.push(
                <NavLink to={navigateTo}>
                <div>
                <div className="card-wrap col-md-4 col-sm-6 col-xs-12" key={i}>
                    <article className="material-card Red">
                        <h2>
                        <span>{name}</span>
                        <strong>
                            <i class="fa fa-fw fa-star"></i>
                            {type}
                        </strong>
                    </h2>
                        <div className="mc-content">
                            <div className="img-container">
                                <img className="img-responsive"
                                     src={imageUrl} />
                            </div>

                        </div>
                        <a className="mc-btn-action">
                            &#8377; {price}
                        </a>

                    </article>
                </div>


                </div>
                </NavLink>


            )
        }
        return cardXml
    }

    render(){
        return(
            <div id="right--card" className="row">
                {this.getCardDetail()}
            </div>
        )
    }
}

export default Card;