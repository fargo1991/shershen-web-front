import './style.css'
import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;


class FooterComponent extends React.Component{

  render(){
    return(
      <Footer className="footer secondary">
        <p style={{textAlign : 'center', margin : 'auto'}}>SherShern International LLC (c)</p>
      </Footer>
    )
  }

}


export default FooterComponent;