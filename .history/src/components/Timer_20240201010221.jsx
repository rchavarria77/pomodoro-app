import { StyleSheet, Text, View } from 'react-native';

export const Timer = ({ time }) => {
  const formattedTime = `${Math.floor(time / 60).toString()}`;
  return (
    <View style={styles.container}>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
    padding: 15,
    borderRadius: 15,
  },
  time: {
    fontSize: 80,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
  },
});
