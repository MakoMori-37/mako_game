import { StyleSheet, Text, View } from "react-native";

import { COLORS, SIZES } from "../../constants";
import CustomText from "../../utils/CustomText";
import MenuItem from "./MenuItem";

export default function CircularMenu() {
  return (
    <View style={styles.container}>
      <MenuItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
