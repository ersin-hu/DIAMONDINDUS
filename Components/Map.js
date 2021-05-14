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


export default function Map() {
    return (
        <View style={styles.container}>
            <CurrentLocation/>

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
