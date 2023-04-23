import { Text, StyleSheet } from "react-native";

const Title = ({ text }) => {
  return <Text style={styles.title}>{text}</Text>;
}; 

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: "center",
    marginTop: 50,
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: 10,
  },
});
