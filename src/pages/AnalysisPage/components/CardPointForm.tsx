import { Button, Flex, SegmentedControl, Stack } from "@mantine/core";
import { useContext, useState } from "react";
import { Context } from "../../../main";
import PointOption from "./PointOption";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { CURRENT_ANALYSIS_ROUT } from "../../../utils/const";
import { rabbitReverse } from "../../CurrentAnalysisPage/rabbitReverse";

const CardPointForm = () => {
  const [tab, setTab] = useState<string>('id');
  const [selectedId, setSelectedId] = useState<string>('');
  const [behavior, setBehavior] = useState<string | null>('');
  const { AStore } = useContext(Context);
  const navigate = useNavigate();

  const disable = () => {
    if (tab === 'id' && selectedId) {
      return false;
    } else if (tab === 'behavior' && behavior) {
      return false;
    } else if (tab === 'allPeople') {
      return false;
    }
    return true;
  };

  const handlePost = () => {
    if (tab === 'id') {
      AStore.pointAnalysisId(selectedId);
    } else if (tab === 'behavior' && behavior !== null) {
      AStore.pointAnalysisBehavior(rabbitReverse[behavior]);
    } else if (tab === 'allPeople') {
      AStore.pointAnalysisAllPeople();
    };  
  };

  return (
    <Stack spacing={24}>
      <SegmentedControl
        radius={'20px'}
        fullWidth
        value={tab}
        onChange={setTab}
        size="xl"
        data={[
          { label: 'Пользователь, id', value: 'id' },
          { label: 'Тип финансового поведения', value: 'behavior' },
          { label: 'По всей массе людей', value: 'allPeople' },
        ]}
      />
      <Flex justify={"space-between"}>
        <PointOption 
          option={tab}
          setSelectedId={setSelectedId}
          selectedId={selectedId}
          setBehavior={setBehavior}
          behavior={behavior}
        />
        <Button
          disabled={AStore.isExternalLoading || disable()}
          style={{marginLeft: 'auto'}}
          onClick={(tab === 'allPeople' || tab === 'behavior')
          ? 
            (AStore.currentPointAnalysisAll ? 
            () => navigate(CURRENT_ANALYSIS_ROUT + '/' + 0) :
            () => handlePost())
          :
            (AStore.currentPointAnalysis ? 
            () => navigate(CURRENT_ANALYSIS_ROUT + '/' + 0) :
            () => handlePost())
          }
          w={194} h={51} 
          color="indigo.7" 
          className="button"
        >
          {
            (tab !=='allPeople' && tab !== 'behavior') ? 
            AStore.currentPointAnalysis ? 'К результату' : 'Анализировать' : 
            AStore.currentPointAnalysisAll ? 'К результату' : 'Анализировать'
          }
        </Button>
      </Flex>
    </Stack>
  );
};

export default observer(CardPointForm);