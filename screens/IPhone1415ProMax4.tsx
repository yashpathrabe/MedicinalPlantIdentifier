import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const IPhone1415ProMax4 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone1415ProMax3}>
      <View style={styles.iphone1415ProMax3Child} />
      <View style={[styles.iphone1415ProMax3Inner, styles.parentLayout]}>
        <View style={[styles.parent, styles.parentFlexBox]}>
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
      <View style={styles.homeindicator}>
        <View style={[styles.homeIndicator, styles.homeIndicatorPosition]} />
      </View>
      <Image
        style={styles.leaf1Icon}
        contentFit="cover"
        source={require("../assets/leaf-1.png")}
      />
      <Text
        style={[styles.medicinalPlantIdentifier, styles.getStartedTypo]}
      >{`MEDICINAL 
PLANT
IDENTIFIER`}</Text>
      <Image
        style={styles.tglass1Icon}
        contentFit="cover"
        source={require("../assets/tglass-1.png")}
      />
      <Pressable
        style={[styles.getStartedWrapper, styles.homeIndicatorPosition]}
        onPress={() => navigation.navigate("IPhone1415ProMax5")}
      >
        <Text style={[styles.getStarted, styles.getStartedTypo]}>
          Get started
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    width: 430,
    height: 40,
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  homeIndicatorPosition: {
    left: "50%",
    position: "absolute",
  },
  getStartedTypo: {
    textAlign: "center",
    fontFamily: FontFamily.kronaOneRegular,
    color: Color.colorBlack,
  },
  iphone1415ProMax3Child: {
    left: -31,
    width: 505,
    height: 40,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
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
  iphone1415ProMax3Inner: {
    left: 0,
    top: 0,
    width: 430,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
    width: 134,
    height: 5,
  },
  homeindicator: {
    top: 898,
    left: 20,
    width: 390,
    height: 34,
    position: "absolute",
  },
  leaf1Icon: {
    top: 165,
    left: 90,
    width: 192,
    height: 245,
    position: "absolute",
  },
  medicinalPlantIdentifier: {
    marginLeft: -148,
    top: 574,
    fontSize: FontSize.size_21xl,
    width: 297,
    height: 160,
    left: "50%",
    position: "absolute",
  },
  tglass1Icon: {
    top: 104,
    left: -56,
    width: 542,
    height: 452,
    position: "absolute",
  },
  getStarted: {
    fontSize: FontSize.size_5xl,
  },
  getStartedWrapper: {
    marginLeft: -177,
    top: 785,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorMediumspringgreen_100,
    width: 355,
    height: 50,
    justifyContent: "center",
    padding: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
  },
  iphone1415ProMax3: {
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone1415ProMax4;
