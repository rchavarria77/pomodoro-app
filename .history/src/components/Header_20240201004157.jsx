import { Text, View } from 'react-native';

const options = ['Pomodoro', 'Short Break', 'Long Break'];

export const Header = ({ time }) => {
  return (
    <View>
      <Text>{time}</Text>
    </View>
  );
};
