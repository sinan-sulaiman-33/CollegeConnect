import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const IPhone1415ProMax = () => {
  return (
    <View style={styles.iphone1415ProMax2}>
      <View
        style={[styles.iphone1415ProMax2Child, styles.iphone1415ChildPosition]}
      />
      <View
        style={[styles.iphone1415ProMax2Item, styles.iphone1415ChildPosition]}
      />
      <Text style={styles.sinanSulaimanVidya}>{`Sinan Sulaiman
Vidya Academy of Science and Technology
Mechanical Engineering
3rd year`}</Text>
      <Image
        style={styles.sinanPic1}
        contentFit="cover"
        source={require("../assets/sinan-pic-1.png")}
      />
      <View
        style={[styles.iphone1415ProMax2Inner, styles.iphone1415ChildPosition]}
      >
        <View style={[styles.groupChild, styles.childPosition]} />
      </View>
      <View style={[styles.rectangleView, styles.childPosition]} />
      <View style={[styles.iphone1415ProMax2Child1, styles.childPosition]} />
      <View style={[styles.iphone1415ProMax2Child2, styles.childPosition]} />
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
        style={[styles.vaadinlineVIcon2, styles.iphone1415ChildPosition]}
        contentFit="cover"
        source={require("../assets/vaadinlinev2.png")}
      />
      <Image
        style={[styles.vaadinlineVIcon3, styles.vaadinlineIconLayout]}
        contentFit="cover"
        source={require("../assets/vaadinlinev3.png")}
      />
      <Image
        style={[styles.vaadinlineVIcon4, styles.vaadinlineIconLayout]}
        contentFit="cover"
        source={require("../assets/vaadinlinev4.png")}
      />
      <Image
        style={[styles.vaadinlineVIcon5, styles.vaadinlineIconLayout]}
        contentFit="cover"
        source={require("../assets/vaadinlinev4.png")}
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
        style={[styles.iphone1415ProMax2Child3, styles.iphone1415ChildPosition]}
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
          styles.iphone1415ProMax2Child4,
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
      <Text style={[styles.myNexus, styles.myNexusTypo]}>{`My Nexus

`}</Text>
      <Text style={[styles.myPosts, styles.myNexusTypo]}>{`My Posts

`}</Text>
      <Text style={[styles.myMissions, styles.myCollegeTypo]}>{`My Missions

`}</Text>
      <Text style={[styles.myCollege, styles.myCollegeTypo]}>{`My College

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
        style={styles.vaadinlineVIcon6}
        contentFit="cover"
        source={require("../assets/vaadinlinev5.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout4]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout5]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout5]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout4]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <View style={styles.myYearParent}>
        <Text style={[styles.myYear, styles.myYearTypo]}>{`My Year

`}</Text>
        <Text style={[styles.myDepartment, styles.myInterestsTypo]}>
          My Department
        </Text>
        <Image
          style={[styles.vectorIcon5, styles.vectorIconPosition1]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.vectorIcon6, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={[styles.mySportsParent, styles.groupViewLayout]}>
          <Text style={[styles.myYear, styles.myYearTypo]}>{`My Sports

`}</Text>
          <Text style={[styles.myArts, styles.myYearTypo]}>{`My Arts

`}</Text>
          <Text
            style={[styles.myCommunities, styles.myYearTypo]}
          >{`My Communities

`}</Text>
          <Image
            style={[styles.vectorIcon7, styles.vectorIconLayout1]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={styles.vectorIcon8}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={[styles.vectorIcon9, styles.vectorIconLayout1]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
        </View>
      </View>
      <View style={styles.bxseditParent}>
        <Image
          style={styles.bxseditIcon}
          contentFit="cover"
          source={require("../assets/bxsedit.png")}
        />
        <View style={[styles.groupWrapper, styles.groupWrapperLayout]}>
          <View style={[styles.myInterestsParent, styles.groupWrapperLayout]}>
            <Text
              style={[styles.myInterests, styles.myInterestsTypo]}
            >{`My Interests

`}</Text>
            <Text style={[styles.myVicinity, styles.myYearTypo]}>{`My Vicinity

`}</Text>
            <Image
              style={[styles.vectorIcon10, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
            <Image
              style={[styles.vectorIcon11, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
          </View>
        </View>
      </View>
      <Image
        style={styles.collegeConnectLogo1}
        contentFit="cover"
        source={require("../assets/collegeconnectlogo1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iphone1415ChildPosition: {
    width: 430,
    left: 0,
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
  vaadinlineIconPosition1: {
    width: 36,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  vaadinlineIconLayout: {
    width: 434,
    height: 36,
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
  myNexusTypo: {
    width: 73,
    fontSize: FontSize.size_sm,
    height: 13,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  myCollegeTypo: {
    fontSize: FontSize.size_sm,
    left: 70,
    height: 13,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorWhite,
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
  vectorIconLayout4: {
    left: "3.72%",
    right: "88.84%",
    width: "7.44%",
    height: "3.43%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout5: {
    width: "7.44%",
    height: "3.43%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  myYearTypo: {
    left: 54,
    fontSize: FontSize.size_sm,
    height: 13,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  myInterestsTypo: {
    top: 9,
    left: 54,
    fontSize: FontSize.size_sm,
    height: 13,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  vectorIconPosition1: {
    bottom: "60%",
    top: "0%",
  },
  vectorIconPosition: {
    top: "60%",
    bottom: "0%",
  },
  groupViewLayout: {
    height: 128,
    width: 174,
    position: "absolute",
  },
  vectorIconLayout1: {
    right: "81.61%",
    width: "18.39%",
    height: "25%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupWrapperLayout: {
    width: 142,
    height: 80,
    left: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    width: "22.54%",
    height: "40%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iphone1415ProMax2Child: {
    top: 396,
    height: 581,
    backgroundColor: Color.colorBlack,
    width: 430,
  },
  iphone1415ProMax2Item: {
    top: 248,
    height: 150,
    backgroundColor: Color.colorBlack,
    width: 430,
  },
  sinanSulaimanVidya: {
    left: 127,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.inderRegular,
    width: 301,
    height: 103,
    textAlign: "left",
    color: Color.colorWhite,
    top: 270,
    position: "absolute",
  },
  sinanPic1: {
    top: 229,
    left: 4,
    width: 103,
    height: 183,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    height: 22,
  },
  iphone1415ProMax2Inner: {
    top: 227,
    height: 22,
  },
  rectangleView: {
    top: 73,
    height: 50,
  },
  iphone1415ProMax2Child1: {
    top: -11,
    height: 139,
  },
  iphone1415ProMax2Child2: {
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
    overflow: "hidden",
  },
  vaadinlineVIcon3: {
    left: -4,
    width: 434,
    top: 230,
  },
  vaadinlineVIcon4: {
    top: 378,
    left: -5,
  },
  vaadinlineVIcon5: {
    top: 912,
    left: -4,
    width: 434,
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
  iphone1415ProMax2Child3: {
    top: 179,
    height: 48,
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
  iphone1415ProMax2Child4: {
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
  myNexus: {
    top: 464,
    left: 70,
    width: 73,
  },
  myPosts: {
    top: 414,
    left: 308,
  },
  myMissions: {
    top: 512,
    width: 88,
  },
  myCollege: {
    top: 560,
    width: 83,
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
  vaadinlineVIcon6: {
    top: 159,
    left: -1,
    width: 432,
    height: 37,
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon1: {
    height: "3.65%",
    width: "7.91%",
    top: "20.06%",
    right: "3.02%",
    bottom: "76.29%",
    left: "89.07%",
  },
  vectorIcon1: {
    top: "48.82%",
    bottom: "47.75%",
  },
  vectorIcon2: {
    top: "43.67%",
    right: "33.26%",
    bottom: "52.9%",
    left: "59.3%",
  },
  vectorIcon3: {
    top: "53.97%",
    right: "88.6%",
    bottom: "42.6%",
    left: "3.95%",
  },
  vectorIcon4: {
    top: "59.12%",
    bottom: "37.45%",
  },
  myYear: {
    top: 57,
    left: 54,
    width: 88,
  },
  myDepartment: {
    width: 109,
  },
  vectorIcon5: {
    right: "80.37%",
    left: "0%",
    width: "19.63%",
    height: "40%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon6: {
    right: "79.75%",
    left: "0.61%",
    bottom: "0%",
    width: "19.63%",
    height: "40%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  myYearParent: {
    top: 599,
    left: 254,
    width: 163,
    height: 80,
    position: "absolute",
  },
  myArts: {
    top: 8,
    width: 88,
  },
  myCommunities: {
    top: 105,
    width: 120,
  },
  vectorIcon7: {
    bottom: "75%",
    top: "0%",
    right: "81.61%",
  },
  vectorIcon8: {
    top: "37.5%",
    right: "81.03%",
    bottom: "37.5%",
    left: "0.57%",
    width: "18.39%",
    height: "25%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon9: {
    top: "75%",
    bottom: "0%",
  },
  mySportsParent: {
    top: 0,
    left: 0,
    height: 128,
    width: 174,
  },
  groupView: {
    top: 695,
    left: 16,
  },
  bxseditIcon: {
    left: 144,
    width: 24,
    height: 24,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  myInterests: {
    width: 88,
  },
  myVicinity: {
    top: 57,
    left: 54,
    width: 83,
  },
  vectorIcon10: {
    right: "76.76%",
    left: "0.7%",
    bottom: "60%",
    top: "0%",
  },
  vectorIcon11: {
    right: "77.46%",
    bottom: "0%",
    top: "60%",
    left: "0%",
  },
  myInterestsParent: {
    top: 0,
  },
  groupWrapper: {
    top: 569,
  },
  bxseditParent: {
    left: 255,
    width: 168,
    height: 649,
    top: 270,
    position: "absolute",
  },
  collegeConnectLogo1: {
    top: 71,
    left: 183,
    width: 59,
    height: 104,
    position: "absolute",
  },
  iphone1415ProMax2: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default IPhone1415ProMax;
