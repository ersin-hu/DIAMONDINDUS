import * as React from "react";
import MapView from "react-native-maps";
import CurrentLocation from "./CurrentLocation";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Platform,
    StatusBar,
} from "react-native";
// import SelectRoute from "./SelectRoute";


export default function Map() {
    return (

        <View style={styles.container}>
            <View>
                <CurrentLocation/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "#ecf0f1",


    },
    // paragraph: {
    //     margin: 24,
    //     fontSize: 18,
    //     fontWeight: "bold",
    //     textAlign: "center",
    //     color: "#34495e",
    // },
});
