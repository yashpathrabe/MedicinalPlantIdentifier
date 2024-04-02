import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const IPhone1415ProMax5 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone1415ProMax4}>
      <View style={[styles.frame, styles.frameLayout6]}>
        <View style={[styles.frame1, styles.frameLayout5]}>
          <View style={[styles.frame2, styles.frameLayout4]}>
            <View style={[styles.frame3, styles.framePosition2]}>
              <View style={[styles.frameChild, styles.framePosition1]} />
            </View>
            <View style={[styles.frame4, styles.frameLayout3]}>
              <Image
                style={[styles.oo1Icon, styles.frameLayout5]}
                contentFit="cover"
                source={require("../assets/oo-1.png")}
              />
              <View style={[styles.frame5, styles.frameLayout3]}>
                <View style={[styles.frameInner, styles.frameLayout3]}>
                  <View style={styles.parent}>
                    <Text style={[styles.text, styles.textClr]}>9:41</Text>
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
          </View>
        </View>
        <View style={[styles.frame6, styles.frame6Layout]}>
          <Text style={[styles.welcomeBack, styles.orTypo]}>Welcome back</Text>
          <Text style={[styles.loginToYour, styles.orTypo]}>
            login to your account
          </Text>
        </View>
      </View>
      <View style={[styles.frame7, styles.frameLayout2]}>
        <View style={[styles.frame8, styles.frameLayout1]}>
          <View style={[styles.enterEMailWrapper, styles.enterWrapperPosition]}>
            <Text style={styles.enterEMail}>Enter E-mail</Text>
          </View>
          <View style={[styles.frameParent, styles.frameLayout1]}>
            <View
              style={[styles.enterPasswordWrapper, styles.enterWrapperPosition]}
            >
              <Text style={styles.enterEMail}>Enter password</Text>
            </View>
            <Image
              style={styles.eyeIcon}
              contentFit="cover"
              source={require("../assets/eye.png")}
            />
          </View>
          <View style={styles.frame9}>
            <Pressable
              style={styles.loginWrapper}
              onPress={() => navigation.navigate("IPhone1415ProMax")}
            >
              <Text style={[styles.login, styles.loginTypo]}>Login</Text>
            </Pressable>
          </View>
        </View>
        <View style={[styles.frame10, styles.frameLayout2]}>
          <View style={[styles.homeindicator, styles.frameLayout2]}>
            <View style={styles.homeIndicator} />
          </View>
          <View style={styles.frame11}>
            <View style={[styles.frame12, styles.frameLayout]}>
              <View style={[styles.frame13, styles.framePosition]}>
                <Text style={[styles.or, styles.orTypo]}>OR</Text>
              </View>
              <View style={[styles.frame14, styles.frameLayout]}>
                <View style={styles.frame15}>
                  <Pressable
                    style={[styles.googleLogo, styles.logoLayout]}
                    onPress={() => navigation.navigate("IPhone1415ProMax")}
                  >
                    <Image
                      style={[styles.icon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/google-logo.png")}
                    />
                  </Pressable>
                  <Pressable
                    style={[styles.facebookLogo, styles.logoLayout]}
                    onPress={() => navigation.navigate("IPhone1415ProMax")}
                  >
                    <Image
                      style={styles.iconLayout}
                      contentFit="cover"
                      source={require("../assets/facebook-logo.png")}
                    />
                  </Pressable>
                  <Pressable
                    style={styles.appleLogo}
                    onPress={() => navigation.navigate("IPhone1415ProMax")}
                  >
                    <Image
                      style={styles.iconLayout}
                      contentFit="cover"
                      source={require("../assets/apple-logo.png")}
                    />
                  </Pressable>
                </View>
              </View>
            </View>
            <View style={styles.frame16}>
              <Pressable
                style={styles.createAccount}
                onPress={() => navigation.navigate("IPhone1415ProMax6")}
              >
                <Text style={[styles.createAccount1, styles.loginTypo]}>
                  Create Account
                </Text>
              </Pressable>
              <View style={[styles.frame17, styles.framePosition]}>
                <Text
                  style={[styles.dontHaveAn, styles.orTypo]}
                >{`Don’t have an Account? `}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout6: {
    width: 518,
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout5: {
    height: 402,
    top: 0,
  },
  frameLayout4: {
    width: 505,
    position: "absolute",
  },
  framePosition2: {
    height: 100,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  framePosition1: {
    height: 40,
    top: 60,
    left: 0,
  },
  frameLayout3: {
    width: 430,
    position: "absolute",
  },
  textClr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  frame6Layout: {
    height: 78,
    width: 458,
  },
  orTypo: {
    fontFamily: FontFamily.kronaOneRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  frameLayout2: {
    width: 390,
    position: "absolute",
  },
  frameLayout1: {
    width: 358,
    position: "absolute",
  },
  enterWrapperPosition: {
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_3xs,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    width: 358,
    alignItems: "center",
    flexDirection: "row",
    top: 0,
    position: "absolute",
  },
  loginTypo: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.kronaOneRegular,
  },
  frameLayout: {
    width: 270,
    position: "absolute",
    overflow: "hidden",
  },
  framePosition: {
    height: 25,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  logoLayout: {
    width: 50,
    height: 50,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  frameChild: {
    width: 505,
    position: "absolute",
    backgroundColor: Color.colorWhite,
    height: 40,
    top: 60,
  },
  frame3: {
    width: 505,
    position: "absolute",
  },
  oo1Icon: {
    marginLeft: -143,
    width: 287,
    left: "50%",
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.sFProTextSemibold,
    textAlign: "left",
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
    height: 40,
    top: 60,
    left: 0,
  },
  frame5: {
    height: 100,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  frame4: {
    left: 31,
    height: 402,
    top: 0,
    overflow: "hidden",
  },
  frame2: {
    left: 13,
    height: 402,
    top: 0,
    overflow: "hidden",
  },
  frame1: {
    left: 0,
    width: 518,
    position: "absolute",
    overflow: "hidden",
  },
  welcomeBack: {
    marginLeft: -229,
    fontSize: 36,
    textAlign: "center",
    height: 78,
    width: 458,
    left: "50%",
    top: 0,
  },
  loginToYour: {
    marginLeft: -138,
    top: 53,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    left: "50%",
  },
  frame6: {
    top: 407,
    left: 30,
    position: "absolute",
    overflow: "hidden",
  },
  frame: {
    top: -60,
    left: -44,
    height: 485,
  },
  enterEMail: {
    fontFamily: FontFamily.mulishRegular,
    color: Color.colorDarkslategray,
    width: 211,
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  enterEMailWrapper: {
    marginLeft: -179,
    paddingRight: Padding.p_67xl,
    justifyContent: "center",
    left: "50%",
  },
  enterPasswordWrapper: {
    paddingRight: Padding.p_70xl,
    justifyContent: "space-between",
    left: 0,
  },
  eyeIcon: {
    top: 5,
    left: 307,
    width: 36,
    height: 35,
    position: "absolute",
    overflow: "hidden",
  },
  frameParent: {
    top: 64,
    height: 45,
    left: 0,
  },
  login: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  loginWrapper: {
    backgroundColor: Color.colorMediumspringgreen_100,
    width: 355,
    padding: Padding.p_3xs,
    justifyContent: "center",
    borderRadius: Border.br_xl,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    top: 0,
    position: "absolute",
  },
  frame9: {
    top: 128,
    left: 1,
    width: 356,
    height: 50,
    position: "absolute",
    overflow: "hidden",
  },
  frame8: {
    left: 16,
    height: 178,
    top: 0,
    overflow: "hidden",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
    width: 134,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  homeindicator: {
    top: 249,
    height: 34,
    left: 0,
  },
  or: {
    marginLeft: -19,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    left: "50%",
    top: 0,
  },
  frame13: {
    left: 115,
    width: 40,
  },
  icon: {
    marginLeft: -22.5,
  },
  googleLogo: {
    left: "50%",
  },
  facebookLogo: {
    left: 0,
  },
  appleLogo: {
    left: 220,
    width: 45,
    height: 50,
    top: 0,
    position: "absolute",
  },
  frame15: {
    width: 265,
    height: 50,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frame14: {
    top: 52,
    height: 50,
    left: 0,
  },
  frame12: {
    left: 22,
    height: 102,
    top: 0,
  },
  createAccount1: {
    color: "#01c164",
    textAlign: "center",
  },
  createAccount: {
    left: 35,
    top: 47,
    position: "absolute",
  },
  dontHaveAn: {
    fontSize: FontSize.size_xl,
    textAlign: "center",
    left: 0,
    top: 0,
  },
  frame17: {
    width: 314,
    left: 0,
  },
  frame16: {
    top: 150,
    height: 77,
    width: 314,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frame11: {
    left: 38,
    height: 227,
    width: 314,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frame10: {
    top: 205,
    height: 283,
    left: 0,
    overflow: "hidden",
  },
  frame7: {
    top: 444,
    left: 20,
    height: 488,
    overflow: "hidden",
  },
  iphone1415ProMax4: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone1415ProMax5;
