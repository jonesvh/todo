import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    alignItems: "center",
  },
  top: {
    height: 173,
    backgroundColor: "#0D0D0D",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 110,
    height: 32,
    resizeMode: "stretch"
  },
  new: {
    position: "absolute", // Permite posicionar sobre as duas áreas
    top: 146, //altura do topo menos a metade da altura do input
    width: 327,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    height: 54,
    width: 271,
    backgroundColor: "#262626",
    borderRadius: 5,
    fontSize: 16,
    paddingLeft: 15,
    color: "#F2F2F2",
    borderColor: "#0D0D0D",
    borderWidth: 1,
    fontFamily: "Inter_400Regular"
  },

  inputFocused: {
    borderColor: "#5E60CE",
  },
  count: {
    marginTop: 50,
    width: 327,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  countItem: {
    flexDirection: "row",
  },
  textCreated: {
    color: "#4EA8DE",
    fontSize: 16,
    fontFamily: "Inter_700Bold"
  },
  textDone: {
    color: "#8284FA",
    fontSize: 16,
    fontFamily: "Inter_700Bold"
  },
  counter: {
    backgroundColor: "#333333",
    marginLeft: 5,
    height: 19,
    width: 25,
    padding: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textCounter: {
    color: "#D9D9D9",
    fontSize: 14,
    fontFamily: "Inter_700Bold"
  },
  line:{
    width:327,
    borderBottomColor: "#808080",
    borderBottomWidth: 0.5,
    marginTop: 10,
    marginBottom: 15,
  },
  taskList:{
    width:327,
  }
});
