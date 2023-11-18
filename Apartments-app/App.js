// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ApartmentDetails from "./src/screens/ApartmentDetails";
import Home from "./src/screens/Home";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ApartmentsList">
        <Stack.Screen
          name="ApartmentsList"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ApartmentDetails" component={ApartmentDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
