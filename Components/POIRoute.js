import React, {useState, useEffect} from 'react';
import {locations} from "./POIdata"
// import MapViewDirections from 'react-native-maps-directions';
import MapView, {Callout, Marker, Polyline,} from "react-native-maps";

import {Platform, Text, View, StyleSheet, Dimensions} from 'react-native';
import * as Location from 'expo-location';
import {Image} from "react-native";

// const origin = {latitude: 52.226632, longitude: 5.180905};
// const destination = {latitude: 52.224442, longitude: 5.181236};
// const GOOGLE_MAPS_APIKEY = 'AIzaSyAX3EVsoKVc0xTSnp3SZhtkWWP-ykkt3CA';



// const POIRoute = () => {
//     return (
//         locations.map(() => (
//             <MapViewDirections
//                 origin={origin}
//                 destination={destination}
//                 apikey={GOOGLE_MAPS_APIKEY} // google API key
//                 strokeWidth={4}
//                 strokeColor="#111111"
//             />
//         ))
//     );
// };
// export default POIRoute


const POIRoute = () => {
    return (
        locations.map(marker => (
            <Polyline key={ Math.random().toString(36).substr(2, 9) }
                coordinates={locations}
                strokeColor="#000"
                strokeColors={['#7F0000']}
                strokeWidth={6}
            />
        ))
    );
};
export default POIRoute