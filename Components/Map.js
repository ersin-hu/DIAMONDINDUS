import React, {useState, useEffect} from 'react';
import {Platform, Text, View, StyleSheet, Dimensions, Image, Button, Pressable} from 'react-native';
import * as Location from 'expo-location';
import MapView, {Callout, Marker} from "react-native-maps";
import POIscreen from "./POIscreen";
import {locations} from "./POIdata";
import POIRoute from "./POIRoute";
// import POIRoute from "./POIRoute";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SelectRoute from "./SelectRoute";


export default function Map({navigation}) {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [marginBottom, setMarginBottom] = useState(1)
    const [paddingTop, setPaddingTop] = useState(1)


    // const _handleMapRegionChange = function (mapRegion) {
    //     setLocation({ mapRegion });
    // };

    const _onMapReady = function () {
        setMarginBottom(0)
        setPaddingTop(0)
    }
    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            // console.log(location)
        })();
    }, []);

    let mapRegion = {
        latitude: 52.155499,
        longitude: 5.387740,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }


    let text = 'Waiting..';
    if (errorMsg) {
        console.log("location not found...");
    } else if (location) {
        text = JSON.stringify(location);
        mapRegion = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        };
    }

    const Stack = createStackNavigator();

    return (

        <View style={styles.container}>
            {/*<View style={{zIndex: 2, position: 'absolute', bottom: 5}}  onPress={() => navigation.navigate('POIinfo')}>*/}
            {/*    <SelectRoute/>*/}
            {/*</View>*/}
            {/*<View style={styles.SelectRoutebutton}>*/}
            {/*<Pressable*/}
            {/*    title="Go to Details"*/}
            {/*    onPress={() => navigation.navigate('SelectRoute')}*/}
            {/*/>*/}

            {/*</View>*/}
            <Pressable style={styles.SelectRoutebutton} onPress={() => navigation.navigate('SelectRoute')}>
                <Text style={styles.text}> Selecteer een route </Text>
            </Pressable>


            <MapView
                style={{
                    width: Dimensions.get("window").width,
                    height: Dimensions.get("window").height,
                    marginBottom: marginBottom
                }}
                onMapReady={_onMapReady}
                showsMyLocationButton={true}
                showsCompass={true}
                showsUserLocation
                region={mapRegion}
                // onRegionChange={handleMapRegionChange}
            >
                {locations.map(marker => (
                    <View key={Math.random().toString(36).substr(2, 9)}>


                        <Marker
                            coordinate={{
                                latitude: marker.latitude,
                                longitude: marker.longitude
                            }}

                            title={marker.title}
                            description={marker.description}
                            onPress={() => navigation.navigate('POIinfo')}
                        >
                            <Image style={{width: 30, height: 30, alignItems: "center"}}
                                   source={require('../assets/Diamand.png')}/>


                        </Marker>

                        {/*<POIRoute/>*/}
                    </View>

                ))}
            </MapView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    SelectRoutebutton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'white',
        zIndex: 2,
        position: 'absolute',
        bottom: 15,
        borderColor: "green",
        borderWidth: 3

    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'green',
    },
});