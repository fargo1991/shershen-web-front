import React from 'react';

import { Row, Col, Form, Input } from 'antd';

class SearchBox extends React.Component{

  render(){

    return(
      <Form>
        <Input.Search
          placeholder="Что вас интересует?"
          size="large"
          enterButton="Найти"
          classname="primary"
        />
      </Form>
    )

  }

}

export default SearchBox;