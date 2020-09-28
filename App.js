import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import Home from './app/views/Home'
import Contact from './app/views/Contact';
import Videos from './app/views/Videos';
import VideoDetails from './app/views/VideoDetails';
import Register from './app/views/Register';
import Login from './app/views/Login';
import About from './app/views/About';
import Blog from './app/views/Blog';
import Quiz from './app/views/Quiz';
import Quizfinish from './app/views/Quizfinsih'

//Create Stack Navigator for Navigation
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'My Home',
            headerStyle: {
              backgroundColor: '#fff',
            
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
        />
        <Stack.Screen
          name="Videos"
          component={Videos}
        />
        <Stack.Screen
          name="VideoDetails"
          component={VideoDetails}
        />

        <Stack.Screen
          name="Register"
          component={Register}
        />

        <Stack.Screen
          name="Login"
          component={Login}
        />

        <Stack.Screen
          name="About"
          component={About}
        />

        <Stack.Screen
          name="Blog"
          component={Blog}
        />
        <Stack.Screen
          name="Quiz"
          component={Quiz}
        />

        <Stack.Screen
          name="Quizfinish"
          component={Quizfinish}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


