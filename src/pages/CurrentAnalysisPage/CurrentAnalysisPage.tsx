import { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import { useParams } from "react-router-dom";
import { IAnalysis, IAnalysisAll } from "../../models/IAnalysis";
import AnalysisServices from "../../services/AnalysisServices";
import { observer } from "mobx-react-lite";
import AnalistWrapper from "../../components/Wrappers/AnalistWrapper";
import { Stack } from "@mantine/core";
import SegmentedOverlay from "./components/SegmentedOverlay";
import Wrapper from "./components/Wrapper";

const CurrentAnalysisPage = () => {
  const { AStore } = useContext(Context);
  const [analysisResult, setAnalysisResult] = useState<IAnalysis>();
  const [analysisResultAll, setAnalysisResultAll] = useState<IAnalysisAll>();
  const [tab, setTab] = useState<string>('table')
  const {id} = useParams();

  useEffect(() => {
    let isCancelled = false;
    if (id === '0') {
      if (AStore.currentPointAnalysis) {
        setAnalysisResult(AStore.currentPointAnalysis);
      } else {
        setAnalysisResultAll(AStore.currentPointAnalysisAll || AStore.currentExternalAnalysis);
      }
    } else {
      try {
        AStore.setExternalLoading(true);
        AnalysisServices.selectAnalysis(id ? id : '1').then((response) => {
          if (!isCancelled) {
            console.log(response.data) 
            setAnalysisResult(response.data);
          };
        });
      } catch (e) {
        console.log(e);
      } finally {
        AStore.setExternalLoading(false);
      };
    }

    return () => {
      isCancelled = true;
    }
  }, []);

	return (
		<>
      {(analysisResult || analysisResultAll) && 
        <AnalistWrapper>
          <Stack spacing={32}>
            <SegmentedOverlay 
              analysisResult={analysisResult} 
              analysisResultAll={analysisResultAll} 
              tab={tab}
              setTab={setTab}
            />
            <Wrapper 
              analysisResult={analysisResult} 
              analysisResultAll={analysisResultAll}
              tab={tab}
            />
          </Stack>
          <></>
        </AnalistWrapper>
      }
    </>
	);
};

export default observer(CurrentAnalysisPage);