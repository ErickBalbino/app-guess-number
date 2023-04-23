import { TextInput, View, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import Colors from "../utils/colors";

import PrimaryButton from "../components/PrimaryButton";

const StartGame = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (text) => {
    setEnteredNumber(text);
  };
  const resetHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      return Alert.alert(
        "Número Inválido!",
        "Número tem que ser entre 0 e 99",
        [{ text: "OK", style: "destructive", onPress: resetHandler }]
      );
    }

    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />

      <View style={styles.buttonContainer}>
        <PrimaryButton
          text="Resetar"
          onResetHandler={resetHandler}
          typeButton="reset"
        />

        <PrimaryButton
          text="Confirmar"
          onConfirmHandler={confirmInputHandler}
          typeButton="confirm"
        />
      </View>
    </View>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#4e0329",
    borderRadius: 8,
    height: 250,
    width: "100%",
    marginTop: 100,
    paddingHorizontal: 16,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 7,
    shadowOpacity: 0.25,
    justifyContent: "center",
    alignItems: "center",
  },
  numberInput: {
    width: 70,
    textAlign: "center",
    height: 50,
    fontSize: 30,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
});
