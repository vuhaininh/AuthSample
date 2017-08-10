import React,{Component} from 'react';
import '../styles/main.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './header';
import Signin from './auth/signin';
import Signout from './auth/signout';
import Signup from './auth/signup';
import { Route } from 'react-router-dom';
export default class App extends Component{
  render(){
    return(
      <div>
        <Header />
        <Route path="/signin" component={Signin}/>
        <Route path="/signout" component={Signout}/>
        <Route path="/signup" component={Signup}/>
      </div>

    );
  };
}
