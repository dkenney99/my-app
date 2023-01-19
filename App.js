import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import ColorBox from "./components/ColorBox";

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>
          Here are some boxes of different colours
        </Text>
        <ColorBox hexCode="#2aa198" colorName="Cyan" />
        <ColorBox hexCode="#268bd2" colorName="Blue" />
        <ColorBox hexCode="#d33682" colorName="Magenta" />
        <ColorBox hexCode="#cb4b16" colorName="Orange" />
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
    marginBottom: 10,
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
