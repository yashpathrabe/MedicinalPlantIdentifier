const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import IPhone1415ProMax from "./screens/IPhone1415ProMax";
import IPhone1415ProMax1 from "./screens/IPhone1415ProMax1";
import IPhone1415ProMax2 from "./screens/IPhone1415ProMax2";
import IPhone1415ProMax3 from "./screens/IPhone1415ProMax3";
import IPhone1415ProMax4 from "./screens/IPhone1415ProMax4";
import ArrowLeft from "./components/ArrowLeft";
import FlashAuto from "./screens/FlashAuto";
import IPhone1415ProMax5 from "./screens/IPhone1415ProMax5";
import IPhone1415ProMax6 from "./screens/IPhone1415ProMax6";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "SFProText-Semibold": require("./assets/fonts/SFProText-Semibold.otf"),
    "Krub-Regular": require("./assets/fonts/Krub-Regular.ttf"),
    "Krub-SemiBold": require("./assets/fonts/Krub-SemiBold.ttf"),
    "KronaOne-Regular": require("./assets/fonts/KronaOne-Regular.ttf"),
    "Mulish-Regular": require("./assets/fonts/Mulish-Regular.ttf"),
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
            <Stack.Screen
              name="IPhone1415ProMax3"
              component={IPhone1415ProMax3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1415ProMax4"
              component={IPhone1415ProMax4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FlashAuto"
              component={FlashAuto}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1415ProMax5"
              component={IPhone1415ProMax5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1415ProMax6"
              component={IPhone1415ProMax6}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
