import { StyleSheet, Image, TouchableOpacity } from "react-native";

import { COLORS, SIZES, images } from "../../constants";
import { BlurView } from "expo-blur";
import CustomText from "../../utils/CustomText";

type Props = {};

const MenuItem: React.FC<Props> = ({}) => {
  return (
    <BlurView intensity={65} tint="light" style={styles.glassContainer}>
      <TouchableOpacity style={styles.iconButton}>
        <Image source={images.logo} style={styles.image} />
        <CustomText style={styles.label}>Scrabble</CustomText>
      </TouchableOpacity>
    </BlurView>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  container: {},
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
