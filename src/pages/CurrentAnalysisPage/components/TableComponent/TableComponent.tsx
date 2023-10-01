import { IAnalysisAll } from "../../../../models/IAnalysis";

interface props {
  analysisResultAll: IAnalysisAll
}

const TableComponent = ({analysisResultAll}: props) => {
  console.log(analysisResultAll)
  
  
  return (
    <div>
      123
    </div>
  );
}

export default TableComponent;