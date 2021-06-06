// import React, { Component, PropTypes } from "react";
// import {AsyncStorage, Modal, View, Text, TouchableHighlight} from "react-native";
// import {SafeAreaView, Text, StyleSheet, TextInput, Pressable, Image, View} from "react-native";
//
//
//


// // export default class TutorialScreen extends Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             modalVisible: false
// //         };
// //     }
// //
// //     componentDidMount() {
// //         AsyncStorage.getItem(this.props.pagekey, (err, result) => {
// //             if (err) {
// //             } else {
// //                 if (result == null) {
// //                     console.log("null value recieved", result);
// //                     this.setModalVisible(true);
// //                 } else {
// //                     console.log("result", result);
// //                 }
// //             }
// //         });
// //         AsyncStorage.setItem(this.props.pagekey, JSON.stringify({"value": "true"}), (err, result) => {
// //             console.log("error", err, "result", result);
// //         });
// //     }
// //
// //     setModalVisible(visible) {
// //         this.setState({modalVisible: visible});
// //
// //     }
// const TutorialScreen = function () {
//
//     return (
//         <SafeAreaView style={styles.container}>
//
//             <Text style={styles.text}>Voordat je kunt beginnen aan de <Text style={styles.boldText}>Hilversum History
//                 Hunt</Text>.
//                 Moet je natuurlijk weten hoe het spel begint. de Hilversum History Hunt is een soort vossenjacht.
//                 De bedoeling is dat je de route volgt omweg naar een diamant. Eenmaal bij een diamant aangekomen, kun je
//                 kans maken op prijzen.
//                 Om beginnen druk op OK.</Text>
//
//             <Pressable style={styles.OKButton} onPress={() => TutorialScreen()}>
//                 <Text style={styles.ButtonText}>Ok</Text>
//             </Pressable>
//         </SafeAreaView>
//     )
// }
