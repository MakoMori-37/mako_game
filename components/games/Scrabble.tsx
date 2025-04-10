import { View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { COLORS, SIZES } from "../../constants";
import CustomText from "../../utils/CustomText";

type Props = {
  onResetMode: () => void;
};

const Scrabble: React.FC<Props> = ({ onResetMode }) => {
  return (
    <View>
      <Ionicons
        onPress={onResetMode}
        name="close-circle-outline"
        size={25}
        color={COLORS.blurPink}
      />
      <CustomText>test</CustomText>
    </View>
  );
};

export default Scrabble;

const styles = StyleSheet.create({});
