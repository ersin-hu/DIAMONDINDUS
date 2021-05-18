import * as React from "react";
import MapView from "react-native-maps";
import CurrentLocation from "./Components/CurrentLocation";
import Map from "./Components/Map";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
  StatusBar,
} from "react-native";


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
    <View style={styles.container}>
      <Map/>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        // paddingTop: Constants.statusBarHeight,
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


