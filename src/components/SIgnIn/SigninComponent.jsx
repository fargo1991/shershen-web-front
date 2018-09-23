import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Redirect } from 'react-router-dom'

import CONFIG from '../../api/config.js';

import { userAuthorized } from "../../actions/userAction";
import authorizeUser from '../../api/security/authCustomer';

import { Form, Input, Row, Col, Button, Icon, Card } from 'antd'

import notice from '../notice/notice';
import messages from '../../dictionary/messages';

import style from '../../styles.js';

class SigninComponent extends React.Component{

  state = {
    redirectToHome : false
  }

  authorizeRequest = new Promise( (resolve, reject) => {

    var timer = setTimeout( () => { resolve(true) }, 1000 );

  })

  onOk = () => {

    this.props.form.validateFields( (err, fieldsValue) => {
      if (err){
        return false
      }

      authorizeUser(fieldsValue)
        .then(
          result=>{
            this.props.userAuthorized(result.data.obj);

            this.setState({ redirectToHome : true })
          },
          error => {
            if(!error.response) { notice.error(messages.NO_CONNECTION.msg, "top", messages.NO_CONNECTION.title); return false}
            if(error.response.status == "400")  notice.error(messages.BAD_REQUEST.msg, "top", messages.BAD_REQUEST.title)
            if(error.response.status == "401")  notice.error("Неверные логин и пароль", "top", "Пользователь не авторизован")
          }
        )
        .catch(
          error => {
            notice.error(messages.SOMETHING_WRONG.msg, "top", messages.SOMETHING_WRONG.title);
            console.log(error)
          }
        )
    })

  }

  render(){

    const { getFieldDecorator } = this.props.form;

    if (this.state.redirectToHome) return <Redirect to="/home"/>

    return(
      <Card
        style={{width:450, margin : 'auto', marginTop: 50}}
        title={"Авторизация"}
        className="card"
      >
        <Form>
          <p style={{fontSize:14}}>Авторизуйтесь, чтобы получить доступ к Вашей учетной записи</p>

          <Form.Item>
            { getFieldDecorator('login', {
              rules : [
                { required : true, message : "Укажите логин "}
              ]
            })(
              <Input type='text'  prefix={<Icon type='user'/>} placeholder="Логин" />
            )}
          </Form.Item>

          <Form.Item>
            { getFieldDecorator('password', {
              rules : [ { required : true }]
            })(
              <Input type='password'  prefix={<Icon type='lock'/>} placeholder="Пароль"/>
            )
            }
          </Form.Item>

          <Button
            className="primary button"
            type='primary'
            style={{width: '100%', fontSize: 25, lineHeight: '50px', height: 60}}
            onClick={this.onOk}
          >
            Войти
          </Button>

          <br/>
          <br/>

          <a className="link secondary" href="/">Забыли пароль?</a>
          <Button className="button secondary" style={{ float : 'right'}}><a href="/signup">Регистрация</a></Button>
        </Form>
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
    userAuthorized : bindActionCreators(userAuthorized, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SigninComponent))