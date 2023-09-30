import { Stack } from "@mantine/core";
import AnalistWrapper from "../../components/Wrappers/AnalistWrapper";
import AnalysisCard from "./components/AnalysisCard";

const AnalysisPage = () => {

  return (
    <AnalistWrapper>
      <Stack spacing={8}>
        <AnalysisCard title="Внешний анализ"/>
        <AnalysisCard title="Точечный анализ"/>
      </Stack>
    </AnalistWrapper>
  );
};

export default AnalysisPage;