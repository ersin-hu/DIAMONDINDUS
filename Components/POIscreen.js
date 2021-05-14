import React, {useState, useEffect} from 'react';
import {Platform, Text, View, StyleSheet, Dimensions} from 'react-native';
import * as Location from 'expo-location';
import MapView, {Callout, Marker} from "react-native-maps";
import {locations} from "./POIdata"

const POIscreen = () => {
    return (

        locations.map(marker => (
            <Marker coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude
            }}
                    title={marker.title}
                    description={marker.description}
            />
        ))
    );
}


export default POIscreen
//         <Marker
//             coordinate={{
//                 latitude: 52.226632,
//                 longitude: 5.180905,
//             }}
//             image={require('../assets/POI.png')}
//             title="Centraal station"
//             description="Lorem Ipsum standard text"
//             >
//
//             {/*<Callout tooltip>*/}
//             {/*    <View>*/}
//             {/*        <View style={styles.bubble}>*/}
//             {/*            <text style={styles.name}>Centraal station</text>*/}
//             {/*            <text>A short description</text>*/}
//             {/*        </View>*/}
//             {/*    </View>*/}
//             {/*</Callout>*/}
//         </Marker>
//     );
// };

