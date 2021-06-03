import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import POIinfo from "./POIinfo";
import locationList from "./locationList";
import MainScreen from "./MainScreen";
import Map from "./Map";


const Stack = createStackNavigator()

const CustomNavigation = () => {
    return (
            <Stack.Navigator initialRouteName="Map">
                <Stack.Screen name="Home" component={MainScreen}/>
                <Stack.Screen name="POIinfo" component={POIinfo} />
                <Stack.Screen options={{headerShown: false}} name="Map" component={Map} />
            </Stack.Navigator>
    )
}

export default CustomNavigation;
// // export {ScreenNavigator}