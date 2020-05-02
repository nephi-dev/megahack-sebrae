import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator();

import LoginScreen from './pages/LoginScreen'
import RegisterScreen from './pages/RegisterScreen'
import HomeScreen from './pages/HomeScreen'
import NavbarScreen from './pages/NavbarScreen'
import CategorysScreen from './pages/CategorysScreen'
import ChatScreen from './pages/ChatScreen'
import CalendarScreen from './pages/CalendarScreen'
import PaymentScreen from './pages/PaymentScreen'
import ProfileScreen from './pages/ProfileScreen'




export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>

                <AppStack.Screen name="Register" component={RegisterScreen}/>
                <AppStack.Screen name="Login" component={LoginScreen}/>
                <AppStack.Screen name="Home" component={HomeScreen}/>
                <AppStack.Screen name="Navbar" component={NavbarScreen}/>
                <AppStack.Screen name="Categorys" component={CategorysScreen}/>
                <AppStack.Screen name="Chat" component={ChatScreen}/>
                <AppStack.Screen name="Calendar" component={CalendarScreen}/>
                <AppStack.Screen name="Payment" component={PaymentScreen}/>
                <AppStack.Screen name="Profile" component={ProfileScreen}/>


            </AppStack.Navigator>
        </NavigationContainer>
    )
    
}