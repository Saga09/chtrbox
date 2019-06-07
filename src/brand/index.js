import React from 'react';

import Filter from './filter'
import Card from './card'
import $ from 'jquery';

class BrandCards extends React.Component{

    constructor(props){
        super(props)
    }
    componentDidMount(){
        $(".shuffleJs").on("click", function(){
            $(".shuffleJs").removeClass('active');
            $(this).addClass('active');
            let dataGroup = $(this).attr('id');
            window.shuffleInstance.filter(dataGroup);
        });
    }

    render(){
        return(
            <div id="cardWrapper" className="row">
                <Filter />
                <Card />
            </div>
        )
    }
}

export default BrandCards;