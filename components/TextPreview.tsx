import { useState } from 'react';
import { TextInput, FlatList, Switch, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import React from 'react';

export const TextPreview = ({ timestamp, locationName, landmark }: any) => {

  const [data, setData] = useState([
    { label: 'Wrong side driving', selected: false },
    { label: 'Traffic signal jump' },
    { label: 'No helmet while driving' },
    { label: 'Illegal parking' },
    { label: 'Traffic lights not working' },
    { label: 'Number plate violation' }
  ]);
  const onUpdateValue = (index: number, value: boolean) => {
    console.log(data, index, value);
    data[index].selected = value;
    return setData([...data]);
  };

  const onChangeText = () => {

  }

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

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.whiteText}>{timestamp} -- {locationName} -- Near {landmark}</Text>
      </View>
      <View>
        <Text style={styles.whiteText}>Selected Items</Text>
        {data
          .filter((item) => item.selected)
          .map((item) => (
            <Text style={styles.whiteText} key={item.label}>{item.label}</Text>
          ))}
      </View>

      <Modal animationType="slide" transparent={true}>
        <TouchableOpacity
          activeOpacity={1}
          style={{ flex: 1 }}>
          <View style={{ flex: 1, marginTop: 200 }}>
            <View style={styles.listWrapper}>
              <View style={styles.listContainer}>
                <FlatList
                  data={data}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.label}
                />
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholder="useless placeholder"
                  />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

});

