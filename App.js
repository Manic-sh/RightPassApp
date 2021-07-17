import "react-native-gesture-handler";
import React from "react";
import { Provider as PaperProvider } from 'react-native-paper';
// Import Navigators from React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Button, Alert } from "react-native";


import CartContextProvider from "./src/store/Store";
import DrawerNavigationRoutes from "./src/Navigation/DrawerNavigationRoutes";
import LoginScreen from "./src/screens/components/Authentication/Login";
import RegisterScreen from "./src/screens/components/Authentication/Register";
import WelcomeScreen from "./src/screens/Welcome";
import Checkout from "./src/screens/components/Payment/Checkout";

const Stack = createStackNavigator();

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: "Sign Up", //Set Header Title
          headerStyle: {
            backgroundColor: "#383A3C", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default function App({ navigation }) {
  return (
    <CartContextProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="LoginScreen">
            {/* Auth Navigator: Include Login and Signup */}
            <Stack.Screen
              name="Auth"
              component={Auth}
              options={{
                headerShown: false,
              }}
            />
            {/* Welcome Screen as a landing page */}
            <Stack.Screen
              name="Welcome"
              component={WelcomeScreen}
              options={{
                headerShown: true,
                title: "Welcome",
              }}
            />
            <Stack.Screen
              name="Home"
              component={DrawerNavigationRoutes}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Checkout"
              component={Checkout}
              options={{ headerShown: true }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </CartContextProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});
