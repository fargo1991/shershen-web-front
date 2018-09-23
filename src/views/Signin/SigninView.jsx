import React from 'react';

import CONFIG from '../../api/config';

import Signin from '../../components/SIgnIn/SigninComponent';
import notice from '../../components/notice/notice.js';

class SigninView extends React.Component{

  state={
    step : 'registration' // 'phoneConfirmation'
  }

  redirectToHome = () => {
   window.location = CONFIG.SELF_HOST_URL;
  }

  handleError = () => {
    notice.error("Неверный логин или пароль","top","Ошибка авторизации")
  }

  render(){
    return(
      <Signin
        onOk={this.redirectToHome}
        onError={this.handleError}
      />
    )
  }

}

export default SigninView;