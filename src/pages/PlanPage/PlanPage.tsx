import { Stack } from "@mantine/core";
import MainWrapper from "../../components/Wrappers/MainWrapper";
import PageTitle from "./components/PageTitle";
import CalculatorList from "./components/CalculatorList";
import { useState } from "react";
import Result from "./components/Result";

export interface res {
  monthlyPayment: number,
  cash: number,
  percentEarnings: number,
  allcash: number,
}

const PlanPage = () => {
  const [result, setResult] = useState<res>();

  function calcPension(data: {firstPayment: number, currentAge: number, sex: "male"|"female", payment?: number})
    {
      const paymentYears = (data.sex=="female" ? 55 : 60) - data.currentAge;

      const amountOfPayments = paymentYears < 0 ? 12 : paymentYears * 12;

      let cash = amountOfPayments * data.payment! + data.firstPayment * 1.1;

      const percentCash = cash * 1.8 * (data.sex=="female" ? 1 : 1.5);

      const monthlyPayment = percentCash/ (15 * 12);
                
      setResult({monthlyPayment: monthlyPayment, cash: cash, percentEarnings: percentCash - cash, allcash: percentCash});
    }

    function customCalcPayment(data: {wantedPension: number, paymentsPerYear: number, firstPayment: number, currentAge: number, sex: "male"|"female"})
      {
        const paymentYears = (data.sex=="female" ? 55 : 60) - data.currentAge;

        const amountOfPayments = paymentYears < 0 ? data.paymentsPerYear : paymentYears * data.paymentsPerYear;

        const percentCash = data.wantedPension * 15 * 12;

        const monthlyPayment = percentCash / (1.8 * (data.sex=="female" ? 1 : 1.5)) / amountOfPayments;

        const cash = amountOfPayments * monthlyPayment;

        setResult({monthlyPayment: monthlyPayment, cash: cash, percentEarnings: percentCash - cash, allcash: percentCash});
      }

  return (
    <MainWrapper>
      <Stack spacing={45}>
        <PageTitle/>
        <Stack spacing={16}>
          <CalculatorList customCalcPayment={customCalcPayment} calcPension={calcPension}/>
          <Result result={result}/>
        </Stack>
      </Stack>
        <></>
    </MainWrapper>
  );
};

export default PlanPage;