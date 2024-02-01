import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const colors = ['#F7DC6F', '#A2D9CE', '#D7BDE2'];
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingTop: Platform.OS === 'android' && 30 }}>
        <Text style={styles.text}>Pomodoro</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: { fontSize: 32, fontWeight: 'bold' },
});
