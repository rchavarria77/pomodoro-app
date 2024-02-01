import { Text, View } from 'react-native';

export const Header = ({ time }) => {
  return (
    <View>
      <Text>{time}</Text>
    </View>
  );
};
