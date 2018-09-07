import './style.css'
import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;


class FooterComponent extends React.Component{

  render(){
    return(
      <Footer className="footer">
        Footer
      </Footer>
    )
  }

}


export default FooterComponent;