import React from 'react';
import DrawerNav from './components/drawerNav';
import {createAppContainer,createSwitchNavigator} from "react-navigation"
import SignIn from "./screens/signIn"

export default class App extends React.Component {
  render(){
  return (
   <AppContainer/>
  );
  }
}

var SwitchNav= createSwitchNavigator({
  SignIn:SignIn,
  DrawerNav:DrawerNav
})

var AppContainer=createAppContainer(SwitchNav)