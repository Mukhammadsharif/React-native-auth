import React from 'react';
import firebase from 'firebase/app'
import { Provider } from "react-native-paper";
import { theme } from "./theme";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import {StartScreen, LoginScreen, RegisterScreen, ResetPasswordScreen, HomeScreen, AuthLoadingScreen} from "./screens";
import { firebaseConfig } from "./config";

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

const Stack = createNativeStackNavigator();

export default function App() {

  return (
      <Provider theme={theme}>
          <NavigationContainer>
              <Stack.Navigator initialRoutename='AuthLoadingScreen' screenOptions={{headerShown: false}}>
                  <Stack.Screen name="AuthLoadingScreen" component={AuthLoadingScreen} />
                  <Stack.Screen name="StartScreen" component={StartScreen} />
                  <Stack.Screen name="LoginScreen" component={LoginScreen} />
                  <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                  <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
                  <Stack.Screen name="HomeScreen" component={HomeScreen} />
              </Stack.Navigator>
          </NavigationContainer>
      </Provider>
  );
}
