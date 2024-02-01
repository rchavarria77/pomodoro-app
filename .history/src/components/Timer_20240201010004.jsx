import { StyleSheet, Text, View } from 'react-native';

export const Timer = ({ time }) => {
  return (
    <View style={styles.container}>
      <Text>{time}</Text>
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
});
