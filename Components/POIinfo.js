import {
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    ImageBackground,
    ScrollView,
    SafeAreaView, Pressable
} from 'react-native';
import React, {useState} from 'react';
import {Feather} from '@expo/vector-icons'

import GameCamera from "./GameCamera";


//DATA DOORSTUREN

const POIinfo = ({navigation, route}) => {
    // if
    //     POIData bevat choice show const quiz else show de andere return

    const Quiz = () => {

        if (route.params.choice, route.params.correctA !== undefined) {
            return (
                <View style={quizStyle.container}>
                    <View style={quizStyle.top}>
                        <Text style={quizStyle.question}>{route.params.question}</Text>
                    </View>
                    {/*Popup maken*/}
                    <View style={quizStyle.options}>

                        <TouchableOpacity style={quizStyle.optionButton}>
                            <Text style={quizStyle.option} onPress={() => {
                                alert(route.params.correctA)
                            }}>A: {route.params.choice.A} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={quizStyle.optionButton}>
                            <Text style={quizStyle.option} onPress={() => {
                                alert(route.params.correctB)
                            }}>B: {route.params.choice.B}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={quizStyle.optionButton}>
                            <Text style={quizStyle.option} onPress={() => {
                                alert(route.params.correctC)
                            }}>C: {route.params.choice.C}</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            );
        } else {
            return null
        }
    }

    const goBack = () => {
        navigation.goBack();
    }
    console.log(route.params.title)
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
    }, [navigation]);

    return (

        <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>

            <ImageBackground
                source={route.params.image}
                style={styles.image}
                imageStyle={{borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}
            >
                <Text style={styles.Tagline}>{route.params.title}</Text>
                <Text style={styles.Placename}>Explore the Diamond</Text>

                <TouchableOpacity onPress={goBack} style={{
                    position: 'absolute', left: 20, top: 40,
                    backgroundColor: '#ff6200', padding: 10, borderRadius: 40
                }}>
                    <Feather name='arrow-left' size={24} color='#fff'/>
                </TouchableOpacity>

            </ImageBackground>

            <ScrollView style={{backgroundColor: 'white'}}>
                <Text style={{padding: 14, fontSize: 20, fontWeight: 'bold'}}>
                    Informatie over deze locatie:
                </Text>
                <Text style={{
                    paddingHorizontal: 14, fontSize: 14, fontWeight: 'normal',
                    opacity: 0.7, justifyContent: 'flex-start', textAlign: 'justify', lineHeight: 20
                }}>
                    {route.params.description}
                </Text>
                <View>
                    <Pressable style={styles.StartButton} onPress={() => navigation.navigate(GameCamera)}>
                        <Text style={styles.ButtonText}>Start!</Text>
                    </Pressable>
                </View>
                <View>
                    <Quiz/>
                </View>
            </ScrollView>


        </SafeAreaView>

    );

}


const quizStyle = StyleSheet.create({
    container: {
        padding: 12,
        height: '100%',
    },
    top: {
        marginVertical: 16,
    },
    options: {
        marginVertical: 16,
        flex: 1,
    },
    question: {
        fontSize: 30,
    },
    option: {
        fontSize: 18,
        color: 'white',
    },
    optionButton: {
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: '#34A0A4',
        paddingHorizontal: 12,
        borderRadius: 12,

    }
});
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        // zIndex: 2
    },
    image: {
        height: 380,
        justifyContent: 'flex-end',
    },
    Tagline: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 14,
    },
    Placename: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 14,
        marginBottom: 30
    },
    StartButton: {
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
    },
});

export default POIinfo;
