import React from 'react';

const cardDetail = [
    {'name':'Stephen Kramer Glickman', 'type': 'Comedian - Actor - Podcaster', 'url': 'https://d31wcbk3iidrjq.cloudfront.net/avatar-s2FSIyKyi.jpg'},
    {'name':'Stephen Kramer Glickman', 'type': 'Comedian - Actor - Podcaster', 'url': 'https://d31wcbk3iidrjq.cloudfront.net/avatar-s2FSIyKyi.jpg'},
    {'name':'Stephen Kramer Glickman', 'type': 'Comedian - Actor - Podcaster', 'url': 'https://d31wcbk3iidrjq.cloudfront.net/avatar-s2FSIyKyi.jpg'},
    {'name':'Stephen Kramer Glickman', 'type': 'Comedian - Actor - Podcaster', 'url': 'https://d31wcbk3iidrjq.cloudfront.net/avatar-s2FSIyKyi.jpg'},
    {'name':'Stephen Kramer Glickman', 'type': 'Comedian - Actor - Podcaster', 'url': 'https://d31wcbk3iidrjq.cloudfront.net/avatar-s2FSIyKyi.jpg'}
];


class Card extends React.Component{

    getCardDetail(){
        let cardXml = []

        for(let i in cardDetail){
            cardXml.push(
                <div className="card-wrap col-md-4" key={cardDetail[i].name}>
                    <img src={cardDetail[i].url} className="" />
                    <h3>{cardDetail[i].name}</h3>
                    <p className="">{cardDetail[i].type}</p>
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