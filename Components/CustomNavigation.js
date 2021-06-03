import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import POIinfo from "./POIinfo";
import locationList from "./locationList";
import MainScreen from "./MainScreen";
import Map from "./Map";
import StartScreen from "./StartScreen";


const Stack = createStackNavigator()

const CustomNavigation = () => {
    return (
            <Stack.Navigator initialRouteName="StartScreen">
                <Stack.Screen name="Home" component={MainScreen}/>
                <Stack.Screen name="POIinfo" component={POIinfo} />
                <Stack.Screen options={{headerShown: false}} name="Map" component={Map} />
                <Stack.Screen options={{headerShown: false}} name="StartScreen" component={StartScreen} />
            </Stack.Navigator>
    )
}

export default CustomNavigation;
// // export {ScreenNavigator}