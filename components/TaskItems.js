import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const TaskItems = (props) => {  
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.card}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 8,
    marginTop: 8,
    backgroundColor: "#fefe",
  },
});

export default TaskItems;
