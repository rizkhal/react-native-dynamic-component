import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const TaskInput = (props) => {
  const [enteredTask, setEnteredTask] = useState(null);

  const taskInputHandler = (enteredText) => {
    setEnteredTask(enteredText);
  };

  const addTaskHandler = () => {
    if (enteredTask !== null) {
      props.onAddTask(enteredTask);
      setEnteredTask(null);
    } else {
      alert("Task field can't be empty");
    }
  };

  return (
    <View style={styles.formGroup}>
      <TextInput
        placeholder="Add new task"
        style={styles.formControl}
        onChangeText={taskInputHandler}
        value={enteredTask}
      />
      <Button title="+" onPress={addTaskHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  formControl: {
    width: "93%",
    padding: 3,
    borderWidth: 1,
    borderColor: "#f1f1f1",
  },
  formGroup: {
    marginBottom: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default TaskInput;
