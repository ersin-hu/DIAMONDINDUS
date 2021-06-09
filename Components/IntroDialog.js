import React, {useState} from 'react';
import {SafeAreaView, View, Text, TouchableHighlight, StyleSheet, Button,} from 'react-native';
import Dialog, {DialogTitle, DialogContent, DialogButton, ScaleAnimation,} from 'react-native-popup-dialog';

export default function IntroDialog({ navigation }) {

    const [introAnimationDialog, setIntroAnimationDialog] = useState(false);

    return (
        <SafeAreaView style={styles.introContainer}>
            <View style={styles.introContainer}>
                <Text style={styles.titleStyle}>
                    test
                </Text>
                <TouchableHighlight
                    style={styles.buttonStyle}
                    onPress={() => setIntroAnimationDialog(true)}>
                    <Text style={styles.buttonTextStyle}>
                        Introductie
                    </Text>
                </TouchableHighlight>

                <Dialog
                    onTouchOutside={() => {
                        setIntroAnimationDialog(false);
                    }}
                    width={0.9}
                    visible={introAnimationDialog}
                    dialogAnimation={new ScaleAnimation()}
                    onHardwareBackPress={() => {
                        setIntroAnimationDialog(false);
                        console.log('onHardwareBackPress');
                        return true;
                    }}
                    dialogTitle={
                        <DialogTitle
                            title="Introductie"
                            hasTitleBar={false}
                        />
                    }
                    actions={[
                        <DialogButton
                            title="OK"
                            onPress={() => {setIntroAnimationDialog(false);}}
                            // onPress={() => navigation.navigate('Map')}
                            key="button-1"
                        />,
                    ]}>
                    <DialogContent>
                        <View>
                            <Text>
                                Voordat je kunt beginnen aan de Hilversum HistoryHunt.
                                Moet je natuurlijk weten hoe het spel begint. De Hilversum History Hunt is een soort vossenjacht.
                                De bedoeling is dat je de route volgt opweg naar een diamant.
                                Eenmaal bij een diamant aangekomen, kun je kans maken op prijzen.
                                Dit spel maakt gebruik van GPS locatie en camera.
                                Zorg er dus voor dat je GPS locatie en camera aan staan.
                                Druk op OK om te beginnen.
                            </Text>
                            {/*<Button*/}
                            {/*    title="OK"*/}
                            {/*    onPress={() => {setIntroAnimationDialog(false);}}*/}
                            {/*    // onPress={() => navigation.navigate('Map')}*/}
                            {/*    key="button-1"*/}
                            {/*/>*/}
                        </View>
                    </DialogContent>
                </Dialog>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    introContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#307ecc',
        padding: 16,
    },
    buttonStyle: {
        minWidth: '100%',
        padding: 10,
        backgroundColor: '#f5821f',
        margin: 15,
    },
    buttonTextStyle: {
        color: 'white',
        textAlign: 'center',
    },
    titleStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
    },
});