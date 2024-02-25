import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone1415ProMax3 = () => {
  return (
    <View style={styles.iphone1415ProMax1}>
      <View style={[styles.iphone1415ProMax1Child, styles.iphone1415Layout]} />
      <Image
        style={styles.kochousephPic2}
        contentFit="cover"
        source={require("../assets/kochouseph-pic-21.png")}
      />
      <Image
        style={[styles.image4Icon, styles.iconPosition2]}
        contentFit="cover"
        source={require("../assets/image-4.png")}
      />
      <View style={[styles.iphone1415ProMax1Item, styles.iphone1415Layout]} />
      <Text
        style={[styles.kochousephJohnVidya, styles.alanKAnilTypo]}
      >{`Kochouseph John
Vidya Academy of Science and Technology
Computer Science and Engineering
4th year`}</Text>
      <Text style={[styles.alanKAnil, styles.alanKAnilTypo]}>{`Alan K Anil
Sree Narayana Guru Engineering College
Computer Science and Engineering
4th year`}</Text>
      <View style={styles.iphone1415ProMax1Inner}>
        <View style={[styles.groupChild, styles.childPosition]} />
      </View>
      <View style={[styles.rectangleView, styles.childPosition]} />
      <View style={[styles.iphone1415ProMax1Child1, styles.childPosition]} />
      <View style={[styles.iphone1415ProMax1Child2, styles.childPosition]} />
      <Image
        style={styles.claritysettingsLineIcon}
        contentFit="cover"
        source={require("../assets/claritysettingsline.png")}
      />
      <Image
        style={[styles.mdibellIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/mdibell.png")}
      />
      <Image
        style={[styles.vaadinlineVIcon, styles.vaadinlineIconPosition]}
        contentFit="cover"
        source={require("../assets/vaadinlinev.png")}
      />
      <Image
        style={[styles.vaadinlineVIcon1, styles.vaadinlineIconPosition]}
        contentFit="cover"
        source={require("../assets/vaadinlinev1.png")}
      />
      <Image
        style={[styles.vaadinlineVIcon2, styles.iconPosition2]}
        contentFit="cover"
        source={require("../assets/vaadinlinev2.png")}
      />
      <Image
        style={[styles.vaadinlineVIcon3, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/vaadinlinev3.png")}
      />
      <Image
        style={[styles.vaadinlineVIcon4, styles.iconPosition2]}
        contentFit="cover"
        source={require("../assets/vaadinlinev8.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <Text style={styles.collegeConnect}>College Connect</Text>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <View style={[styles.iphone1415ProMax1Child3, styles.iconPosition2]} />
      <Image
        style={[styles.rimessage2LineIcon, styles.rimessage2LineIconPosition]}
        contentFit="cover"
        source={require("../assets/rimessage2line.png")}
      />
      <Image
        style={[styles.fluenttargetArrow24FilledIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/fluenttargetarrow24filled.png")}
      />
      <Image
        style={[styles.clarityhomeLineIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/clarityhomeline.png")}
      />
      <Image
        style={[
          styles.iphone1415ProMax1Child4,
          styles.rimessage2LineIconPosition,
        ]}
        contentFit="cover"
        source={require("../assets/vector-5.png")}
      />
      <Image
        style={[styles.groupIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/group-6.png")}
      />
      <Text style={styles.home}>{`HOME

`}</Text>
      <Text style={[styles.missions, styles.conveyTypo]}>{`MISSIONS

`}</Text>
      <Text style={[styles.coalesce, styles.conveyTypo]}>{`COALESCE

`}</Text>
      <Text style={[styles.confluence, styles.conveyTypo]}>{`CONFLUENCE

`}</Text>
      <Text style={[styles.convey, styles.conveyTypo]}>{`CONVEY

`}</Text>
      <Text style={[styles.profile, styles.conveyTypo]}>{`PROFILE

`}</Text>
      <Image
        style={styles.alanPic1}
        contentFit="cover"
        source={require("../assets/alan-pic-11.png")}
      />
      <Image
        style={styles.vaadinlineVIcon5}
        contentFit="cover"
        source={require("../assets/vaadinlinev5.png")}
      />
      <Image
        style={[styles.image5Icon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/image-5.png")}
      />
      <Image
        style={[styles.vaadinlineVIcon6, styles.iconPosition2]}
        contentFit="cover"
        source={require("../assets/vaadinlinev8.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <View style={styles.kochousephPic1} />
      <Image
        style={styles.collegeConnectLogo1}
        contentFit="cover"
        source={require("../assets/collegeconnectlogo1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iphone1415Layout: {
    height: 150,
    width: 430,
    backgroundColor: Color.colorBlack,
    left: 0,
    position: "absolute",
  },
  iconPosition2: {
    width: 430,
    left: 0,
    position: "absolute",
  },
  alanKAnilTypo: {
    height: 103,
    width: 301,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inderRegular,
    fontSize: FontSize.size_base,
    left: 127,
    position: "absolute",
  },
  childPosition: {
    backgroundColor: Color.colorRed,
    width: 430,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vaadinlineIconPosition: {
    width: 36,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition1: {
    width: 434,
    left: -4,
    position: "absolute",
  },
  rimessage2LineIconPosition: {
    top: 185,
    position: "absolute",
  },
  iconPosition: {
    width: 42,
    top: 183,
    position: "absolute",
  },
  conveyTypo: {
    height: 15,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 230,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  iphone1415ProMax1Child: {
    top: 248,
  },
  kochousephPic2: {
    top: 182,
    left: -22,
    width: 156,
    height: 277,
    position: "absolute",
  },
  image4Icon: {
    top: 578,
    height: 180,
    width: 430,
    left: 0,
  },
  iphone1415ProMax1Item: {
    top: 577,
  },
  kochousephJohnVidya: {
    top: 270,
  },
  alanKAnil: {
    top: 599,
  },
  groupChild: {
    top: 0,
    backgroundColor: Color.colorRed,
    height: 22,
  },
  iphone1415ProMax1Inner: {
    top: 227,
    height: 22,
    width: 430,
    left: 0,
    position: "absolute",
  },
  rectangleView: {
    top: 73,
    height: 50,
  },
  iphone1415ProMax1Child1: {
    top: -11,
    height: 139,
  },
  iphone1415ProMax1Child2: {
    top: 128,
    height: 51,
  },
  claritysettingsLineIcon: {
    marginTop: -415,
    marginLeft: -208,
    top: "50%",
    left: "50%",
    width: 48,
    height: 44,
    position: "absolute",
    overflow: "hidden",
  },
  mdibellIcon: {
    width: "11.16%",
    top: "5.58%",
    right: "1.4%",
    bottom: "89.91%",
    left: "87.44%",
    height: "4.51%",
    maxWidth: "100%",
  },
  vaadinlineVIcon: {
    left: 353,
    height: 139,
  },
  vaadinlineVIcon1: {
    left: 46,
    height: 135,
  },
  vaadinlineVIcon2: {
    top: 91,
    height: 36,
    width: 430,
    left: 0,
    overflow: "hidden",
  },
  vaadinlineVIcon3: {
    top: 230,
    left: -4,
    height: 36,
    overflow: "hidden",
  },
  vaadinlineVIcon4: {
    top: 558,
    height: 36,
    width: 430,
    left: 0,
    overflow: "hidden",
  },
  rectangleIcon: {
    height: "3.54%",
    width: "90%",
    top: "14.48%",
    right: "4.42%",
    bottom: "81.97%",
    left: "5.58%",
    borderRadius: Border.br_11xl,
  },
  collegeConnect: {
    top: 55,
    left: 89,
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
    width: 265,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    height: 36,
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon: {
    height: "2.58%",
    width: "6.28%",
    top: "14.91%",
    right: "85.81%",
    bottom: "82.51%",
    left: "7.91%",
  },
  iphone1415ProMax1Child3: {
    top: 179,
    height: 48,
    backgroundColor: Color.colorBlack,
    width: 430,
    left: 0,
  },
  rimessage2LineIcon: {
    left: 316,
    width: 39,
    height: 38,
    overflow: "hidden",
  },
  fluenttargetArrow24FilledIcon: {
    left: 80,
    height: 40,
    overflow: "hidden",
  },
  clarityhomeLineIcon: {
    width: "10.47%",
    top: "19.64%",
    right: "87.21%",
    bottom: "75.86%",
    left: "2.33%",
    height: "4.51%",
    maxWidth: "100%",
  },
  iphone1415ProMax1Child4: {
    left: 153,
    width: 41,
    height: 36,
  },
  groupIcon: {
    left: 240,
    height: 38,
  },
  home: {
    left: 14,
    width: 46,
    height: 13,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 230,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  missions: {
    left: 72,
    width: 61,
  },
  coalesce: {
    left: 143,
    width: 69,
  },
  confluence: {
    left: 220,
    width: 83,
  },
  convey: {
    left: 312,
    width: 54,
  },
  profile: {
    left: 373,
    width: 55,
  },
  alanPic1: {
    top: 417,
    left: -54,
    width: 237,
    height: 422,
    position: "absolute",
  },
  vaadinlineVIcon5: {
    top: 159,
    left: -1,
    width: 432,
    height: 37,
    position: "absolute",
    overflow: "hidden",
  },
  image5Icon: {
    top: 727,
    height: 205,
  },
  vaadinlineVIcon6: {
    top: 912,
    height: 36,
    width: 430,
    left: 0,
    overflow: "hidden",
  },
  groupIcon1: {
    height: "3.65%",
    width: "7.91%",
    top: "20.06%",
    right: "3.26%",
    bottom: "76.29%",
    left: "88.84%",
  },
  kochousephPic1: {
    top: 262,
    left: -16,
    width: 149,
    height: 116,
    position: "absolute",
  },
  collegeConnectLogo1: {
    top: 71,
    left: 183,
    width: 59,
    height: 104,
    position: "absolute",
  },
  iphone1415ProMax1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default IPhone1415ProMax3;
