import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { IAnalysis, IAnalysisAll } from '../../../../models/IAnalysis';
import _cloneDeep from 'lodash'
import _ from "lodash";
import { rabbit } from '../../rabbit';
import { useEffect, useState } from 'react';
import { $apiPython } from '../../../../http';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface props {
  analysisResult: IAnalysis | undefined,
  analysisResultAll: IAnalysisAll | undefined
}
const DiagrammComponent = ({analysisResult, analysisResultAll}: props) => {
  const [result, setResult] = useState<number[]>();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'График последующих платежей',
      },
    },
  };

  useEffect(() => {
    if (analysisResultAll) {
      const arr: number[][] = [];
      analysisResultAll.result.map(item => arr.push(item.data[0]));
      try {
        $apiPython.post('/means', {lists: arr}).then(response => {
          console.log(response.data.average)
          setResult(response.data.average)
        })
      } catch (error) {
        console.log(error);
      }
    }
  }, [analysisResultAll]);

  if (analysisResult) {
    const labels: number[] = [];
    analysisResult.data[0].map((_item, index) => {
      labels.push(index+1)
    })

    const data = {
      labels,
      datasets: [
        {
          label: `${rabbit[analysisResult.type]}`,
          data: _.cloneDeep(analysisResult.data[0]),
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };

    return <Line options={options} data={data} />
  }

  if (result) {
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top' as const,
        },
        title: {
          display: true,
          text: 'График средних последующих платежей выборки',
        },
      },
    }; 

  const labels: number[] = [];
    result!.map((_item, index) => {
      labels.push(index+1)
    })

  const data = {
    labels,
    datasets: [
      {
        label: `среднее`,
        data: result,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return  result && <Line options={options} data={data} /> }

}

export default DiagrammComponent;