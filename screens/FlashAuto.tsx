import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const FlashAuto = () => {
  return (
    <View style={styles.flashAuto}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    position: "absolute",
    height: "87.5%",
    width: "80%",
    top: "8.33%",
    right: "7.5%",
    bottom: "4.17%",
    left: "12.5%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  flashAuto: {
    flex: 1,
    width: "100%",
    height: 24,
    overflow: "hidden",
  },
});

export default FlashAuto;
