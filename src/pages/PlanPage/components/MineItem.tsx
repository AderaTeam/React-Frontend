import { Flex, NumberInput, Stack, Text, SegmentedControl} from "@mantine/core";
import { useEffect, useState } from "react";

type props = {
  customCalcPayment: Function
}

const MineItem = ({customCalcPayment}: props) => {
  const [wantedPension, setWantedPension] = useState<number>(500);
  const [paymentsPerYear, setPaymentsPerYear] = useState<number>(1);
  const [firstPayment, setFirstPayment] = useState<number>(1500);
  const [age, setAge] = useState<number>(18);
  const [sex, setSex] = useState('male');

  useEffect(() => {
    if (paymentsPerYear) {
      customCalcPayment({wantedPension: wantedPension, 
        paymentsPerYear: paymentsPerYear, firstPayment: firstPayment,
        currentAge: age, sex: sex
      });
    }
    
  }, [wantedPension, paymentsPerYear, firstPayment, age, sex])

  return (
    <Flex bg={'#ffff'} align={'center'} style={{borderRadius: '32px'}} p={'40px'} gap={20}>
      <Flex gap={16}>
        <Stack spacing={6}>
          <NumberInput
            label="Желаемая пенсия"
            className="inputMini"
            value={wantedPension}
            min={500}
            max={1000000}
            onChange={(e) => setWantedPension(+e)}
            parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
            formatter={(value) =>
              !Number.isNaN(parseFloat(value))
              ? `${value} ₽`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
              : '0 ₽'
            }
            hideControls
          />
          <Text size={'sm'} lh={'21px'} color="gray.6">От 500 ₽ до 1 000 000 ₽</Text>
        </Stack>
        <Stack spacing={6}>
          <NumberInput
            label="Число взносов в год"
            className="inputMini"
            value={paymentsPerYear}
            min={1}
            max={12}
            onChange={(e) => setPaymentsPerYear(+e)}
            parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
            hideControls
          />
          <Text size={'sm'} lh={'21px'} color="gray.6">От 1 до 12</Text>
        </Stack>
        <Stack spacing={6}>
          <NumberInput
            label="Начальный взнос"
            className="inputMini"
            value={firstPayment}
            min={1500}
            max={60000}
            onChange={(e) => setFirstPayment(+e)}
            parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
            formatter={(value) =>
              !Number.isNaN(parseFloat(value))
              ? `${value} ₽`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
              : '0 ₽'
            }
            hideControls
          />
          <Text size={'sm'} lh={'21px'} color="gray.6">От 1 500 ₽ до 600 000 ₽</Text>
        </Stack>
        <NumberInput
          label="Возраст"
          className="inputAge"
          value={age}
          min={18}
          max={99}
          onChange={(e) => setAge(+e)}
          parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
          hideControls
        />
      </Flex>
      <SegmentedControl
        value={sex}
        onChange={setSex}
        fullWidth
        size="lg"
        radius={'16px'}
        data={[
          { label: 'Муж.', value: 'male' },
          { label: 'Жен.', value: 'female' },
        ]}
      />
    </Flex>
  );
};

export default MineItem;