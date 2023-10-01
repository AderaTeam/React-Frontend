import { IAnalysis, IAnalysisAll } from "../../../models/IAnalysis";
import DiagrammComponent from "./DiagrammComponent/DiagrammComponent";
import TableComponent from "./TableComponent/TableComponent";

interface props {
  tab: string,
  analysisResult: IAnalysis | undefined,
  analysisResultAll: IAnalysisAll | undefined
}

const Wrapper = ({tab, analysisResult, analysisResultAll} : props) => {
  switch (tab) {
    case 'table':
      return <TableComponent analysisResultAll={analysisResultAll!}/>
    case 'map':
      return <></>
    case 'diagramm':
      return <DiagrammComponent analysisResultAll={analysisResultAll} analysisResult={analysisResult}/>
  }
};

export default Wrapper;