import './style.css';
import React from 'react';
import { Layout } from 'antd';
const { Header } = Layout;

class HeaderComponent extends React.Component{

  render(){
    return(
      <Header className="header">
        <a href="/signin">SignIn</a> /
        <a href="/signup"> SignUp</a>
      </Header>
    )
  }

}


export default HeaderComponent;