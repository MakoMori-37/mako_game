import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

import { COLORS, images } from "../../constants";
import MenuItem from "./MenuItem";

export default function CircularMenu() {
  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <MenuItem imageLabel={images.book} textLabel="Scrabble" />
        <MenuItem />
      </View>

      <View style={styles.row}>
        <MenuItem />

        <TouchableOpacity style={styles.fingerprintButton}>
          <Image source={images.textGame} style={styles.image} />
        </TouchableOpacity>

        <MenuItem />
      </View>

      <View style={styles.row1}>
        <MenuItem />
        <MenuItem />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginVertical: 10,
    alignItems: "center",
    gap: 20,
  },
  row1: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  fingerprintButton: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
});
