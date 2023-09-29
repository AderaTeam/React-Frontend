import { useContext } from "react";
import { Context } from "../../main";
import MainWrapper from "../../components/Wrappers/MainWrapper";
import GuideCard from "./components/GuideCard";

const HomePage = () => {
  const { UStore } = useContext(Context);

  return (
    <MainWrapper>
      <div onClick={() => UStore.setAuth(false)}>123</div>
      <GuideCard/>
    </MainWrapper>
  );
};

export default HomePage;