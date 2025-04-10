import { StyleSheet, View } from "react-native";
import CircularMenu from "./widget/CircularMenu";
import CustomText from "../utils/CustomText";

import { COLORS } from "../constants";

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <CustomText>MAKO GAME</CustomText>
      <CircularMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray3,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
  },
});
