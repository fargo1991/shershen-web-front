import React from 'react';

import { Row, Col, Form, Input, Button } from 'antd';

import style from '../../styles';

class PasswordRestoreView extends React.Component{

  onOk = () => {

    this.props.form.validateFields( (error, fieldValues) => {



    })

  }

  render(){

    const { getFieldDecorator } = this.props.form;

    return(
      <Row>
        <Col span={8}></Col>

        <Col span={8} style={{ padding : "20px"}}>

          <Form style={style.form}>
          Восстановление пароля
            <Form.Item
              label="Введите новый пароль"
            >
              { getFieldDecorator('password', {
                rules : [ { required : true } ]
              })(
                <Input type="text"/>
              )}
            </Form.Item>
            <Form.Item
              label="Еще раз"
            >
              { getFieldDecorator('passwordConfirm', {
                rules : [ { required : true } ]
              })(
                <Input type="text"/>
              )}
            </Form.Item>
            <Button onClick={this.onOk}>Сменить пароль</Button>
          </Form>

        </Col>

        <Col span={8}></Col>
      </Row>
    )

  }

}

PasswordRestoreView = Form.create()(PasswordRestoreView)

export default PasswordRestoreView;