import { StyleSheet, Image, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { COLORS, SIZES } from "../../constants";
import { BlurView } from "expo-blur";
import CustomText from "../../utils/CustomText";

type Props = {
  imageLabel?: number;
  textLabel?: string;
  onSetMode?: (m: Mode) => void;
};

const MenuItem: React.FC<Props> = ({ textLabel, imageLabel, onSetMode }) => {
  return (
    <BlurView
      intensity={imageLabel ? 65 : 50}
      tint="light"
      style={styles.glassContainer}
    >
      <TouchableOpacity onPress={() => onSetMode?.(Mode.gameScrabble)} style={styles.iconButton}>
        {imageLabel ? (
          <Image source={imageLabel} style={styles.image} />
        ) : (
          <Ionicons name="hourglass-outline" size={25} color={COLORS.gray3} />
        )}
        <CustomText style={styles.label}>
          {textLabel ? textLabel : "Coming soon"}
        </CustomText>
      </TouchableOpacity>
    </BlurView>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  label: {
    fontSize: SIZES.small,
    color: COLORS.white,
    marginTop: 5,
    textAlign: "center",
  },
  image: {
    width: 30,
    height: 30,
  },
  glassContainer: {
    width: 85,
    height: 85,
    borderRadius: 45,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  iconButton: {
    alignItems: "center",
    width: 90,
  },
});
