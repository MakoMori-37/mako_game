import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import dayjs from "dayjs";

import { images, COLORS, SIZES } from "../../constants";

import CustomText from "../../utils/CustomText";
import MenuItem from "./MenuItem";

type Props = {
  onSetMode: (m: Mode) => void;
};

const CircularMenu: React.FC<Props> = ({ onSetMode }) => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>MAKO GAME</CustomText>

      <CustomText style={styles.dateText}>
        {dayjs().format("dddd MMMM YYYY")}
      </CustomText>
      <View style={styles.timeContainer}>
        <CustomText style={styles.timeText}>
          {dayjs().format("HH:mm")}
        </CustomText>
      </View>
      <View style={styles.row1}>
        <MenuItem
          imageLabel={images.book}
          textLabel="Scrabble"
          onSetMode={onSetMode}
        />
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
};

export default CircularMenu;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
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
  title: {
    color: COLORS.blurPink,
    fontSize: SIZES.xLarge,
    fontWeight: "bold",
  },
  dateText: {
    fontSize: 18,
    color: COLORS.blurPink,
    marginTop: 30,
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 60,
  },
  timeText: {
    fontSize: 48,
    fontWeight: "bold",
    color: COLORS.blurPink,
    marginVertical: 10,
  },
});
