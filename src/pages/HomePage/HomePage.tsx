import MainWrapper from "../../components/Wrappers/MainWrapper";
import GuideCard from "./components/GuideCard";
import { Stack } from "@mantine/core";
import UserInfo from "./components/UserInfo";
import PlanCard from "./components/PlanCard";

const HomePage = () => {

  return (
    <MainWrapper>
      <Stack spacing={16}>
        <UserInfo/>
        <PlanCard/>
      </Stack>
      <GuideCard/>
    </MainWrapper>
  );
};

export default HomePage;