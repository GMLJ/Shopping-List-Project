import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Sandbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>One</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingTop: 40,
    backgroundColor: "#ddd",
  },
  boxOne: { backgroundColor: "violet", padding: 10, flex: 5 },
  boxTwo: { backgroundColor: "gold", padding: 20, flex: 1 },
  boxThree: { backgroundColor: "coral", padding: 30, flex: 1 },
  boxFour: { backgroundColor: "skyblue", padding: 40, flex: 1 },
});

export default Sandbox;
