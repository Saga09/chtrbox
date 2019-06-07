import React from 'react';
import Profiles from '../profiles.json';

const cardDetail = [
    {'name':'Stephen Kramer Glickman', 'type': 'Comedian - Actor - Podcaster', 'url': 'https://d31wcbk3iidrjq.cloudfront.net/avatar-s2FSIyKyi.jpg'},
    {'name':'Stephen Kramer Glickman', 'type': 'Comedian - Actor - Podcaster', 'url': 'https://d31wcbk3iidrjq.cloudfront.net/avatar-s2FSIyKyi.jpg'},
    {'name':'Stephen Kramer Glickman', 'type': 'Comedian - Actor - Podcaster', 'url': 'https://d31wcbk3iidrjq.cloudfront.net/avatar-s2FSIyKyi.jpg'},
    {'name':'Stephen Kramer Glickman', 'type': 'Comedian - Actor - Podcaster', 'url': 'https://d31wcbk3iidrjq.cloudfront.net/avatar-s2FSIyKyi.jpg'},
    {'name':'Stephen Kramer Glickman', 'type': 'Comedian - Actor - Podcaster', 'url': 'https://d31wcbk3iidrjq.cloudfront.net/avatar-s2FSIyKyi.jpg'}
];


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

    getCardDetail(){
        let cardXml = []

        let userprofiles = Profiles.users;

        for(let i in userprofiles){

            let imageUrl = this.safeReturn(userprofiles[i],'imageUrl','');
            let name = this.safeReturn(userprofiles[i],'name','');
            let type = this.safeReturn(userprofiles[i],'profession','profession');
            if(imageUrl == '')
            {
                continue;
            }
            cardXml.push(
                <div className="card-wrap col-md-4" key={i}>
                    <img src={imageUrl} className="" />
                    <h3>{name}</h3>
                    <p className="">{type}</p>
                </div>
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