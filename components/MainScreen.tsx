import { StyleSheet, View } from "react-native";
import CircularMenu from "./widget/CircularMenu";
import CustomText from "../utils/CustomText";

import { COLORS, SIZES } from "../constants";

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>MAKO GAME</CustomText>
      <CircularMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: COLORS.lightBlue,
    fontSize: SIZES.xxLarge,
  },
});
