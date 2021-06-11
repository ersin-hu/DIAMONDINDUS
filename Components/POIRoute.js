import React, {useState, useEffect, useRef} from 'react';
import {Platform, Text, View, StyleSheet, Dimensions} from 'react-native';
import * as Location from 'expo-location';
import MapView, {Callout, Marker, Polyline} from "react-native-maps";
import {locations} from "./POIdata"
import MapViewDirections from 'react-native-maps-directions';


const GOOGLE_MAPS_APIKEY = 'AIzaSyD7ShEkMdp0p2kdyE0PKxPvZVaky4794qo';

const POIRoute = () => {

    const destination = {latitude: 52.200529, longitude: 5.152435,};
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    // const origin = {latitude: location.coords.latitude, longitude: location.coords.longitude };
    const [coordinates, setCoordinates] = useState(null);

    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
            }
            let location = await Location.watchPositionAsync(
                {
                    timeInterval: 300,
                },
                (location) => {
                    setLocation(location);
                    console.log(location);
                    setCoordinates({latitude: location.coords.latitude, longitude: location.coords.longitude})
                }
            );
            // let location = await Location.getCurrentPositionAsync({});
            // setLocation(location);
            //
            // console.log("console.log locatie" + location.coords.latitude)
            // console.log("console.log locatie" + location.coords.longitude)
            //
            // setCoordinates({latitude: location.coords.latitude, longitude: location.coords.longitude })
        })();

    }, []);

    return (
        locations.map(() => (
            <MapViewDirections key={ Math.random().toString(36).substr(2, 9) }
                origin={coordinates}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY} // google API key
                mode={"WALKING"}
                strokeWidth={4}
                strokeColor="#111111"
            />
        ))
    );
};
export default POIRoute
// const POIRoute = () => {
//     return (
//         locations.map(marker => (
//             <Polyline key={ Math.random().toString(36).substr(2, 9) }
//                 coordinates={locations}
//                 strokeColor="#000"
//                 strokeColors={['#7F0000']}
//                 strokeWidth={6}
//             />
//         ))
//     );
// };
// export default POIRoute

