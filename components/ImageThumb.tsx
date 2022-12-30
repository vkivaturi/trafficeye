import React, { useState } from 'react';
import { Dimensions, Image, Modal, StyleSheet, Pressable, View } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

//Component that renders thumb image taken and allows user to expand on click and zoom as well

export const ImageThumb = ({photo}: any) => {
    const [modalVisible, setModalVisible] = useState(false);
    const screenWidth = Dimensions.get("window").width;
    const screenHeight = Dimensions.get("window").height;

    console.log("Image thumb screen photo.uri - ", photo.uri, photo.width);

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Pressable
                            onPress={() => setModalVisible(!modalVisible)}>
                            <ImageZoom
                                cropWidth={screenWidth}
                                cropHeight={screenHeight}
                                imageWidth={500}
                                imageHeight={500}
                                maxOverflow={0}
                                onClick={() => setModalVisible(!modalVisible)}
                            >
                                <Image
                                    source={{ uri: photo.uri }}
                                    style={{ width: 500, height: 500 }}
                                ></Image>
                            </ImageZoom>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <Pressable
                onPress={() => setModalVisible(true)}>
                <Image
                    source={{ uri: photo.uri }}
                    style={{ width: 200, height: 200 }}
                ></Image>

            </Pressable>
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