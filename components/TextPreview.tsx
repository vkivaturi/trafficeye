import { useState } from 'react';
import { Pressable, FlatList, Switch, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Modal, Alert } from 'react-native';
import React from 'react';
import { Avatar, Card, Paragraph } from 'react-native-paper';
import { ImageThumb } from './ImageThumb';

export const TextPreview = ({ timestamp, locationName, landmark, photo, retakePicture }: any) => {

  console.log("Text preview screen photo.uri - ", photo.uri, photo.width);

  let isDisplay = false;
  const [data, setData] = useState([
    { label: 'Wrong side driving', selected: false },
    { label: 'No helmet while driving' },
    { label: 'Illegal parking' },
    { label: 'Traffic lights not working' },
  ]);
  const onUpdateValue = (index: number, value: boolean) => {
    console.log(data, index, value);
    data[index].selected = value;
    return setData([...data]);
  };

  const renderItem = ({ item, index }: any) => (
    <Item
      key={index}
      index={index}
      selected={item.selected}
      label={item.label}
      onUpdateValue={onUpdateValue}
    />
  );

  const Item = ({ index, label, selected, onUpdateValue }: any) => (
    <View style={styles.item}>
      <Text style={styles.title}>{label}</Text>
      <Switch
        value={selected}
        onValueChange={(value) => onUpdateValue(index, value)}
      />
    </View>
  );

  const Flex = () => {
    return (
      <View style={[styles.container, {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: "column"
      }]}>
        <View style={{ flex: 4 }}>
          <View style={[styles.container, {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "row"
          }]}>
            <View style={{ flex: 1, backgroundColor: "white" }}>
              <ImageThumb photo = {photo}></ImageThumb>
            </View>
            <View style={{ flex: 1, backgroundColor: "white" }}>
              <Card>
                <View style={{ backgroundColor: "white" }}>
                  <Card.Title title={"Location"} left={(props) => <Avatar.Icon {...props} icon="map-marker" />} />
                  <Card.Content>
                    <Paragraph>{locationName}</Paragraph>
                    <Paragraph>{landmark}</Paragraph>
                    <Paragraph>{timestamp}</Paragraph>
                  </Card.Content>
                </View>
              </Card>
            </View>
          </View>
        </View>
        <View style={{ flex: 7 }}>
          <OptionsList></OptionsList>
        </View>
        <View style={[styles.fixToText, { flex: 1 }]}>
          <View style={[styles.container, {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "row"
          }]}>
            <Pressable style={[styles.button, { flex: 1, backgroundColor: 'green', }]} onPress={() => Alert.alert('Right button pressed')}>
              <Text style={styles.buttonText}>Share</Text>
            </Pressable>
            <Pressable style={[styles.button, { flex: 1, backgroundColor: 'orange' }]}
              onPress={retakePicture}>
              <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  };

  const OptionsList = () => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={{ flex: 1 }}>
        <View style={{ flex: 1, marginTop: 2 }}>
          <View style={styles.listWrapper}>
            <View style={styles.listContainer}>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.label}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Flex></Flex>

      {isDisplay ? (<Modal animationType="slide" transparent={true}>
      </Modal>
      ) : (<Text>Test</Text>)}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  listWrapper: {
    flex: 1,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    elevation: 10,
    shadowRadius: 5,
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC55',
  },
  title: {
    color: '#000',
  },
  whiteText: {
    color: 'white',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 1,
    paddingHorizontal: 2,
    borderRadius: 4,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

});

