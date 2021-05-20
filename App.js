import * as React from "react";
import MapView from "react-native-maps";
import CurrentLocation from "./Components/Map";
import MainScreen from "./Components/MainScreen";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Platform,
    StatusBar,
} from "react-native";
import SelectRoute from "./Components/SelectRoute";


export default function App() {

  React.useEffect(() => {
    //do something on load
    console.log("Hey, I've loaded up");
 
    fetch('http://192.168.2.70:8080/api/todoItems')
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

        // <View style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Map">
                    <Stack.Screen name="Home" component={MainScreen}/>
                    {/*<Stack.Screen name="SelectRoute" component={SelectRoute}/>*/}
                    {/*<Stack.Screen name="POIscreen" component={POIscreen} />*/}
                    <Stack.Screen name="POIinfo" component={POIinfo} />
                    <Stack.Screen name="Map" component={Map} />
                </Stack.Navigator>
            </NavigationContainer>

        // </View>

    );
}
// function HomeScreen() {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Home Screen</Text>
//         </View>
//     );
{/*<View style={{zIndex: 2, position: 'absolute', top: 5}}>*/}
{/*    <SelectRoute/>*/}
{/*</View>*/}
// }

const Stack = createStackNavigator();

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

