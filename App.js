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
import SelectRoute from "./Components/SelectRoute";


// export default function App() {
//     return (
//         <View style = {styles.container}>
//             {/*<View style={{zIndex: 2, position: 'absolute'}}>*/}
//             {/*    /!*<SelectRoute/>*!/*/}
//             {/*</View>*/}
//             <View style={{zIndex: 1, position: 'absolute'}}>
//                 <Map/>
//             </View>
//         </View>
//     );
// }

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
            <View style={{zIndex: 2, position: 'absolute', top: 5}}>
                <SelectRoute/>
            </View>
        </View>
    // <View style={styles.container}>
    //     {/*<View style={{zIndex: 2, position: 'absolute', top: 5}}>*/}
    //     {/*    <SelectRoute/>*/}
    //     {/*</View>*/}
    //     <View style={{zIndex: 1, position: 'absolute'}}>
    //         <CurrentLocation/>
    //     </View>
    // </View>


    );
}

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

