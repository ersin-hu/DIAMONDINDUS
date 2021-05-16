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
//             latitude: 52.226632,
//             longitude: 5.180905,
//         },
//         {
//             latitude: 52.227195,
//             longitude: 5.176825,
//         },
//         {
//             latitude: 52.228599,
//             longitude: 5.169506,
//         },
//         {
//             latitude: 52.228599,
//             longitude: 5.169506,
//         },
//         {
//             latitude: 52.237214,
//             longitude: 5.150271,
//         },
//         {
//             latitude: 52.222164,
//             longitude: 5.151416,
//         },
//     ]);  return (
//         <View style={styles.container}>
//             <MapView
//                 style={styles.maps}
//                 initialRegion={{
//                     latitude: locations [0].latitude,
//                     longitude: coordinates[0].longitude,
//                     latitudeDelta: 0.0622,
//                     longitudeDelta: 0.0121,
//                 }}>
//                 <Marker coordinate={marker[0]} />
//                 <Marker coordinate={marker[1]} />
//                 <Polyline
//                     coordinates={locations}
//                     strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
//                     strokeColors={['#7F0000']}
//                     strokeWidth={6}
//                 />
//             </MapView>
//         </View>
//     );
// };
//
//
// export default POIRoute