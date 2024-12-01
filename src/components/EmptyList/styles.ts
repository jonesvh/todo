import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    padding: 10,
  },
  image: {
    width: 56,
    height: 56,
    resizeMode: "stretch",
  },
  text1: {
    marginTop: 20,
    color: "#808080",
    fontWeight: "bold",
    fontSize: 14,
    fontFamily: "Inter_700Bold",
  },
  text2: {
    color: "#808080",
    fontSize: 14,
    fontFamily: "Inter_400Regular",
  },
});
