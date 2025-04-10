import { StyleSheet, View } from "react-native";
import CircularMenu from "./widget/CircularMenu";
import CustomText from "../utils/CustomText";

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
    backgroundColor: "#3e3f40",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
  },
});
