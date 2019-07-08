import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const todoItem = this.props.todoItem;

    return (
      <TouchableOpacity
        style={styles.todoItem}
        onPress={() => this.props.toggleDone()}
      >
        <Text
          style={
            todoItem.done
              ? { color: "#FCAE8E" }
              : { color: "#FC6F36", fontWeight: "bold" }
          }
        >
          {todoItem.title}
        </Text>
        <Button
          title="X"
          color={todoItem.done ? "rgb(200, 0, 0, 0.5)" : "#FF5858"}
          onPress={() => this.props.removeTodo()}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  todoItem: {
    width: "100%",
    height: 40,
    borderBottomColor: "lightcoral",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20
  }
});
