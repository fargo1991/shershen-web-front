import React from 'react';

import { Card, Button, Form, Input } from 'antd';
import MaskedInput from 'react-text-mask'

class SignupSuccess extends React.Component{

  checkPhoneExist = (rule, value, callback) => {

    callback(value)

  }

  render(){

    const { getFieldDecorator } = this.props.form;

    return(
      <Card
        style={{width:450, margin : 'auto', marginTop: 50}}
        title={"Осталось еще номного... =)"}
        className="card"
      >
        <p>Ура!</p>
        <p>Регистрация прошла успешно, но осталось еще совсем немного.</p>
        <p>На ващу почту выслано письмо с ссылкой для подтверждения.</p>
        <p>Привяжите свой номер телефона, так вы сможете защитить свою учетную запись от мошенников:</p>

        <p>
          <Form>
            <Form.Item>
              <Input.Group compact>
                <Input type="text" disabled style={{width : 40}} placeholder="+7"/>
                {
                  getFieldDecorator('phone',{
                    rules : [
                      { required : true, message : "Необходимо указать номер телефона" },
                      { validator : this.checkPhoneExist}
                    ]
                  })(
                    <MaskedInput className="ant-input"
                                 style={{ width : 200}}
                                 placeholder="(919) 000-0000"
                                 mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                                 type="text"/>
                  )
                }
                <Input type="submit" className="primary" style={{width:125}} value="Отправить смс"/>
              </Input.Group>
            </Form.Item>
          </Form>
        </p>

        <p style={{ float : 'right'} }>
          <Button className="button secondary"><a href="/">Пропустить</a></Button>
          <Button className="button primary" style={{disabled:"disabled"}}> Подтвердить</Button></p>

      </Card>
    )

  }

}

SignupSuccess = Form.create()(SignupSuccess);

export default SignupSuccess