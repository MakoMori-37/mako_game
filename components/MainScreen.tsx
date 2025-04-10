import { StyleSheet, View } from "react-native";

import CircularMenu from "./widget/CircularMenu";

import { COLORS, SIZES } from "../constants";
import { useState } from "react";
import Scrabble from "./games/Scrabble";

export default function MainScreen() {
  const [mode, setMode] = useState<Mode>('main');

  const handleSetMode = (m: Mode) => {
    setMode(m);
  };

  const handleResetMode = () => {
    setMode('main');
  };

  const DisplaySection = () => {
    switch (mode) {
      case 'main':
        return <CircularMenu onSetMode={handleSetMode} />;
      case 'gameScrabble':
        return <Scrabble onResetMode={handleResetMode} />;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      {DisplaySection()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

});
