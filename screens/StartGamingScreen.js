import { TextInput, View } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

const StartGamingScreen = () => {
  return (
    <View>
      <TextInput />

      <PrimaryButton>Resetar</PrimaryButton>
      <PrimaryButton>Confimar</PrimaryButton>
    </View>
  );
};

export default StartGamingScreen;
