import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={StyleSheet.input}
          placeholder="new migib..."
          onChangeText={changeHandler}
        />
      </View>
      <View>
        <Button
          onPress={() => submitHandler(text)}
          title="add Mibela"
          color="#DC332E"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
  },
});
