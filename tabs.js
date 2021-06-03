import React from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from "./Components/MainScreen";
import POIinfo from "./Components/POIinfo";
import {NavigationContainer} from '@react-navigation/native';
import POIRoute from "./Components/POIRoute";
import CustomNavigation from "./Components/CustomNavigation";
import Map from "./Components/Map";
import locationList from "./Components/locationList";
import {ScreenNavigator} from "./Components/CustomNavigation";
const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <NavigationContainer>
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 60,

                    ...styles.shadow,
                },
            }}>
            <Tab.Screen
                name="Home"
                component={CustomNavigation}
                options={{
            tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top:5}}>
                <Image
                    source={require('../DiamantIndustrieFE/assets/diamond-shape.png')}

                    resizeMode='contain'
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? '#1d191b' : '#748c94'
                    }}
                    />
                <Text style={{color: focused ? '#1d191b' : '#748c94', fontSize: 12}}>
                    Home
                </Text>
            </View>
            ),
            }}
                />
            <Tab.Screen name="Info" component={locationList}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <View style={{alignItems: 'center', justifyContent: 'center', top:5}}>
                                    <Image
                                        source={require('../DiamantIndustrieFE/assets/book.png')}
                                        resizeMode='contain'
                                        style={{
                                            width: 25,
                                            height: 25,
                                            tintColor: focused ? '#1d191b' : '#748c94'
                                        }}
                                    />
                                    <Text style={{color: focused ? '#1d191b' : '#748c94', fontSize: 12}}>
                                        Info
                                    </Text>
                                </View>
                            ),
                        }}/>

            <Tab.Screen name="Menu" component={POIRoute}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <View style={{alignItems: 'center', justifyContent: 'center', top:5}}>
                                    <Image
                                        source={require('../DiamantIndustrieFE/assets/menu.png')}
                                        resizeMode='contain'
                                        style={{
                                            width: 25,
                                            height: 25,
                                            tintColor: focused ? '#1d191b' : '#748c94'
                                        }}
                                    />
                                    <Text style={{color: focused ? '#1d191b' : '#748c94', fontSize: 12}}>
                                        Menu
                                    </Text>
                                </View>
                            ),
                        }}/>

        </Tab.Navigator>
        </NavigationContainer>
    )
}
const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})

export default Tabs;
