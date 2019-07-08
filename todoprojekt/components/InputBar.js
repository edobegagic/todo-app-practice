import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";

const InputBar = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={todoInput => props.textChange(todoInput)}
        value={props.todoInput}
      />
      <TouchableOpacity style={styles.addButton} onPress={props.addNewTodo}>
        <Text style={styles.addButtonText}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    shadowOffset: { width: 0, height: 3 },
    shadowColor: "#171717",
    shadowOpacity: 0.1
  },
  input: {
    flex: 1,
    backgroundColor: "lightyellow",
    fontSize: 25,
    height: 35,
    color: "coral"
  },
  addButton: {
    width: 100,
    backgroundColor: "lightcoral",
    alignItems: "center",
    justifyContent: "center"
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700"
  }
});

export default InputBar;
