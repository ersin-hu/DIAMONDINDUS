import React, {useState, useEffect} from 'react';
import {Platform, Text, View, StyleSheet, Dimensions, Image, Button, Pressable, SafeAreaView} from 'react-native';
import * as Location from 'expo-location';
import MapView, {Callout, Marker} from "react-native-maps";
import POIscreen from "./POIscreen";
import {locations} from "./POIdata";
import POIRoute from "./POIRoute";
// import POIRoute from "./POIRoute";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WiggleBox from "react-native-wiggle-box";

export default function Map({navigation: {navigate}}) {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [marginBottom, setMarginBottom] = useState(1)
    const [paddingTop, setPaddingTop] = useState(1)
    const [routeShow, setRouteShow] = useState(false);
    const [buttonSelectRoute, setButtonSelectRoute] = useState(true);
    const [buttonStartRoute, setButtonStartRoute] = useState(false);


    // const _handleMapRegionChange = function (mapRegion) {
    //     setLocation({ mapRegion });
    // };

    const _onMapReady = function () {
        setMarginBottom(0)
        setPaddingTop(0)
    }

    const onSelectRoute = function () {
        // navigate.setOptions({headerShown: false})
        // setButtonShow(!buttonShow)
        // handleMapRegionChange()
        setRouteShow(true)
        setButtonStartRoute(true)
        setButtonSelectRoute(false)
        // return(
        //     <POIRoute/>
        // )

    }

    const onStartRoute = function (){
        setButtonStartRoute(false)
        console.log("inzoom op locatie nog maken (Twan)")

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
        latitude: 52.2210452,
        longitude: 5.1597742,
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

        <SafeAreaView style={styles.container}>
                {buttonSelectRoute ? (
            <Pressable style={styles.SelectRoutebutton} onPress={() => onSelectRoute()}>
                {/*<WiggleBox*/}
                {/*    active={true}*/}
                {/*    duration={200}*/}
                {/*    >*/}
                <Text style={styles.text}> Selecteer een route </Text>
                {/*</WiggleBox>*/}
            </Pressable>
            ): null}
            {buttonStartRoute ? (
                <Pressable style={styles.StartRoutebutton} onPress={() => onStartRoute() }>
                    {/*<WiggleBox*/}
                    {/*    active={true}*/}
                    {/*    duration={200}*/}
                    {/*>*/}
                    <Text style={styles.text}> Start de route! </Text>
                    {/*</WiggleBox>*/}
                </Pressable>
            ): null}

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
                    <SafeAreaView  key={Math.random().toString(36).substr(2, 9)}>


                        <Marker
                            coordinate={{
                                latitude: marker.latitude,
                                longitude: marker.longitude
                            }}

                            title={marker.title}
                            description={marker.description}
                            onPress={() => navigate('POIinfo', {data: [marker.title, marker.description, marker.image]})}
                        >
                            <Image style={{width: 30, height: 30, alignItems: "center"}}
                                   source={require('../assets/Diamand.png')}/>


                        </Marker>

                        {/*<POIRoute/>*/}
                        {routeShow ? (
                            <POIRoute/>
                        ) : null}
                    </SafeAreaView >

                ))}
            </MapView>

        </SafeAreaView >
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
        top: 30,
        borderColor: "green",
        borderWidth: 3
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
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'green',
    },
});