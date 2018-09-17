import React from 'react';

import { Form, Input, Row, Col, Icon } from 'antd'
import style from '../../styles.js';

class SignupComponent extends React.Component{

  render(){

    const { getFieldDecorator } = this.props.form;

    return(
      <Row>
        <Col span={8}></Col>
        <Col span={8} style={{ padding : "20px"}}>
          <Form style={style.form}>
            <Form.Item
              label="Логин"
            >
              { getFieldDecorator('login', {
                required : true
              })(
                <Input type="text"/>
              )}
            </Form.Item>

            <Form.Item
              label="Пароль"
            >
              { getFieldDecorator('password', {
                required : true
              })(
                <Input type="password"/>
              )}
            </Form.Item>

            <Form.Item
              label="Повторите пароль"
            >
              { getFieldDecorator('passwordRepeat', {
                required : true
              })(
                <Input type="password"/>
              )}
            </Form.Item>

            <Form.Item
              label="E-mail"
            >
              { getFieldDecorator('email', {
                required : true
              })(
                <Input type="email"/>
              )}
            </Form.Item>

            <Form.Item
              label="Телефон"
            >
              { getFieldDecorator('phone', {
                required : true
              })(
                <Input type="text"/>
              )}
            </Form.Item>
          </Form>
        </Col>
        <Col span={8}></Col>
      </Row>
    )
  }

}

SignupComponent = Form.create()(SignupComponent)

export default SignupComponent