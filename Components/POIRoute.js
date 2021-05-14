// import React, {useState, useEffect} from 'react';
// import {Platform, Text, View, StyleSheet, Dimensions} from 'react-native';
// import * as Location from 'expo-location';
// import MapView, {Callout, Marker} from "react-native-maps";
// import {locations} from "./POIdata";
// import {Image} from "react-native";
//
// const POIRoute = () => {
//     const [locations] = useState([
//         {
//             latitude: 48.8587741,
//             longitude: 2.2069771,
//         },
//         {
//             latitude: 48.8323785,
//             longitude: 2.3361663,
//         },
//     ]);  return (
//         <View style={styles.container}>
//             <MapView
//                 style={styles.maps}
//                 initialRegion={{
//                     latitude: coordinates[0].latitude,
//                     longitude: coordinates[0].longitude,
//                     latitudeDelta: 0.0622,
//                     longitudeDelta: 0.0121,
//                 }}>
//                 <Marker coordinate={coordinates[0]} />
//                 <Marker coordinate={coordinates[1]} />
//                 <Polyline
//                     coordinates={coordinates}
//                     strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
//                     strokeColors={['#7F0000']}
//                     strokeWidth={6}
//                 />
//             </MapView>
//         </View>
//     );
// };


export default POIRoute