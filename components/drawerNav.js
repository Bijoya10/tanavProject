import React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer"
import {NavigationContainer} from "@react-navigation/native"
import AddFriend from "../screens/addFriend"
import Requests from '../screens/requestScreens';
import Friends from '../screens/friendList';
import Profile from '../screens/profile';
import LogOut from '../screens/logOut';
const Drawer=createDrawerNavigator()

export default class DrawerNav extends React.Component {
  render(){
  return (
   <NavigationContainer>
     <Drawer.Navigator>
       <Drawer.Screen name="Requests" component={Requests}/>
       <Drawer.Screen name="AddFriend" component={AddFriend}/>
       <Drawer.Screen name="Profile" component={Profile}/>
       <Drawer.Screen name="Friends" component={Friends}/>
     </Drawer.Navigator>
   </NavigationContainer>
  );
  }
}