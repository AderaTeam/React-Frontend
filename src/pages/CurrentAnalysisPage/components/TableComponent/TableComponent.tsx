import { IAnalysisAll } from "../../../../models/IAnalysis";
import _cloneDeep from 'lodash'
import _ from "lodash";
import './style.css';
import { Title } from "@mantine/core";

interface props {
  analysisResultAll: IAnalysisAll
}

const TableComponent = ({analysisResultAll}: props) => {
  const arr = analysisResultAll.result[0].data[0];
  var date = new Date();

  const dateArr = arr.map((_item, index) => {
    return (index)
  })

  const head = () => {
    return (
      <div style={{display: 'flex', marginBottom: '10px', borderBottom: '1px solid black'}}>
        {dateArr.map((item) => (
          <div className="item">{ date.getMonth() + item}.23</div>
        ))}
      </div>
    )
  }

  const tableLine = analysisResultAll.result.map(item => (
    <div style={{display: 'flex', marginBottom: '10px', borderBottom: '1px solid black'}}>
    {item.data[0].map(line => (
      <div className="item">{Math.trunc(line)}</div>
    ))}
    </div>
  ));

  
  return (
    <>
    <Title size={'h3'}>Предсказанные временные ряды</Title>
    <div style={{width: '100vw'}}>
      {head()}
      {tableLine}
    </div>
    </>
    
  );
}

export default TableComponent;