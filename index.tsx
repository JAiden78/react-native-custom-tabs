import { sortIcon } from "@assets/icons";
import AppHeader from "@components/AppHeader";
import CustomTab, { SingleTab } from "@components/customTab";
import Wrapper from "@components/wrapper";
import { COLORS } from "@theme/colors";
import React, { useState } from "react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";

const { WHITE, SECONDARY } = COLORS;

const App = () => {
  const [screenIndex, setScreenIndex] = useState(0);

  return (
    <Wrapper>
      <AppHeader
        headerText={"Collection"}
        chevronPress={() => {}}
        chevronColor={WHITE}
        RSIcon={screenIndex == 0 ? sortIcon : null}
        RSColor={SECONDARY}
      />
      <CustomTab setSelectedTab={(index: number) => setScreenIndex(index)}>
        <SingleTab
          title={"Books"}
          component={() => <Tab1 />}
          params={{ current: true }}
        />
        <SingleTab
          title={"Favorites"}
          component={() => <Tab2 />}
          params={{ current: false }}
        />
        <SingleTab
          title={"Shared"}
          component={() => <Tab3 />}
          params={{ current: false }}
        />
        <SingleTab
          title={"Offline Books"}
          component={() => <Tab4 />}
          params={{ current: false }}
        />
      </CustomTab>
    </Wrapper>
  );
};

export default App;
