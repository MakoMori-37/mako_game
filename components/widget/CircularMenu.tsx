import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

import { COLORS, images } from "../../constants";
import MenuItem from "./MenuItem";

export default function CircularMenu() {
  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <MenuItem imageLabel={images.book} textLabel="Scrabble" />
        <MenuItem imageLabel={images.comingSoon} textLabel="coming soon" />
      </View>

      <View style={styles.row}>
        <MenuItem imageLabel={images.comingSoon} textLabel="coming soon" />

        <TouchableOpacity style={styles.fingerprintButton}>
          <Image source={images.textGame} style={styles.image} />
        </TouchableOpacity>

        <MenuItem imageLabel={images.comingSoon} textLabel="coming soon" />
      </View>

      <View style={styles.row1}>
        <MenuItem imageLabel={images.comingSoon} textLabel="coming soon" />
        <MenuItem imageLabel={images.comingSoon} textLabel="coming soon" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
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
    paddingHorizontal: 55,
  },
  fingerprintButton: {
    backgroundColor: COLORS.pink,
    padding: 20,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    width: 30,
    height: 30,
  },
});
