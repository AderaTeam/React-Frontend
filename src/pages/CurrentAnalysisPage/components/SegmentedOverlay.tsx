import { SegmentedControl } from "@mantine/core";
import { IAnalysis, IAnalysisAll } from "../../../models/IAnalysis";

interface props {
  tab: string,
  setTab: React.Dispatch<React.SetStateAction<string>>,
  analysisResult: IAnalysis | undefined,
  analysisResultAll: IAnalysisAll | undefined,
}

const SegmentedOverlay = ({tab, setTab, analysisResult}: props) => {

  return (
    <SegmentedControl
      radius={'20px'}
      size="lg"
      fullWidth
      value={tab}
      onChange={setTab}
      data={[
        { label: 'Табличное представление', value: 'table', disabled: analysisResult ? true : false},
        { label: 'Карта регионов', value: 'map', disabled: true},
        { label: 'Диаграма', value: 'diagramm' },
      ]}
    />
  );
};

export default SegmentedOverlay;