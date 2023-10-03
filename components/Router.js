import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ScreenTest from "./Test";
import ScreenHome from "../screens/Home/index"
import ScreenAbout from "../screens/About/index"
import ScreenScroll from "../screens/Scroll/index"
import ScreenSnowman from "../screens/Scroll/snowman"
import ScreenBox from "../screens/Scroll/box"

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ScreenHome} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="Scroll" component={ScreenScroll} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="Snow" component={ScreenSnowman} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="Box" component={ScreenBox} options={{headerShown: false}}></Stack.Screen>

        <Stack.Screen name="About" component={ScreenAbout} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="Test" component={ScreenTest} options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
