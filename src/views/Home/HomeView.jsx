import './homeViewStyle.css';

import React from 'react';

import SearchBar from './SearchBar';
import PromoCards from './PromoCards';

class HomeView extends React.Component{

  render(){

    return(
      <div className="home-content">
        <p className="home-hello-slogan dark-color"><span className="logo-name secondary-color">Шершень</span> знает, где быстрее</p>
        <SearchBar/>
        <br/>
        <br/>
        <br/>
        <PromoCards/>
      </div>
    )
  }
}

export default HomeView