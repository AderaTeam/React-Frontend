import { Button, Flex, SegmentedControl, Stack } from "@mantine/core";
import { useContext, useState } from "react";
import { Context } from "../../../main";
import PointOption from "./PointOption";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { CURRENT_ANALYSIS_ROUT } from "../../../utils/const";

const CardPointForm = () => {
  const [tab, setTab] = useState<string>('id');
  const { AStore } = useContext(Context);
  const navigate = useNavigate();

  const handlePost = () => {
    if (tab === 'id') {
      AStore.pointAnalysisId();
    } else if (tab === 'behavior') {
      AStore.pointAnalysisBehavior;
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
        <PointOption option={tab}/>
        <Button
          disabled={AStore.isExternalLoading}
          style={{marginLeft: 'auto'}}
          onClick={
            AStore.currentPointAnalysis ? 
            () => navigate(CURRENT_ANALYSIS_ROUT + '/' + 0) :
            () => handlePost()
          }
          w={194} h={51} 
          color="indigo.7" 
          className="button"
        >
          {AStore.currentPointAnalysis ? 'К результату' : 'Анализировать'}
          Анализировать
        </Button>
      </Flex>
    </Stack>
  );
};

export default observer(CardPointForm);