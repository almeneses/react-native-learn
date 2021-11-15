import React from "react";
import { Text, View } from "react-native";

const GoalItem = ({ children }) => {
  return (
    <View styles={styles.listItem}>
      <Text>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default GoalItem;
