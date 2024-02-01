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
    backgroundColor: '#F2F2F2',
  },
});
