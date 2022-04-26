import { StyleSheet } from "react-native";
import { StatusBar } from "react-native-web";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  songtile_container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  tiles: {
    padding: 20,
    backgroundColor: "rgba(212, 230, 241,0.5)",
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    fontFamily: "FredokaOne",
  },
  songFormText: {
    fontSize: 25,
    fontFamily: "FredokaOne",
    marginStart: 15,
    marginTop: 10,
  },
});
