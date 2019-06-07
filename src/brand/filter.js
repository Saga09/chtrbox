import React from 'react';

const filterName = [
    {'name':'Disney', 'number': '165'},
    {'name':'Actor', 'number': '205'},
    {'name':'TV', 'number': '356'},
    {'name':'YouTubers', 'number': '86'},
    {'name':'Animals', 'number': '30'},
    {'name':'Comedians', 'number': '535'},
    {'name':'Family', 'number': '222'}
];


class Filter extends React.Component{

    getFilterNames(){
        let filterXml = []

        for(let i in filterName){
            filterXml.push(
                <div className="filters-wrap" key={filterName[i].name}>
                    <p className="badge badge-light">{filterName[i].name}<span>{filterName[i].number}</span></p>
                </div>
            )
        }
        return filterXml
    }

    render(){
        return(
            <div id="left--filters">
                <h3>Categories</h3>
                <div>
                    {this.getFilterNames()}
                </div>
            </div>
        )
    }
}

export default Filter;