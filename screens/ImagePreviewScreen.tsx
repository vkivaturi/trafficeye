import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { useRoute } from '@react-navigation/native';


//export default function ImagePreviewScreen({ navigation }: RootStackScreenProps<'ImagePreview'>) {
  export default function ImagePreviewScreen() {
// const imageUrl = route.params;
  const route = useRoute();
  //const { image } = route.params;

  const [image, setImage] = useState<string | null>(() => route.params.image );
  //setImage("");


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text>This is image preview screen - {image} - this</Text>
      {image && <Text>Found image</Text>}
      <Image source={{uri: image}} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
