import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Pressable, Image, SafeAreaView} from 'react-native';
import {Camera} from 'expo-camera';
import GameAnswer from "./GameAnswer";

export default function GameCamera({navigation}) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const {status} = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View/>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={styles.container}>

            <Camera style={styles.camera} type={type}>
                <SafeAreaView style={styles.ImageContainer}>
                    <Image style={styles.GraphImage} source={require('../assets/Muurgrafiek-vullling-tabel-01.png')}/>
                {/*</SafeAreaView>*/}
                {/*/!*<Text style={styles.text}>GRAFIEK HIER</Text>*!/*/}
                {/*<SafeAreaView style={styles.ButtonContainer}>*/}
                    <Pressable style={styles.StartButton} onPress={() => navigation.navigate(GameAnswer)}>
                        <Text style={styles.ButtonText}>Ik weet het!</Text>
                    </Pressable>
                </SafeAreaView>
                {/*<View style={styles.buttonContainer}>*/}
                {/*    <TouchableOpacity*/}
                {/*        style={styles.button}*/}
                {/*        onPress={() => {*/}
                {/*            setType(*/}
                {/*                type === Camera.Constants.Type.back*/}
                {/*                    ? Camera.Constants.Type.front*/}
                {/*                    : Camera.Constants.Type.back*/}
                {/*            );*/}
                {/*        }}>*/}
                {/*        <Text style={styles.text}> Flip </Text>*/}
                {/*    </TouchableOpacity>*/}
                {/*</View>*/}
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    ButtonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        // margin: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 50,
        color: 'white',
    },
    StartButton: {
        flex: 1,
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
        borderWidth: 3

    },
    ButtonText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black'
    },
    GraphImage: {
        width: 300,
        height: 300,
        alignItems: "center",
        justifyContent: "center",


    },
    ImageContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
