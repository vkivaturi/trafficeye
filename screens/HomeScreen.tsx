import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { ImageWithText } from '../components/ImageWithText';
import { Text, View } from '../components/Themed';

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <ImageWithText></ImageWithText>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
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
