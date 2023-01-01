import React, { useState } from 'react';
import ViewShot from "react-native-view-shot";
import * as Sharing from "expo-sharing";
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

//Component adds text to image and also allows for saving / sharing of the updated photo

export const ImageWithText = ({photoUri, photoWidth, photoHeight, timestamp, locationName, locationCity, locationPostalCode, landmark, notes} : any) => {

    const viewShot = React.useRef();

    const screenWidth = Dimensions.get("window").width;
    const screenHeight = Dimensions.get("window").height;

    const captureAndShareScreenshot = () => {
        viewShot.current.capture().then((uri: string) => {
            console.log("do something with ", uri);
            Sharing.shareAsync("file://" + uri);
        }),
            (error: any) => console.error("Sorry, error in snapshot", error);
    };

    return (
        <View>
            <ViewShot
                ref={viewShot}
                options={{ format: "jpg", quality: 0.9 }}
            >
                <View>
                    <Image
                        source={{ uri: photoUri }}
                        style={{ width: screenWidth, height: screenHeight-200}}
                    ></Image>
                    <Text style={{color: 'white'}}>{timestamp} - {locationName}, {locationCity}, {locationPostalCode} - Near {landmark}</Text>
                    <Text style={{color: 'white'}}>Note - {notes}</Text>
                </View>
            </ViewShot>

            <TouchableOpacity
                onPress={captureAndShareScreenshot}>
                <Text style={{color: 'white'}}>Take view shot</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 5,
        textAlign: 'center',
        color: 'green'
    },
});