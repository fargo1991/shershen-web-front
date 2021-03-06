/**
 * Created by yaroslav on 07.09.18.
 */

import HomeView from '../views/Home/HomeView.jsx';
import SigninView from '../views/Signin/SigninView.jsx';
import SignupView from '../views/Signup/SignupView.jsx';

import PasswordRestoreView from '../views/UserProfile/PasswordRestoreView.jsx';

import ShershenOrder from '../views/Pages/ShershenOrder.jsx';

export default [
  { path : '/', component : HomeView, exact : true },
  { path : '/home', component : HomeView, exact : true },
  { path : '/signin', component : SigninView },
  { path : '/signup', component : SignupView },

  { path : '/password/restore', component : PasswordRestoreView },

  { path : '/shershen_order', component : ShershenOrder }
]