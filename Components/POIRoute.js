import React, {useState, useEffect} from 'react';
import {locations} from "./POIdata"
import MapViewDirections from 'react-native-maps-directions';
import MapView, {Callout, Marker, Polyline,} from "react-native-maps";


import {Platform, Text, View, StyleSheet, Dimensions} from 'react-native';
import * as Location from 'expo-location';
import {Image} from "react-native";


const origin = {latitude: 52.2292, longitude: 5.1669};
const destination = {latitude: 52.200529, longitude: 5.152435,};
const GOOGLE_MAPS_APIKEY = 'AIzaSyD7ShEkMdp0p2kdyE0PKxPvZVaky4794qo';

// const [coordinates] = useState([
//     {
//         latitude: 52.226632,
//         longitude: 5.180905,
//     },
//     {
//         latitude: 52.228599,
//         longitude: 5.169506,
//     },
//     {
//         latitude: 52.232658,
//         longitude: 5.164909,
//     },
//     {
//         latitude: 52.237214,
//         longitude: 5.150271,
//     },
//     {
//         latitude: 52.222164,
//         longitude: 5.151416,
//     },
//     {
//         latitude: 52.200529,
//         longitude: 5.152435,
//     },
//     {
//         latitude: 52.224442,
//         longitude: 5.181236,
//     },
// ]);

const POIRoute = () => {
    return (
        locations.map(() => (
            <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY} // google API key
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