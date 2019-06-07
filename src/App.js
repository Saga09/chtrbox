import React from 'react';

import './App.css';

import Header from './header'
import BrandCards from './brand'

class App extends React.Component {
  render(){
    return(
        <div className="container">
          <Header />
            {/*<BrandCards />*/}
        </div>
    )
  }
}


export default App;
