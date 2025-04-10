import { StyleSheet, View } from "react-native";
import dayjs from "dayjs";

import CircularMenu from "./widget/CircularMenu";

import CustomText from "../utils/CustomText";
import { COLORS, SIZES } from "../constants";
import { useState } from "react";

enum Mode {
  main = "main",
  gameScrabble = "gameScrabble",
}

export default function MainScreen() {
  const [mode, setMode] = useState<Mode>(Mode.main);

  const handleSetMode = (m: Mode) => {
    setMode(m);
  };

  const handleResetMode = () => {
    setMode(Mode.main);
  };

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
  },
  timeText: {
    fontSize: 48,
    fontWeight: "bold",
    color: COLORS.blurPink,
    marginVertical: 10,
  },
});
