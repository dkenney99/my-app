import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>
          Here are some boxes of different colours
        </Text>
        <Text
          style={[
            styles.boxes,
            { backgroundColor: "#2aa198", borderRadius: 3 },
          ]}
        >
          Cyan #2aa198
        </Text>
        <Text style={[styles.boxes, { backgroundColor: "#268bd2" }]}>
          Blue #268bd2
        </Text>
        <Text style={[styles.boxes, { backgroundColor: "#d33682" }]}>
          Magenta #d33682
        </Text>
        <Text style={[styles.boxes, { backgroundColor: "#cb4b16" }]}>
          Orange #cb4b16
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    alignSelf: "flex-start",
    fontWeight: "bold",
  },
  boxes: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 10,
    color: "white",
    margin: 5,
    width: "100%",
  },
});

export default App;
