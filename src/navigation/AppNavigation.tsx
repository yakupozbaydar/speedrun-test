import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AppStackType } from '../types/Navigation';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import CreateUserScreen from '../screens/CreateUserScreen';
import UserDetailScreen from '../screens/UserDetailScreen';
import HomeScreen from '../screens/HomeScreen';
import Header from '../components/Header';

const AppStack = createNativeStackNavigator<AppStackType>();
const AppNavigation = () => {
  return (
        <AppStack.Navigator initialRouteName='HomeScreen' screenOptions={{}}>
            <AppStack.Screen options={{headerShown:false}} name='HomeScreen' component={HomeScreen}/>
            <AppStack.Screen name='UserDetailScreen' component={UserDetailScreen} options={{header(){
              return(
                <Header title='User Detail'/>
              )
            }}} />
            <AppStack.Screen options={{header(){
              return(
                <Header title='Create User' />
              )
            }}} name='CreateUserScreen' component={CreateUserScreen} />
        </AppStack.Navigator>
  )
}

export default AppNavigation
