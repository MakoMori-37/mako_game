import { View, StyleSheet, ImageBackground, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { COLORS, SIZES, images } from "../../constants";
import CustomText from "../../utils/CustomText";

type Props = {
  onResetMode: () => void;
};

const Scrabble: React.FC<Props> = ({ onResetMode }) => {
  return (
    <View style={styles.container}>
      <Ionicons
        onPress={onResetMode}
        name="close-circle-outline"
        size={40}
        color={COLORS.blurPink}
      />
      <ImageBackground
        source={images.nbg}
        resizeMode="cover"
        style={styles.titleContainer}
      >
        <View style={styles.titleBox}>
          <Image source={images.book} style={styles.profileImage} />
        </View>
        <View style={styles.nameBox}>
          <CustomText style={styles.nameText}>Scrabble Game</CustomText>
          <CustomText style={styles.detailText}>
            Keep saying the words until they are
          </CustomText>
          <CustomText style={styles.detailText}>
            repeated or time runs out!
          </CustomText>
        </View>
      </ImageBackground>

      <View style={styles.topContainer}>
        <View style={[styles.glassContainer, { backgroundColor: "#eff0e7" }]}>
          <CustomText style={styles.cardText}>Start</CustomText>
          <Image source={images.megaPhone} style={styles.imagePhone} />
        </View>
        <View style={[styles.glassContainer, { backgroundColor: "#e6e3dd" }]}>
          <CustomText style={styles.cardText}>Setting</CustomText>
          <Image source={images.setting} style={styles.image} />
        </View>
      </View>
    </View>
  );
};

export default Scrabble;

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
    marginTop: 30,
  },
  titleContainer: {
    marginTop: 40,
    width: "100%",
    height: 110,
    borderRadius: 10,
    backgroundColor: COLORS.secondary,
    alignItems: "center",
    gap: 50,
    padding: 10,
    flexDirection: "row",
  },
  titleBox: {
    width: 60,
    height: 60,
    borderRadius: 50,
    position: "relative",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    marginLeft: 30,
  },
  nameBox: {
    gap: 6,
  },
  detailText: {
    fontSize: 12,
    color: COLORS.blurPink,
    marginLeft: 6,
    fontFamily: "Helvetica",
  },
  nameText: {
    fontSize: 18,
    color: COLORS.blurPink,
    fontWeight: "bold",
    zIndex: 3,
    elevation: 3,
    fontFamily: "Helvetica",
  },
  image: {
    width: 60,
    height: 60,
  },
  cardText: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Helvetica",
  },
  topContainer: {
    gap: 10,
    flexDirection: "row",
    width: "100%",
    marginTop: 15,
  },
  glassContainer: {
    width: "48%",
    height: 80,
    borderRadius: 10,
    padding: 15,
    backgroundColor: "#eff0e7",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imagePhone: {
    width: 60,
    height: 60,
    marginLeft: -20,
    marginTop: 10,
  },
});
