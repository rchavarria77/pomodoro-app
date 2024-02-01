import { useState } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/Header';

const colors = ['#F7DC6F', '#A2D9CE', '#D7BDE2'];

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState('POMO' | 'SHORT' | 'BREAK');

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingTop: Platform.OS === 'android' && 30 }}>
        <Text style={styles.text}>Pomodoro</Text>
        <Text style={styles.text}>{time}</Text>
        <Header
          setTime={setTime}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
        />
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
