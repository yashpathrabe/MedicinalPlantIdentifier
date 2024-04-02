import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, Padding, Border, FontSize } from "../GlobalStyles";

const IPhone1415ProMax6 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone1415ProMax5}>
      <View style={styles.frame}>
        <View style={[styles.frame1, styles.framePosition]}>
          <View style={[styles.frame2, styles.framePosition]}>
            <View style={styles.frameInner}>
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
          </View>
        </View>
        <View style={[styles.frame3, styles.frame3Layout]}>
          <Pressable
            style={[styles.arrowLeft, styles.frame3Layout]}
            onPress={() => navigation.navigate("IPhone1415ProMax5")}
          >
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector4.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.frame4, styles.frameLayout1]}>
        <View style={styles.frame5}>
          <Text style={[styles.signUp, styles.signTypo]}>{`Sign Up `}</Text>
        </View>
        <View style={[styles.frame6, styles.frameLayout]}>
          <View
            style={[styles.enterYourNameWrapper, styles.enterWrapperPosition]}
          >
            <Text style={styles.enterYourName}>Enter your name</Text>
          </View>
        </View>
        <View style={[styles.frame7, styles.frameLayout]}>
          <View
            style={[styles.enterYourNameWrapper, styles.enterWrapperPosition]}
          >
            <Text style={styles.enterYourName}>Enter E-mail</Text>
          </View>
        </View>
        <View style={[styles.frame8, styles.frameLayout1]}>
          <View style={styles.homeindicator}>
            <View style={styles.homeIndicator} />
          </View>
          <View style={[styles.frameParent, styles.frameParentLayout]}>
            <View
              style={[styles.enterPasswordWrapper, styles.frameParentLayout]}
            >
              <Text style={styles.enterYourName}>Enter password</Text>
            </View>
            <Image
              style={[styles.eyeIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/eye1.png")}
            />
          </View>
          <Pressable
            style={[styles.signUpWrapper, styles.wrapperFlexBox]}
            onPress={() => navigation.navigate("IPhone1415ProMax")}
          >
            <Text style={[styles.signUp1, styles.signTypo]}>Sign Up</Text>
          </Pressable>
          <Image
            style={styles.grass1Icon}
            contentFit="cover"
            source={require("../assets/grass-1.png")}
          />
          <Image
            style={[styles.grass2Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/grass-2.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    height: 40,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frame3Layout: {
    height: 39,
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout1: {
    width: 619,
    position: "absolute",
    overflow: "hidden",
  },
  signTypo: {
    fontFamily: FontFamily.kronaOneRegular,
    color: Color.colorBlack,
  },
  frameLayout: {
    height: 45,
    width: 535,
    left: 84,
    position: "absolute",
    overflow: "hidden",
  },
  enterWrapperPosition: {
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_3xs,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
  },
  frameParentLayout: {
    height: 44,
    width: 358,
    top: 0,
    position: "absolute",
  },
  iconPosition: {
    top: 5,
    position: "absolute",
  },
  wrapperFlexBox: {
    justifyContent: "center",
    position: "absolute",
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
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: 0,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: 430,
    height: 40,
  },
  frameInner: {
    left: 31,
    width: 430,
    height: 40,
    top: 0,
    position: "absolute",
  },
  frame2: {
    width: 505,
    backgroundColor: Color.colorWhite,
  },
  frame1: {
    width: 602,
  },
  vectorIcon: {
    height: "65.9%",
    width: "66.05%",
    top: "16.92%",
    right: "16.51%",
    bottom: "17.18%",
    left: "17.44%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  arrowLeft: {
    width: 43,
    left: 0,
    top: 0,
  },
  frame3: {
    top: 45,
    left: 48,
    width: 554,
  },
  frame: {
    left: -31,
    height: 84,
    width: 602,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  signUp: {
    fontSize: FontSize.size_21xl,
    textAlign: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  frame5: {
    left: 83,
    width: 536,
    height: 50,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  enterYourName: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.mulishRegular,
    color: Color.colorDarkslategray,
    width: 211,
    textAlign: "left",
  },
  enterYourNameWrapper: {
    paddingRight: Padding.p_67xl,
    justifyContent: "center",
    position: "absolute",
    width: 358,
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_3xs,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    top: 0,
  },
  frame6: {
    top: 74,
  },
  frame7: {
    top: 143,
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
    top: 585,
    left: 68,
    width: 390,
    height: 34,
    position: "absolute",
  },
  enterPasswordWrapper: {
    paddingRight: Padding.p_70xl,
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_3xs,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    height: 44,
    justifyContent: "space-between",
  },
  eyeIcon: {
    left: 307,
    width: 36,
    height: 34,
    overflow: "hidden",
  },
  frameParent: {
    height: 44,
    left: 84,
  },
  signUp1: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
  },
  signUpWrapper: {
    top: 68,
    left: 85,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorMediumspringgreen_100,
    width: 355,
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  grass1Icon: {
    top: 306,
    width: 255,
    height: 326,
    left: 0,
    position: "absolute",
  },
  grass2Icon: {
    left: 101,
    width: 518,
    height: 663,
  },
  frame8: {
    top: 212,
    height: 668,
    left: 0,
  },
  frame4: {
    top: 101,
    left: -48,
    height: 880,
  },
  iphone1415ProMax5: {
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone1415ProMax6;
