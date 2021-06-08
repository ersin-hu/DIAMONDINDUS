import * as React from "react";
import MapView from "react-native-maps";
import MainScreen from "./Components/MainScreen";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Tabs from './Components/tabs';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Platform,
    StatusBar, YellowBox,
} from "react-native";

import { LogBox } from 'react-native';
import CustomNavigation from "./Components/CustomNavigation";
import POIinfo from "./Components/POIinfo";
import Map from "./Components/Map";
import StartScreen from "./Components/StartScreen";
import GameCamera from "./Components/GameCamera";
import GameAnswer from "./Components/GameAnswer";

LogBox.ignoreLogs(['Require cycle:'])
// YellowBox.ignoreWarnings(['Require cycle:']);



export default function App() {

  React.useEffect(() => {
    //do something on load
    console.log("Hey, I've loaded up");

    fetch('http://192.168.68.120:8080/api/poi/Names')
    .then((response) => response.json())
    .then(todoItems => {
      console.log(todoItems);
    })
    .catch((error) => {
      console.log('There has been a problem with your fetch operation: ' + error.message);
       // ADD THIS THROW error
        throw error;
      });

  });
    return (
        <Tabs/>

    );
}

const Stack = createStackNavigator()


// function App() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen name="Home" component={HomeScreen}/>
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        // paddingTop: Constants.statusBarHeight,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "#ecf0f1",
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        color: "#34495e",
    },
});

