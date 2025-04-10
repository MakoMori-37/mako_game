import { StyleSheet, Image, TouchableOpacity } from "react-native";

import { COLORS, SIZES } from "../../constants";
import { BlurView } from "expo-blur";
import CustomText from "../../utils/CustomText";

type Props = {
  imageLabel: number;
  textLabel: string;
};

const MenuItem: React.FC<Props> = ({ textLabel, imageLabel }) => {
  return (
    <BlurView intensity={65} tint="light" style={styles.glassContainer}>
      <TouchableOpacity style={styles.iconButton}>
        <Image source={imageLabel} style={styles.image} />
        <CustomText style={styles.label}>{textLabel}</CustomText>
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
