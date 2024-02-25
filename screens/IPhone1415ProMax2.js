import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone1415ProMax2 = () => {
  return (
    <View style={styles.iphone1415ProMax4}>
      <View
        style={[styles.iphone1415ProMax4Child, styles.iphone1415ChildLayout]}
      />
      <Text style={[styles.heySinanDid, styles.heySinanDidTypo]}>
        Hey Sinan. Did you get back?
      </Text>
      <Text style={[styles.helloImImtiyaz, styles.heySinanDidTypo]}>
        Hello. I’m Imtiyaz from Trivandrum. I’m...
      </Text>
      <View style={styles.kochousephPic1} />
      <Text style={styles.hiImAlan}>Hi. I’m Alan.</Text>
      <Text style={[styles.alanKAnil, styles.alanKAnilTypo]}>{`ALAN K ANIL
`}</Text>
      <Text
        style={[styles.kochousephJohn, styles.alanKAnilTypo]}
      >{`KOCHOUSEPH JOHN
`}</Text>
      <Text style={[styles.alImtiyaz, styles.alanKAnilTypo]}>{`AL IMTIYAZ
`}</Text>
      <Image
        style={styles.alanPic1}
        contentFit="cover"
        source={require("../assets/alan-pic-1.png")}
      />
      <View style={styles.iphone1415ProMax4Inner}>
        <View style={[styles.groupChild, styles.childPosition]} />
      </View>
      <View style={[styles.iphone1415ProMax4Item, styles.childPosition]} />
      <View style={[styles.rectangleView, styles.childPosition]} />
      <View style={[styles.iphone1415ProMax4Child1, styles.childPosition]} />
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
        style={[styles.vaadinlineVIcon, styles.vaadinlineIconPosition1]}
        contentFit="cover"
        source={require("../assets/vaadinlinev.png")}
      />
      <Image
        style={[styles.vaadinlineVIcon1, styles.vaadinlineIconPosition1]}
        contentFit="cover"
        source={require("../assets/vaadinlinev1.png")}
      />
      <Image
        style={[styles.vaadinlineVIcon2, styles.iphone1415ChildLayout]}
        contentFit="cover"
        source={require("../assets/vaadinlinev2.png")}
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
      <View
        style={[styles.iphone1415ProMax4Child2, styles.iphone1415ChildLayout]}
      />
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
          styles.iphone1415ProMax4Child3,
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
        style={[styles.vaadinlineVIcon3, styles.vaadinlineIconLayout]}
        contentFit="cover"
        source={require("../assets/vaadinlinev5.png")}
      />
      <Image
        style={[styles.vaadinlineVIcon4, styles.vaadinlineIconLayout]}
        contentFit="cover"
        source={require("../assets/vaadinlinev6.png")}
      />
      <Image
        style={[styles.vaadinlineVIcon5, styles.vaadinlineIconPosition]}
        contentFit="cover"
        source={require("../assets/vaadinlinev6.png")}
      />
      <Image
        style={[styles.vaadinlineVIcon6, styles.vaadinlineIconPosition]}
        contentFit="cover"
        source={require("../assets/vaadinlinev6.png")}
      />
      <Image
        style={[styles.vaadinlineVIcon7, styles.vaadinlineIconPosition]}
        contentFit="cover"
        source={require("../assets/vaadinlinev6.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <Image
        style={[styles.vaadinlineVIcon8, styles.vaadinlineIconLayout]}
        contentFit="cover"
        source={require("../assets/vaadinlinev7.png")}
      />
      <Image
        style={styles.kochousephPic2}
        contentFit="cover"
        source={require("../assets/kochouseph-pic-2.png")}
      />
      <Image
        style={styles.imtiyazPic1}
        contentFit="cover"
        source={require("../assets/imtiyaz-pic-1.png")}
      />
      <Image
        style={styles.collegeConnectLogo1}
        contentFit="cover"
        source={require("../assets/collegeconnectlogo1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iphone1415ChildLayout: {
    width: 430,
    position: "absolute",
  },
  heySinanDidTypo: {
    height: 26,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inderRegular,
    fontSize: FontSize.size_base,
    left: 110,
    position: "absolute",
  },
  alanKAnilTypo: {
    height: 24,
    color: Color.colorRed,
    fontFamily: FontFamily.iBMPlexSansDevanagariBold,
    fontWeight: "700",
    width: 301,
    textAlign: "left",
    fontSize: FontSize.size_base,
    left: 110,
    position: "absolute",
  },
  childPosition: {
    backgroundColor: Color.colorRed,
    left: 0,
    width: 430,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vaadinlineIconPosition1: {
    width: 36,
    top: 0,
    position: "absolute",
    overflow: "hidden",
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
    top: 230,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  vaadinlineIconLayout: {
    height: 37,
    width: 432,
    position: "absolute",
    overflow: "hidden",
  },
  vaadinlineIconPosition: {
    left: -3,
    height: 37,
    width: 432,
    position: "absolute",
    overflow: "hidden",
  },
  iphone1415ProMax4Child: {
    top: 248,
    height: 689,
    backgroundColor: Color.colorBlack,
    width: 430,
    left: -1,
  },
  heySinanDid: {
    top: 366,
    width: 301,
  },
  helloImImtiyaz: {
    top: 464,
    width: 311,
  },
  kochousephPic1: {
    top: 368,
    left: -8,
    width: 149,
    height: 116,
    position: "absolute",
  },
  hiImAlan: {
    top: 286,
    height: 40,
    width: 301,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inderRegular,
    fontSize: FontSize.size_base,
    left: 110,
    position: "absolute",
  },
  alanKAnil: {
    top: 260,
  },
  kochousephJohn: {
    top: 342,
  },
  alImtiyaz: {
    top: 434,
  },
  alanPic1: {
    top: 153,
    left: -14,
    width: 140,
    height: 249,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    backgroundColor: Color.colorRed,
    height: 22,
  },
  iphone1415ProMax4Inner: {
    top: 227,
    height: 22,
    left: 0,
    width: 430,
    position: "absolute",
  },
  iphone1415ProMax4Item: {
    top: 73,
    height: 50,
  },
  rectangleView: {
    top: -11,
    height: 139,
  },
  iphone1415ProMax4Child1: {
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
    height: 36,
    fontWeight: "700",
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
  iphone1415ProMax4Child2: {
    top: 179,
    height: 48,
    left: 0,
    backgroundColor: Color.colorBlack,
    width: 430,
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
  iphone1415ProMax4Child3: {
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
    top: 230,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
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
  vaadinlineVIcon3: {
    top: 159,
    left: -1,
  },
  vaadinlineVIcon4: {
    top: 229,
    left: -1,
  },
  vaadinlineVIcon5: {
    top: 311,
  },
  vaadinlineVIcon6: {
    top: 399,
  },
  vaadinlineVIcon7: {
    top: 488,
  },
  groupIcon1: {
    height: "3.65%",
    width: "7.91%",
    top: "20.06%",
    right: "3.02%",
    bottom: "76.29%",
    left: "89.07%",
  },
  vaadinlineVIcon8: {
    top: 911,
    left: 0,
  },
  kochousephPic2: {
    top: 292,
    left: 5,
    width: 94,
    height: 166,
    position: "absolute",
  },
  imtiyazPic1: {
    top: 319,
    left: -5,
    width: 145,
    height: 257,
    position: "absolute",
  },
  collegeConnectLogo1: {
    top: 71,
    left: 183,
    width: 59,
    height: 104,
    position: "absolute",
  },
  iphone1415ProMax4: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default IPhone1415ProMax2;
