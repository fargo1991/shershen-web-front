import React from 'react';

import Signin from '../../components/SIgnIn/SigninComponent';
import SigninSuccess from '../../components/Signup/SignupSuccess';

class SigninView extends React.Component{

  state={
    step : 'registration' // 'phoneConfirmation'
  }

  handleRegister = () => {

    this.setState({ step : 'phoneConfirmation'})

  }

  handleError = () => {

  }

  render(){

    switch (this.state.step){

      case 'registration' : {
        return(
          <Signin
            onOk={this.handleRegister}
            onError={this.handleError}
          />
        )
      } break;

      case 'phoneConfirmation' : {
        return (
          <SigninSuccess/>
        )
      } break;

      default: {
        return (
          <Signin
            onOk={this.handleRegister}
            onError={this.handleError}
          />
        )
      };

    }


  }

}

export default SigninView;