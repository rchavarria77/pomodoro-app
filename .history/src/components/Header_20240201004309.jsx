import { Text, TouchableOpacity, View } from 'react-native';

const options = ['Pomodoro', 'Short Break', 'Long Break'];

export const Header = ({ time }) => {
  return (
    <View>
      {options.map((option, i) => (
        <TouchableOpacity key={i}>
          <Text>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
