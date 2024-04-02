import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Padding, Color, FontFamily, Border } from "../GlobalStyles";

const IPhone1415ProMax = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone1415ProMax6}>
      <View style={styles.iphone1415ProMax6Child} />
      <View style={[styles.iphone1415ProMax6Item, styles.ny1IconPosition]} />
      <View style={styles.iphone1415ProMax6Inner}>
        <View style={styles.parent}>
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
      <View style={[styles.magnifyParent, styles.magnifyParentFlexBox]}>
        <Image
          style={styles.magnifyIcon}
          contentFit="cover"
          source={require("../assets/magnify.png")}
        />
        <Text style={[styles.searchForPlants, styles.howToIdentifyTypo]}>
          Search for plants
        </Text>
      </View>
      <View
        style={[styles.jeremyBishopUafzbpGtiaUnspParent, styles.jeremyLayout]}
      >
        <Image
          style={[styles.jeremyBishopUafzbpGtiaUnspIcon, styles.jeremyLayout]}
          contentFit="cover"
          source={require("../assets/jeremybishopuafzbpgtiaunsplash-1.png")}
        />
        <Image
          style={[styles.ny1Icon, styles.ny1IconPosition]}
          contentFit="cover"
          source={require("../assets/ny-1.png")}
        />
        <View
          style={[styles.howToIdentifyPlantsWrapper, styles.wrapperSpaceBlock]}
        >
          <Text style={[styles.howToIdentify, styles.howToIdentifyTypo]}>
            How to identify plants?
          </Text>
        </View>
      </View>
      <Pressable
        style={[styles.vectorWrapper, styles.wrapperSpaceBlock]}
        onPress={() => navigation.navigate("IPhone1415ProMax1")}
      >
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
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
    </View>
  );
};

const styles = StyleSheet.create({
  ny1IconPosition: {
    top: 0,
    position: "absolute",
  },
  magnifyParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  howToIdentifyTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  jeremyLayout: {
    height: 273,
    position: "absolute",
  },
  wrapperSpaceBlock: {
    padding: Padding.p_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  pro1IconLayout: {
    height: 51,
    position: "absolute",
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
    alignItems: "center",
    flexDirection: "row",
    width: 430,
    height: 40,
  },
  iphone1415ProMax6Inner: {
    width: 430,
    left: 0,
    height: 40,
    top: 0,
    position: "absolute",
  },
  rectangleView: {
    top: 867,
    left: -20,
    width: 500,
    height: 110,
    backgroundColor: Color.colorMediumspringgreen_100,
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
  magnifyIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  searchForPlants: {
    fontFamily: FontFamily.krubRegular,
    marginLeft: 10,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
  },
  magnifyParent: {
    top: 134,
    borderColor: Color.colorDarkslategray,
    borderWidth: 1,
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingRight: 158,
    paddingBottom: Padding.p_3xs,
    width: 368,
    left: 32,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    flexDirection: "row",
    position: "absolute",
  },
  jeremyBishopUafzbpGtiaUnspIcon: {
    width: 367,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  ny1Icon: {
    left: 76,
    width: 248,
    height: 196,
    display: "none",
  },
  howToIdentify: {
    fontFamily: FontFamily.kronaOneRegular,
    color: Color.colorWhite,
  },
  howToIdentifyPlantsWrapper: {
    top: 189,
    left: 2,
    borderRadius: Border.br_6xl,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    width: 366,
    height: 84,
    justifyContent: "center",
    alignItems: "center",
  },
  jeremyBishopUafzbpGtiaUnspParent: {
    top: 206,
    width: 368,
    left: 32,
  },
  vectorIcon: {
    width: 64,
    height: 66,
  },
  vectorWrapper: {
    top: 720,
    left: 153,
    borderRadius: 50,
    borderColor: Color.colorMediumspringgreen_100,
    borderWidth: 20,
    borderStyle: "solid",
    backgroundColor: Color.colorMediumspringgreen_100,
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
  iphone1415ProMax6: {
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone1415ProMax;
