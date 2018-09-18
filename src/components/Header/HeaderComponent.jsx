import './style.css';
import React from 'react';
import { Layout } from 'antd';

import Logo from './Logo.jsx';
const { Header } = Layout;

class HeaderComponent extends React.Component{

  render(){
    return(
      <Header className="primary header">
        <Logo/>
        <a style={{ float : 'right' }} href="/signin"> {'\u00a0'} Войти</a>
        <a style={{ float : 'right' }} href="/signup"> Зарегистрироваться / </a>
      </Header>
    )
  }

}

export default HeaderComponent;



// ощущение накатывающего страха
// боязнь что сейчас повторится выброс адреналина
// заболит голова и прочее
