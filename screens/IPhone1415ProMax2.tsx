import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const IPhone1415ProMax2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.iphone1415ProMax6, styles.iconLayout]}>
      <View style={styles.iphone1415ProMax6Child} />
      <View style={[styles.iphone1415ProMax6Item, styles.rectangleViewBg]} />
      <View style={[styles.iphone1415ProMax6Inner, styles.parentLayout]}>
        <View style={[styles.parent, styles.plantFlexBox1]}>
          <Text style={styles.text}>9:41</Text>
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
      <View style={[styles.rectangleView, styles.rectangleViewBg]} />
      <View style={styles.homeindicator}>
        <View style={styles.homeIndicator} />
      </View>
      <Pressable
        style={styles.ellipseParent}
        onPress={() => navigation.navigate("IPhone1415ProMax3")}
      >
        <Image
          style={[styles.groupChild, styles.pro1IconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={[styles.pro1Icon, styles.pro1IconLayout]}
          contentFit="cover"
          source={require("../assets/pro-1.png")}
        />
      </Pressable>
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Text style={[styles.plantName, styles.plantFlexBox]}>Plant name</Text>
      <View
        style={[styles.aMedicinalPlantIsAnyPlantWrapper, styles.plantFlexBox1]}
      >
        <Text style={[styles.aMedicinalPlant, styles.plantFlexBox]}>
          A medicinal plant is any plant which, in one or more of its organs,
          contains substances that can be used for therapeutic purposes or which
          are precursors for the synthesis of useful drugs
        </Text>
      </View>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("IPhone1415ProMax")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  rectangleViewBg: {
    backgroundColor: Color.colorMediumspringgreen_100,
    position: "absolute",
  },
  parentLayout: {
    width: 430,
    height: 40,
  },
  plantFlexBox1: {
    alignItems: "center",
    flexDirection: "row",
  },
  pro1IconLayout: {
    height: 51,
    position: "absolute",
  },
  plantFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
  },
  iphone1415ProMax6Child: {
    left: -31,
    width: 505,
    height: 40,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  iphone1415ProMax6Item: {
    left: -6,
    width: 482,
    height: 108,
    top: 0,
    backgroundColor: Color.colorMediumspringgreen_100,
  },
  text: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.sFProTextSemibold,
    textAlign: "left",
    color: Color.colorBlack,
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
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: 0,
    width: 430,
    height: 40,
  },
  iphone1415ProMax6Inner: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleView: {
    top: 867,
    left: -20,
    width: 500,
    height: 110,
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
  groupChild: {
    top: 2,
    left: 8,
    width: 53,
  },
  pro1Icon: {
    width: 69,
    left: 0,
    top: 0,
  },
  ellipseParent: {
    top: 42,
    left: 6,
    height: 54,
    width: 69,
    position: "absolute",
  },
  ellipseIcon: {
    top: 166,
    left: 66,
    width: 300,
    height: 300,
    position: "absolute",
  },
  plantName: {
    top: 497,
    left: 63,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.kronaOneRegular,
    position: "absolute",
  },
  aMedicinalPlant: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.mulishRegular,
    width: 361,
  },
  aMedicinalPlantIsAnyPlantWrapper: {
    top: 608,
    left: 24,
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    justifyContent: "center",
    padding: Padding.p_3xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "3.49%",
    top: "12.77%",
    right: "84.42%",
    bottom: "81.65%",
    width: "12.09%",
    height: "5.58%",
    position: "absolute",
  },
  iphone1415ProMax6: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone1415ProMax2;
