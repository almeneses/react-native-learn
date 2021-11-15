import React, { useState } from "react";
import {
  Button,
  Platform,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState(
    "Open up App.js to start working on your app!"
  );
  const [inputValue, setInputValue] = useState('');

  const goalInputHandler = (value) => setInputValue(value);

  return (
    <SafeAreaView style={styles.mainAreaView}>
      <View style={styles.container}>
        <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler} />
        <Text>{outputText}</Text>
        <Button
          title="Change Text"
          onPress={() => setOutputText("text changed :D")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
