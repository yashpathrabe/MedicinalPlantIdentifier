import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Padding, Border } from "../GlobalStyles";

const IPhone1415ProMax3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.iphone1415ProMax8, styles.iconLayout]}>
      <View style={styles.iphone1415ProMax8Child} />
      <View style={[styles.iphone1415ProMax8Item, styles.iphone1415Position]} />
      <View style={[styles.iphone1415ProMax8Inner, styles.parentLayout]}>
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
      <View style={styles.rectangleView} />
      <View style={styles.homeindicator}>
        <View style={styles.homeIndicator} />
      </View>
      <Image
        style={styles.user1Icon}
        contentFit="cover"
        source={require("../assets/user-1.png")}
      />
      <Text style={[styles.name, styles.nameFlexBox]}>name</Text>
      <Pressable
        style={[styles.logOutWrapper, styles.parentFlexBox]}
        onPress={() => navigation.navigate("IPhone1415ProMax5")}
      >
        <Text style={[styles.logOut, styles.logOutTypo]}>Log out</Text>
      </Pressable>
      <Text style={[styles.testuser01gmailcom, styles.logOutTypo]}>
        TestUser01@gmail.com
      </Text>
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
  iphone1415Position: {
    top: 0,
    position: "absolute",
  },
  parentLayout: {
    width: 430,
    height: 40,
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  nameFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  logOutTypo: {
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
  },
  iphone1415ProMax8Child: {
    left: -31,
    width: 505,
    height: 40,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  iphone1415ProMax8Item: {
    left: -6,
    backgroundColor: Color.colorMediumspringgreen_100,
    width: 482,
    height: 211,
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
  iphone1415ProMax8Inner: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleView: {
    top: 867,
    left: -20,
    backgroundColor: "#01c063",
    width: 500,
    height: 110,
    position: "absolute",
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
  user1Icon: {
    top: 40,
    left: 71,
    width: 279,
    height: 300,
    position: "absolute",
  },
  name: {
    top: 363,
    left: 133,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.kronaOneRegular,
    color: Color.colorBlack,
  },
  logOut: {
    fontFamily: FontFamily.kronaOneRegular,
    textAlign: "left",
  },
  logOutWrapper: {
    top: 795,
    left: 32,
    borderRadius: Border.br_xl,
    backgroundColor: "#00cc6a",
    width: 355,
    justifyContent: "center",
    padding: Padding.p_3xs,
    position: "absolute",
  },
  testuser01gmailcom: {
    top: 436,
    left: 79,
    fontFamily: FontFamily.mulishRegular,
    textAlign: "center",
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
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
  iphone1415ProMax8: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    width: "100%",
  },
});

export default IPhone1415ProMax3;
