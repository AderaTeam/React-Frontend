import { SegmentedControl, Stack } from "@mantine/core";
import { useState } from "react";
import MonthlyItem from "./MonthlyItem";
import MineItem from "./MineItem";

type props = {
  calcPension: Function,
  customCalcPayment: Function,
}

const CalculatorList = ({calcPension, customCalcPayment}: props) => {
  const [tab, setTab] = useState('monthly');

  return (
    <Stack spacing={20}>
      <SegmentedControl
        radius={'20px'}
        fullWidth
        value={tab}
        onChange={setTab}
        size="xl"
        data={[
          { label: 'Ежемесячный платеж', value: 'monthly' },
          { label: 'Своя периодичность', value: 'mine' },
        ]}
      />
      {tab === 'monthly' ? <MonthlyItem calcPension={calcPension}/> : <MineItem customCalcPayment={customCalcPayment}/>}
    </Stack>
  )
};

export default CalculatorList;