import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const IPhone1415ProMax1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone1415ProMax7}>
      <View style={styles.iphone1415ProMax7Child} />
      <View style={[styles.iphone1415ProMax7Inner, styles.parentLayout]}>
        <View style={[styles.parent, styles.parentLayout]}>
          <Text style={[styles.text, styles.textTypo]}>9:41</Text>
          <View style={styles.iconMobileSignalParent}>
            <Image
              style={styles.iconMobileSignal}
              contentFit="cover"
              source={require("../assets/icon--mobile-signal.png")}
            />
            <Image
              style={styles.wifiIcon}
              contentFit="cover"
              source={require("../assets/wifi.png")}
            />
            <Image
              style={styles.battery1Icon}
              contentFit="cover"
              source={require("../assets/battery-1.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.iphone1415ProMax7Item} />
      <View style={styles.homeindicator}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={styles.rectangleView} />
      <Text style={[styles.placeTheSubject, styles.textTypo]}>
        Place the subject in focus
      </Text>
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.imageMultipleIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/imagemultiple.png")}
      />
      <Pressable
        style={styles.camera}
        onPress={() => navigation.navigate("IPhone1415ProMax2")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/camera.png")}
        />
      </Pressable>
      <Image
        style={[styles.flashAutoIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/flashauto.png")}
      />
      <Image
        style={styles.scanHelperIcon}
        contentFit="cover"
        source={require("../assets/scanhelper.png")}
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("IPhone1415ProMax")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    width: 430,
    height: 40,
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontWeight: "600",
  },
  iconLayout1: {
    height: 50,
    width: 50,
    top: 674,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  iphone1415ProMax7Child: {
    left: -31,
    backgroundColor: Color.colorWhite,
    width: 505,
    height: 40,
    top: 0,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.sFProTextSemibold,
  },
  iconMobileSignal: {
    width: 18,
    height: 12,
  },
  wifiIcon: {
    width: 17,
    marginLeft: 8,
    height: 12,
  },
  battery1Icon: {
    width: 28,
    height: 13,
    marginLeft: 8,
    overflow: "hidden",
  },
  iconMobileSignalParent: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  parent: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: 0,
    flexDirection: "row",
  },
  iphone1415ProMax7Inner: {
    left: 0,
    top: 0,
    width: 430,
    position: "absolute",
    backgroundColor: Color.colorMediumspringgreen_100,
  },
  iphone1415ProMax7Item: {
    top: 867,
    left: -20,
    width: 500,
    height: 110,
    position: "absolute",
    backgroundColor: Color.colorMediumspringgreen_100,
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
    width: 134,
    height: 5,
    position: "absolute",
  },
  homeindicator: {
    top: 898,
    left: 20,
    width: 390,
    height: 34,
    position: "absolute",
  },
  rectangleView: {
    top: 109,
    left: 25,
    borderRadius: Border.br_xl,
    backgroundColor: "#d9d9d9",
    width: 379,
    height: 524,
    position: "absolute",
  },
  placeTheSubject: {
    top: 586,
    left: 67,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.krubSemiBold,
    position: "absolute",
  },
  ellipseIcon: {
    top: 657,
    left: 165,
    width: 100,
    height: 100,
    position: "absolute",
  },
  imageMultipleIcon: {
    left: 42,
  },
  camera: {
    left: 186,
    top: 681,
    width: 58,
    height: 54,
    position: "absolute",
  },
  flashAutoIcon: {
    left: 323,
  },
  scanHelperIcon: {
    top: 225,
    left: 89,
    width: 252,
    height: 265,
    position: "absolute",
    overflow: "hidden",
  },
  icon1: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  vector: {
    left: "3.26%",
    top: "4.72%",
    right: "84.65%",
    bottom: "89.7%",
    width: "12.09%",
    height: "5.58%",
    position: "absolute",
  },
  iphone1415ProMax7: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorMediumspringgreen_100,
  },
});

export default IPhone1415ProMax1;
