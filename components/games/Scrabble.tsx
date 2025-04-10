import { View, StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants";
import CustomText from "../../utils/CustomText";

type Props = {
  onResetMode: () => void;
};

const Scrabble: React.FC<Props> = ({ onResetMode }) => {
  return (
    <View>
      <CustomText>test</CustomText>
    </View>
  );
};

export default Scrabble;

const styles = StyleSheet.create({});
