import React from 'react';

import { Form, Input, Row, Col, Icon, Card, Button } from 'antd'
import style from '../../styles.js';

import notice from "../notice/notice.js";

import signupCustomer from '../../api/security/registerCustomer';
import checkLoginExist from '../../api/security/checkLoginExist';
import checkMailExist from '../../api/security/checkMailExist';

class SignupComponent extends React.Component{

  comparePassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Пароль не совпадает');
    } else {
      callback();
    }
  }

  checkUserAgreement = (rule, value, callback) => {
    if(!value) callback('Подтвердите согласие')
    else callback()
  }

  checkLoginExist = (rule, value, callback) => {
    checkLoginExist(value)
      .then(
        result => { callback()}
      )
      .catch(
        error => {
          if( error.response ){
            callback("Логин уже занят")
          } else{
            callback("При выполнении запроса произошла ошибка =(")
          }
        }
      )
  }

  checkMailExist = (rule, value, callback) => {
    checkMailExist(value)
      .then(
        result => callback(),
      )
      .catch(
        error => {
          if( error.response ) {
            if (error.response.status == 404) callback();
            callback("Почтовый адрес уже занят")
          } else {
            callback("При выполнение запроса произошла ошибка =(")
          }
        }
      )
  }

  onSubmit = () => {

    notice.error("error", "top")



    this.props.form.validateFields( (err, fieldValues) => {
      if(err) return false;
      console.log("onSubmit")
      signupCustomer(fieldValues)
        .then(
          result => {
            console.log("result")
            this.props.onOk();
          }
        )
        .catch(
          error =>{
            console.log("Errror")
            alert(error)
          }
        )

    })

  }

  render(){

    const { getFieldDecorator } = this.props.form;

    return(
      <Form>
        <Card
          style={{width:450, margin : 'auto', marginTop: 50}}
          title={"Регистрация"}
          className="card"
        >
          <Form.Item>
            {
              getFieldDecorator('login', {
                rules: [
                  { required : true, message : "Укажите логин" },
                  { pattern : /^[a-z0-9_-]{5,30}$/,
                    message : "Логин может содержать символы a-z,0-9,-,_. Длина должна составлять от 5 до 30 символов" },
                  { validator : this.checkLoginExist }
                ]
              })(
                <Input type='text'  prefix={<Icon type='user'/>} placeholder="Логин" />
              )
            }
          </Form.Item>

          <Form.Item>
            {
              getFieldDecorator('email', {
                rules :[
                  { required : true, message : "Укажите почту"},
                  { type : 'email', message : "Некорректный почтовый адрес" },
                  { validator : this.checkMailExist }
                ]
              })(
                <Input type="email" prefix={<Icon type='mail'/>} placeholder="Почта"/>
              )
            }
          </Form.Item>

          <Form.Item>
            {
              getFieldDecorator('password', {
                rules : [
                  { required : true, message : "Укажите пароль" },
                  { pattern : /(?=^.{6,30}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                    message : "Длина пароля должна составлять от 6 до 30 символов. Должен содержать цифры, заглавные и прописный латинские буквы"}
                ]
              })(
                <Input type='password'  prefix={<Icon type='lock'/>} placeholder="Пароль"/>
              )
            }
          </Form.Item>

          <Form.Item>
            {
              getFieldDecorator('passwordConfirm', {
                rules : [
                  { required : true, message : "Повторите пароль" },
                  { validator : this.comparePassword}
                ]
              })(
                <Input type='password'  prefix={<Icon type='lock'/>} placeholder="Повторите пароль"/>
              )
            }
          </Form.Item>

          <Form.Item>
            {
              getFieldDecorator('userAgree', {
                rules : [
                  { type : 'boolean' },
                  { validator : this.checkUserAgreement}
                ]
              })(
                <label className={'cursor-pointer'} style={ { lineHeight : '1em'}}>
                  <input
                    type="checkbox"
                    onChange={this.handleCheck}
                    defaultChecked={false}
                    style={{ marginTop: 5, position : 'relative', float : 'left'}}
                  />
                  <p style={ { lineHeight : "1.5em", width : 350, float : 'left'}}>{'\u00a0\u00a0'}Регистрируясь, вы подтверждаете, что прочитали <a className="secondary-color underlined" target="_blank" href='/shershen_order'><b>пользовательское соглашение</b></a> и принимаете его.</p>
                </label>
              )
            }
          </Form.Item>

            <Button
              className="primary button"
              type='primary'
              style={{width: '100%', fontSize: 25, lineHeight: '50px', height: 60}}
              onClick={this.onSubmit}
            >
              Зарегистрироваться
            </Button>
        </Card>
      </Form>
    )
  }

}

SignupComponent = Form.create()(SignupComponent)

export default SignupComponent