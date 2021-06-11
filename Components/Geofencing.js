import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';

TaskManager.defineTask("test", ({ data: { eventType, region }, error }) => {
    if (error) {
        // check `error.message` for more details.
        return;
    }
    if (eventType === Location.LocationGeofencingEventType.Enter) {
        console.log("You've entered region:", region);
    } else if (eventType === Location.LocationGeofencingEventType.Exit) {
        console.log("You've left region:", region);
    }
});

const Geofencing = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied");
                return;
            }
            let bg = await Location.requestBackgroundPermissionsAsync();
            if (bg.status !== "granted") {
                setErrorMsg("Permission to access location was denied");
                return;
            }

            await Location.startGeofencingAsync("test", [
                {
                    identifier: "test-1",
                    latitude: 52.226632,
                    longitude: 5.180905,
                    radius: 200,
                },
            ]);
        })();
    }, []);

    let text = "Waiting..";
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
        // <Pressable style={styles.StartRoutebutton} onPress={() => Geofencing() }>
        //     <Text style={styles.text}> GEOFENCING </Text>
        // </Pressable>
        null

    );
}
export default Geofencing;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    StartRoutebutton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'white',
        zIndex: 2,
        position: 'absolute',
        bottom: 100,
        borderColor: "green",
        borderWidth: 3,

    },
});
