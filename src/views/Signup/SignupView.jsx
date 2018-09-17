import React from 'react';
import Signup from '../../components/Signup/SignupComponent';

const steps = ['signinig', 'registred', 'smsConfirmarion', 'phoneConfirmed']

class SignupView extends React.Component{

  state={
    step : false
  }

  render(){

    return(
      <div>
        <Signup/>
      </div>
    )
  }

}

export default Signup;