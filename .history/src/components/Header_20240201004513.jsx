import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const options = ['Pomodoro', 'Short Break', 'Long Break'];

export const Header = ({ time }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {options.map((option, i) => (
        <TouchableOpacity key={i} style={styles.itemStyle}>
          <Text>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    borderWidth: 3,
  },
});
