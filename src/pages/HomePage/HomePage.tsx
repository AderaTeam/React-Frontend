import { useContext } from "react";
import { Context } from "../../main";
import MainWrapper from "../../components/Wrappers/MainWrapper";
import GuideCard from "./components/GuideCard";
import { observer } from "mobx-react-lite";
import { Stack } from "@mantine/core";
import UserInfo from "./components/UserInfo";

const HomePage = () => {
  const { UStore } = useContext(Context);

  return (
    <MainWrapper>
      <Stack spacing={16}>
        <UserInfo/>
      </Stack>
      {UStore.user.type ? <></> : <GuideCard/>}
    </MainWrapper>
  );
};

export default observer(HomePage);