import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Atividade1 from './components/atividade1';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade1 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
