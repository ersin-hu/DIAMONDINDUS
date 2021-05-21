
import {Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Feather} from '@expo/vector-icons'
import {Card} from 'react-native-elements';
import POIRoute from "./POIRoute";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';



const POIinfo = ({navigation}) => {
    const image = {uri: 'https://images.pexels.com/photos/1029243/pexels-photo-1029243.jpeg?cs=srgb&dl=pexels-suntorn-somtong-1029243.jpg&fm=jpg'};
    const goBack = () => {
        navigation.goBack();
    }
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
    }, [navigation]);

    return (

        <View style={{backgroundColor: 'white', flex: 1}}>
            <ImageBackground
                source={image}
                style={styles.image}
                imageStyle={{borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}
            >
                <Text style={styles.Tagline}>Discover HIlversum</Text>
                <Text style={styles.Placename}>Explore the Diamond</Text>

                <TouchableOpacity onPress={goBack} style={{position: 'absolute', left:20, top:40,
                backgroundColor: '#ff6200', padding: 10, borderRadius: 40}}>
                    <Feather name='arrow-left' size={24} color='#fff' />
                </TouchableOpacity>

                </ImageBackground>

                <ScrollView style={{backgroundColor: 'white'}}>
                    <Text style={{padding: 14, fontSize: 20, fontWeight: 'bold'}}>
                        About the place
                    </Text>
                    <Text style={{paddingHorizontal: 14, fontSize: 14, fontWeight: 'normal',
                    opacity: 0.7, justifyContent: 'flex-start', textAlign: 'justify', lineHeight: 20}}>
                        Sanatorium Zonnestraal was een sanatorium in de Nederlandse gemeente Hilversum.
                        Het complex was oorspronkelijk bestemd voor diamantslijpers die tuberculose hadden opgelopen.
                        Het werd ontworpen door de architect Jan Duiker, in samenwerking met Bernard Bijvoet en Jan Gerko Wiebenga.
                        Het hoofdgebouw werd geopend op 12 juni 1928. Het Ter Meulen-paviljoen werd tegelijkertijd geopend met het hoofdgebouw, het Dresselhuys-paviljoen volgde in 1931.
                        In 1957 werd Zonnestraal een ziekenhuis en ging verder als Algemeen Ziekenhuis Zonnestraal te Hilversum.
                        Zonnestraal beslaat circa 120 hectare, en ligt in het Loosdrechtse Bos. Het complex was van 2010 tot 2018 een officiële kandidaat voor de werelderfgoedlijst van de UNESCO, maar werd van de lijst afgevoerd.
                        In 2018 droeg woningbouwcorporatie 'De Alliantie', die landgoed Zonnestraal met de monumentale bebouwing sinds 2006 in bezit had, over aan 'Zonnestraal Hilversum BV'.
                        Dit is een onderdeel van de Óbidos-vastgoedmaatschappij. Delen van het complex hebben nog een gezondheidszorg gerelateerde functie.
                    </Text>
                </ScrollView>

        </View>

    );
}

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
        }
    });

export default POIinfo;