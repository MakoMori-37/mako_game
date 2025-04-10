import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Modal from "react-native-modal";
import Ionicons from "@expo/vector-icons/Ionicons";
// import Snackbar from "react-native-snackbar";

import CustomText from "../../utils/CustomText";
import { COLORS, SIZES, SHADOWS } from "../../constants";

type Props = {
  timeValue: number;
  isOpen: boolean;
  onClose: () => void;
  onSetTime: (t: number) => void;
};

const SettingsModal: React.FC<Props> = ({
  isOpen,
  onClose,
  timeValue,
  onSetTime,
}) => {
  const [time, setTime] = useState("3");

  const handlePress = () => {
    if (!time.trim()) {
      console.log("first");
      Alert.alert("แจ้งเตือน", "ข้อมูลเวลาไม่ถูกต้อง", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      return;
    }
    onSetTime(+time);
  };

  useEffect(() => {
    if (timeValue.toString() !== time) {
      setTime(timeValue.toString());
    }
  }, [timeValue]);

  return (
    <>
      <Modal isVisible={isOpen} onBackdropPress={onClose} propagateSwipe={true}>
        <View style={styles.modal}>
          <View style={styles.line} />
          <View style={styles.dateBoxLeft}>
            <Ionicons name="time-outline" size={40} color={COLORS.blurPink} />
            <CustomText style={styles.dateText}>Time</CustomText>
            <View style={styles.inputBox}>
              <TextInput
                value={time}
                style={styles.input}
                autoCapitalize="none"
                keyboardType="numeric"
                onChangeText={(text) => setTime(text)}
              />
            </View>
            <CustomText style={styles.dateText}>second</CustomText>
          </View>
          <View style={styles.line} />

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
              <CustomText style={styles.buttonText}>Save</CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default SettingsModal;

const styles = StyleSheet.create({
  modal: {
    padding: 10,
    borderRadius: SIZES.large,
    borderWidth: 4,
    borderColor: COLORS.white,
    backgroundColor: COLORS.gray3,
  },
  dateBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateBoxLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  dateText: {
    color: COLORS.blurPink,
    marginLeft: 15,
  },
  line: {
    width: "80%",
    alignSelf: "center",
    borderWidth: 0.3,
    opacity: 0.3,
    marginVertical: 10,
    borderColor: COLORS.blurPink,
  },
  imageGlucose: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  inputBox: {
    width: 85,
    height: 25,
    borderRadius: 22,
    backgroundColor: "#ebeced",
    ...SHADOWS.xLarge,
    marginLeft: 10,
  },
  input: {
    color: COLORS.sky,
    textAlign: "center",
    marginTop: 4,
  },

  buttonContainer: {
    // position: 'absolute',
    // bottom: 20,
    marginTop: 30,
    alignSelf: "center",
    width: "80%",
  },
  button: {
    borderRadius: 16,
    backgroundColor: "transparent",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  buttonText: {
    color: COLORS.sky,
    fontSize: 16,
    textAlign: "center",
  },
});
