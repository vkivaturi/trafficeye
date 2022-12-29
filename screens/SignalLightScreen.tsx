import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { TextPreview } from '../components/TextPreview';

export default function SignalLightScreen() {
  return (
    <View style={styles.container}>
      <TextPreview timestamp="2022-12-31 19:31" locationName="Serlnmagksd Hyderabad" landmark="Wipro circle" />
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
