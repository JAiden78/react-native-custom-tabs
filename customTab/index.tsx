import { backIconGray, nextIconGray } from "@assets/icons";
import CustomIcon from "@components/customIcon";
import CustomText from "@components/customText";
import { COLORS } from "@theme/colors";
import { GST } from "@theme/globalStyles";
import { RF, WP } from "@theme/responsive";
import { memo, useEffect, useState } from "react";
import { LayoutAnimation, Pressable, View } from "react-native";
import styles from "./styles";

const { GRAY_500, BLACK } = COLORS;

interface Props {
  children: any;
  setSelectedTab?: (index: any) => void;
}

const CustomTab = (props: Partial<Props>) => {
  const { children } = props;
  const setSelectedTab = props.setSelectedTab;

  let rawData = children?.length ? children : [children];

  //Filter out undefined
  let data: any = rawData.filter((item: any) => {
    if (item) return item;
  });

  //Storing props for each children in Data Variable
  data = data?.map((item: any) => {
    return {
      ...item?.props,
    };
  });

  //Only show Backward and Forward Arrows if Number of Tabs is Greater Than 2
  const showIcons = data?.length > 2 ? true : false;

  const [indexData, setIndexData] = useState({
    selected: 0,
    listIndex: 0,
  });

  const [tabWidth, setTabWidth] = useState(showIcons ? WP(35) : WP(40));

  useEffect(() => {
    setSelectedTab && setSelectedTab(indexData.selected);
  }, [indexData.selected]);

  /**
   * Shifts the screen to previous tab on Backward Arrow Press
   */
  const handleBack = () => {
    if (indexData.listIndex == indexData.selected) {
      if (indexData.listIndex <= 0) {
        setIndexData({
          selected: data.length - 1,
          listIndex: data.length - 2,
        });
      } else {
        LayoutAnimation.easeInEaseOut();

        setIndexData({
          selected: indexData.selected - 1,
          listIndex: indexData.listIndex - 1,
        });
      }
    } else if (indexData.listIndex < indexData.selected) {
      LayoutAnimation.easeInEaseOut();

      setIndexData({
        selected: indexData.selected - 1,
        listIndex: indexData.listIndex,
      });
    }
  };

  /**
   * Shifts the screen to next tab on Forward Arrow Press
   */
  const handleNext = () => {
    if (indexData.listIndex == indexData.selected) {
      LayoutAnimation.easeInEaseOut();
      setIndexData({
        ...indexData,
        selected: indexData.selected + 1,
      });
    } else if (indexData.listIndex < indexData.selected) {
      if (indexData.listIndex >= data.length - 2) {
        setIndexData({
          selected: 0,
          listIndex: 0,
        });
      } else {
        LayoutAnimation.easeInEaseOut();
        setIndexData({
          selected: indexData.selected + 1,
          listIndex: indexData.listIndex + 1,
        });
      }
    }
  };

  return (
    <View style={GST.FLEX}>
      <View style={styles.container}>
        {showIcons && (
          <View style={styles.iconContainer}>
            <CustomIcon
              path={backIconGray}
              resizeMode={"contain"}
              customStyle={styles.iconImage}
              onPress={() => handleBack()}
            />
          </View>
        )}
        <View
          style={styles.textContainer}
          onLayout={({ nativeEvent: LayoutEvent }) => {
            let diviser = data?.length == 1 ? 1 : 2;
            setTabWidth(LayoutEvent.layout.width / diviser - RF(8) - 1);
          }}
        >
          <View
            style={[
              GST.FLEX_ROW,
              { left: indexData.listIndex * -(tabWidth + RF(8)) },
            ]}
          >
            {data.map((item: any, index: number) => {
              return (
                <Pressable
                  style={[styles.textInnerContainer, { width: tabWidth }]}
                  onPress={() => {
                    LayoutAnimation.easeInEaseOut();

                    setIndexData({
                      ...indexData,
                      selected: index,
                    });
                  }}
                  key={index}
                >
                  <CustomText color={GRAY_500} size={14} style={styles.text}>
                    {item.title}
                  </CustomText>
                </Pressable>
              );
            })}
          </View>
          <View
            style={[
              styles.absoluteTextInnerContainer,
              {
                width: tabWidth,
                left:
                  indexData.listIndex == indexData.selected
                    ? 0
                    : tabWidth + RF(8),
              },
            ]}
          >
            <CustomText color={BLACK} size={14} style={styles.text}>
              {data[indexData.selected].title}
            </CustomText>
          </View>
        </View>
        {showIcons && (
          <View style={styles.iconContainer}>
            <CustomIcon
              path={nextIconGray}
              resizeMode={"contain"}
              customStyle={styles.iconImage}
              onPress={() => handleNext()}
            />
          </View>
        )}
      </View>
      <View style={styles.detailContainer}>
        <View
          style={[
            styles.detailAnimationContainer,
            { left: indexData.selected * -WP(100) },
          ]}
        >
          {data?.map((itm: SingleTabProps, index: number) => {
            let Component = itm.component;
            let params = itm.params;
            return (
              <View key={index} style={styles.detailInnerContainer}>
                <Component {...params} />
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

interface SingleTabProps {
  title: string;
  component: (params: any) => React.JSX.Element;
  params?: Object;
  searchCount?: string | number;
  isBook?: boolean;
  isPublisher?: boolean;
}
export const SingleTab = ({
  title,
  component,
  params,
  searchCount,
  isBook,
  isPublisher,
}: SingleTabProps) => {
  return null;
};

function arePropsEqual(prevProps: any, nextProps: any) {
  return true;
}
export default memo(CustomTab, arePropsEqual);
