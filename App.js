import { useEffect, useState } from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Header } from './src/components/Header';
import { Timer } from './src/components/Timer';
import { Audio } from 'expo-av';

const colors = ['#F7DC6F', '#A2D9CE', '#D7BDE2'];

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState('POMO' | 'SHORT' | 'BREAK');
  const [isActive, setIsActive] = useState(false);

  const handleStartStop = () => {
    playSound();
    setIsActive(!isActive);
  };

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('./assets/click.wav')
    );
    await sound.playAsync();
  };

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if (time === 0) {
      setIsActive(false);
      setIsWorking((prev) => !prev);
      setTime(isWorking ? 300 : 1500);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors[currentTime] }]}
    >
      <View
        style={{
          paddingHorizontal: 15,
          paddingTop: Platform.OS === 'android' && 30,
          flex: 1,
        }}
      >
        <Text style={styles.text}>Pomodoro</Text>
        <Header
          setTime={setTime}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
        />
        <Timer time={time} />
        <TouchableOpacity style={styles.button} onPress={handleStartStop}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>
            {isActive ? 'STOP' : 'START'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#333333',
    padding: 15,
    borderRadius: 15,
    marginTop: 15,
  },
});
