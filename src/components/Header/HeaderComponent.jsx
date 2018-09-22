import './style.css';
import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Layout } from 'antd';

import Logo from './Logo.jsx';
const { Header } = Layout;

class HeaderComponent extends React.Component{

  render(){

    console.log(this.props)

    return(
      <Header className="primary header">
        <Logo/>
        <a style={{ float : 'right' }} href="/signin"> {'\u00a0'} Войти</a>
        <a style={{ float : 'right' }} href="/signup"> Зарегистрироваться / </a>
      </Header>
    )
  }

}

function mapStateToProps(state){
  console.log(state)

  return {
    // authorized : state.user.authorized
  }
}

function mapDispatchToProps(dispatch){
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);



// ощущение накатывающего страха
// боязнь что сейчас повторится выброс адреналина
// заболит голова и прочее
