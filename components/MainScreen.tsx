import { StyleSheet, Text, View } from "react-native";
import CircularMenu from "./widget/CircularMenu";

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Text>TEST</Text>
      <CircularMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
