const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import IPhone1415ProMax3 from "./screens/IPhone1415ProMax3";
import Rectangle from "./components/Rectangle";
import CollegeConnectLogo from "./components/CollegeConnectLogo";
import IPhone1415ProMax from "./screens/IPhone1415ProMax";
import IPhone1415ProMax1 from "./screens/IPhone1415ProMax1";
import IPhone1415ProMax2 from "./screens/IPhone1415ProMax2";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inder-Regular": require("./assets/fonts/Inder-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "IBMPlexSansDevanagari-Bold": require("./assets/fonts/IBMPlexSansDevanagari-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="IPhone1415ProMax3"
              component={IPhone1415ProMax3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1415ProMax"
              component={IPhone1415ProMax}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1415ProMax1"
              component={IPhone1415ProMax1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1415ProMax2"
              component={IPhone1415ProMax2}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
