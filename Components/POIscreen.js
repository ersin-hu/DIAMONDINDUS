import React, {useState, useEffect} from 'react';
import {Platform, Text, View, StyleSheet, Dimensions} from 'react-native';
import * as Location from 'expo-location';
import MapView, {Callout, Marker, Polyline} from "react-native-maps";
import {locations} from "./POIdata"
import {Image} from "react-native";
import POIRoute from "./POIRoute";

const POIscreen = () => {

        return (

            locations.map(marker => (
                <View key={ Math.random().toString(36).substr(2, 9)}>


                    <Marker
                        coordinate={{
                            latitude: marker.latitude,
                            longitude: marker.longitude
                        }}

                        title={marker.title}
                        description={marker.description}
                    >
                        <Image style={{width: 30, height: 30, alignItems: "center"}}
                               source={require('../assets/Diamand.png')}/>
                    </Marker>
                    <POIRoute/>
                </View>
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

