import './style.css';
import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { Layout } from 'antd';

import Logo from './Logo.jsx';
const { Header } = Layout;

class HeaderComponent extends React.Component{

  render(){

    console.log(this.props)

    return(
      <Header className="primary header">
        <Logo/>
        {
          this.props.user.authorized ?
            <div style={{ float : 'right' }}>{this.props.user.name}</div> :
            <div style={{ float : 'right' }}>
              <a style={{ float : 'right' }} href="/signin"> {'\u00a0'} Войти</a>
              <a style={{ float : 'right' }} href="/signup"> Зарегистрироваться / </a>
            </div>
        }

      </Header>
    )
  }

}

function mapStateToProps(state){
  return {
    user : state.user
  }
}

function mapDispatchToProps(dispatch){
  return {

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderComponent));

