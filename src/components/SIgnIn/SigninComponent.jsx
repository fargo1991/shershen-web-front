import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { authorizeUser } from "../../actions/userAction";

import { Form, Input, Row, Col, Button, Icon, Card } from 'antd'
import style from '../../styles.js';

class SigninComponent extends React.Component{

  authorizeRequest = new Promise( (resolve, reject) => {

    var timer = setTimeout( ()=> { resolve(true) }, 1000 );

  })

  onOk = () => {
    authorizeUser()
      .then(
        result=>{
          this.props.authorizeUser();
        }
      )
  }

  render(){

    const { getFieldDecorator } = this.props.form;

    return(
      <Card
        style={{width:450, margin : 'auto', marginTop: 50}}
        title={"Авторизация"}
        className="card"
      >
        <div>
          <p style={{fontSize:14}}>Авторизуйтесь, чтобы получить доступ к Вашей учетной записи</p>

          <Input type='text'  prefix={<Icon type='user'/>} placeholder="Логин" />
          <br/><br/>

          <Input type='password'  prefix={<Icon type='lock'/>} placeholder="Пароль"/>

          <br/>
          <br/>

          <Button
            className="primary button"
            type='primary'
            style={{width: '100%', fontSize: 25, lineHeight: '50px', height: 60}}
            onClick={this.onSubmit}
          >
            Войти
          </Button>

          <br/>
          <br/>

          <a className="link secondary" href="/">Забыли пароль?</a>
          <Button className="button secondary" style={{ float : 'right'}}><a href="/signup">Регистрация</a></Button>
        </div>
      </Card>
    )
  }
}

SigninComponent = Form.create()(SigninComponent)

function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch){
  return {
    authorizeUser : bindActionCreators(authorizeUser, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninComponent)