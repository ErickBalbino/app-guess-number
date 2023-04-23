import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../utils/colors";

const PrimaryButton = ({
  text,
  onConfirmHandler,
  onResetHandler,
  typeButton,
}) => {
  const pressHandler = () => {
    if (typeButton == "confirm") {
      return onConfirmHandler();
    }

    onResetHandler();
  };

  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.innerContainer]
            : styles.innerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.button}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 10,
    margin: 10,
    overflow: "hidden",
  },

  innerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 10,
    paddingHorizontal: 16,
    elevation: 2,
  },

  button: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    width: 110,
  },

  pressed: {
    opacity: 0.75,
  },
});
