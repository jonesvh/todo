import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#262626",
    paddingTop: 15,
    paddingBottom: 15,
    borderWidth: 2,
    borderColor: "#333333",
    borderRadius: 10,
  },
  check: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconChecked: {
    fontSize: 20,
    color: "#5E60CE",
  },
  iconCheckedHoverd: {
    color: "#8284FA",
  },
  iconUnchecked: {
    color: "#4EA8DE",
    fontSize: 20,
  },
  iconUncheckedHoverd: {
    color: "#1E6F9F",
  },
  text: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
    color: "#F2F2F2",
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    textAlign: "center",
  },
  checkedText: {
    textDecorationStyle: "solid",
    textDecorationLine: "line-through",
    color: "#808080",
  },
  delete: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconDelete: {
    color: "#808080",
    fontSize: 20,
  },
  iconDeleteHoverd: {
    color: "#E25858",
  },
});
