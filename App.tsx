import { StyleSheet, View } from "react-native";
import MainScreen from "./components/MainScreen";

import { COLORS } from "./constants";

export default function App() {
  return (
    <View style={styles.container}>
      <MainScreen />
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
});
