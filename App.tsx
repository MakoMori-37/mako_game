import { StyleSheet, View } from "react-native";
import MainScreen from "./components/MainScreen";

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
    backgroundColor: "#3e3f40",
    alignItems: "center",
    justifyContent: "center",
  },
});
