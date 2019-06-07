import React from 'react';

import $ from 'jquery'

const cardDetail = [
    {'name':'Stephen Kramer Glickman', 'type': 'Comedian - Actor - Podcaster', 'url': 'https://d31wcbk3iidrjq.cloudfront.net/avatar-s2FSIyKyi.jpg'},
    {'name':'Stephen Kramer Glickman', 'type': 'Comedian - Actor - Podcaster', 'url': 'https://d31wcbk3iidrjq.cloudfront.net/avatar-s2FSIyKyi.jpg'},
    {'name':'Stephen Kramer Glickman', 'type': 'Comedian - Actor - Podcaster', 'url': 'https://d31wcbk3iidrjq.cloudfront.net/avatar-s2FSIyKyi.jpg'},
    {'name':'Stephen Kramer Glickman', 'type': 'Comedian - Actor - Podcaster', 'url': 'https://d31wcbk3iidrjq.cloudfront.net/avatar-s2FSIyKyi.jpg'},
    {'name':'Stephen Kramer Glickman', 'type': 'Comedian - Actor - Podcaster', 'url': 'https://d31wcbk3iidrjq.cloudfront.net/avatar-s2FSIyKyi.jpg'}
];


class Card extends React.Component{

    componentDidMount(){
        // $('.material-card > .mc-btn-action').click(function () {
        //     let card = $(this).parent('.material-card');
        //     let icon = $(this).children('i');
        //     icon.addClass('fa-spin-fast');
        //
        //     if (card.hasClass('mc-active')) {
        //         card.removeClass('mc-active');
        //
        //         window.setTimeout(function() {
        //             icon
        //                 .removeClass('fa-arrow-left')
        //                 .removeClass('fa-spin-fast')
        //                 .addClass('fa-bars');
        //
        //         }, 800);
        //     } else {
        //         card.addClass('mc-active');
        //
        //         window.setTimeout(function() {
        //             icon
        //                 .removeClass('fa-bars')
        //                 .removeClass('fa-spin-fast')
        //                 .addClass('fa-arrow-left');
        //
        //         }, 800);
        //     }
        // });
    }
    getCardDetail(){
        let cardXml = []

        for(let i in cardDetail){
            cardXml.push(
                <div>
                <div className="card-wrap col-md-4 col-sm-6 col-xs-12" key={cardDetail[i].name}>
                    <article className="material-card Red">
                        <h2>
                        <span>{cardDetail[i].name}</span>
                        <strong>
                            <i class="fa fa-fw fa-star"></i>
                            {cardDetail[i].type}
                        </strong>
                    </h2>
                        <div className="mc-content">
                            <div className="img-container">
                                <img className="img-responsive"
                                     src={cardDetail[i].url} />
                            </div>

                        </div>
                        <a className="mc-btn-action">
                            &#8377; 120
                        </a>

                    </article>
                </div>


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