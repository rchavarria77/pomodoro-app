import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const options = ['Pomodoro', 'Short Break', 'Long Break'];

export const Header = ({ setTime, currentTime, setCurrentTime }) => {
  const handlePress = (index) => {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newTime * 60);
  };

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
    width: '33%',
    borderWidth: 3,
    padding: 5,
  },
});
