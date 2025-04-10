import { Text } from 'react-native';

const CustomText = props => {
  return (
    <Text {...props} style={[{ fontFamily: 'Mukta-Medium' }, props.style]}>
      {props.children}
    </Text>
  );
};

export default CustomText;
