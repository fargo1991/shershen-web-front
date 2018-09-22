import React from 'react';
import Signup from '../../components/Signup/SignupComponent';
import SignupSuccess from '../../components/Signup/SignupSuccess';

const steps = ['signinig', 'registred', 'smsConfirmarion', 'phoneConfirmed']

class SignupView extends React.Component{

  state={
    step : 'registration' // 'phoneConfirmation'
  }

  handleRegistred = () => {
    this.setState({ step : 'phoneConfirmation'})
  }

  handleError = () => {

  }

  render(){

    switch (this.state.step){

      case 'registration' : {
        return(
          <div>
            <Signup
              onOk={this.handleRegistred}
              onError={this.handleError}
            />
          </div>
        )
      } break;

      case 'phoneConfirmation' : {
        return(
          <div>
            <SignupSuccess
              onOk={this.handleRegistred}
              onError={this.handleError}
            />
          </div>
        )
      }

      default :
      return(
        <div>
          <Signup
            onOk={this.handleRegistred}
            onError={this.handleError}
          />
        </div>
      )
    }
  }

}

export default SignupView;