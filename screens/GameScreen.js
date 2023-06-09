import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";

const GameScreen = ({ chosenNumber }) => {
  return (
    <View style={styles.screen}>
      <Title text="Opponent's Guess" />

      <View>
        <Text>Higher or Lower?</Text>
      </View>

      <View></View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});
