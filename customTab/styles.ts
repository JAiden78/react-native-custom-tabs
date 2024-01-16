import { COLORS } from "@theme/colors";
import { BITTER } from "@theme/fonts";
import { RF, WP } from "@theme/responsive";
import { StyleSheet } from "react-native";

const { GRAY_100, WHITE, GRAY_50 } = COLORS;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
    height: RF(45),
    marginHorizontal: RF(16),
  },
  iconImage: {
    alignSelf: "center",
    height: RF(25),
    width: RF(25),
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: GRAY_50,
    borderRadius: RF(8),
    borderColor: GRAY_100,
    borderWidth: 1,
    overflow: "hidden",
  },
  textInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: RF(4),
    height: RF(35),
    borderRadius: RF(5),
    justifyContent: "center",
  },
  absoluteTextInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: RF(4),
    height: RF(35),
    borderRadius: RF(5),
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor: WHITE,
    position: "absolute",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor: WHITE,
  },
  text: {
    textAlign: "center",
  },
  countCon: {
    paddingVertical: RF(2),
    paddingHorizontal: RF(8),
    borderRadius: RF(16),
    overflow: "hidden",
    marginStart: RF(8),
    backgroundColor: COLORS.GRAY_100,
  },
  countText: {
    fontFamily: BITTER.MEDIUM,
  },
  iconContainer: { alignSelf: "center" },
  detailContainer: { overflow: "hidden", flex: 1 },
  detailAnimationContainer: {
    flex: 1,
    flexDirection: "row",
    overflow: "visible",
  },
  detailInnerContainer: {
    width: WP(100),
    height: "100%",
  },
});

export default styles;
