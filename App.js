import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

// my custom components
import TaskItems from "./components/TaskItems";
import TaskInput from "./components/TaskInput";

export default function App() {
  const [taskGoals, setTaskGoals] = useState([]);

  const addTaskHandler = (taskTitle) => {
    setTaskGoals((currentTask) => [
      ...currentTask,
      { id: Math.random().toString(), value: taskTitle },
    ]);
  };

  const removeTaskHandler = (taskId) => {
    setTaskGoals((currentTask) => {
      return currentTask.filter((task) => task.id !== taskId);
    });
  };

  return (
    <View style={styles.container}>
      <TaskInput onAddTask={addTaskHandler} />
      <FlatList
        keyExtractor={(item, index) => `${item.id}-${index}`}
        data={taskGoals}
        renderItem={(items) => (
          <TaskItems
            id={items.item.id}
            title={items.item.value}
            onDelete={removeTaskHandler.bind(this, items.item.id)}
          />
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 25,
  },
});
