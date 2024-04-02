import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const ArrowLeft = () => {
  return (
    <View style={styles.arrowLeft}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    position: "absolute",
    height: "65.83%",
    width: "65.83%",
    top: "17.08%",
    right: "16.67%",
    bottom: "17.08%",
    left: "17.5%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  arrowLeft: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
});

export default ArrowLeft;
