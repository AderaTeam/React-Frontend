import { Flex, NumberInput, SegmentedControl, Stack, Text } from "@mantine/core";
import { useEffect, useState } from "react";

type props = {
  calcPension: Function
}

const MonthlyItem = ({calcPension} : props) => {
  const [monthlyFee, setMonthlyFee] = useState<number>(500);
  const [initialFee, setInitialFee] = useState<number>(1500);
  const [age, setAge] = useState<number>(18);
  const [sex, setSex] = useState('male');

    useEffect(() => {
      calcPension({firstPayment: initialFee, currentAge: age, sex: sex, payment: monthlyFee})
    }, [ monthlyFee,initialFee,age,sex])

  return (
    <Flex bg={'#ffff'} align={'center'} style={{borderRadius: '32px'}} p={'40px'} gap={20}>
      <Flex gap={16}>
        <Stack spacing={6}>
          <NumberInput
            label="Ежемесячный взнос"
            className="input"
            value={monthlyFee}
            min={500}
            max={50000}
            onChange={(e) => setMonthlyFee(+e)}
            parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
            formatter={(value) =>
              !Number.isNaN(parseFloat(value))
              ? `${value} ₽`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
              : '0 ₽'
            }
            hideControls
          />
          <Text size={'sm'} lh={'21px'} color="gray.6">От 500 ₽ до 50 000 ₽</Text>
        </Stack>
        <Stack spacing={6}>
          <NumberInput
            label="Первоначальный взнос"
            className="input"
            value={initialFee}
            min={1500}
            max={600000}
            onChange={(e) => setInitialFee(+e)}
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
            className="input"
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

export default MonthlyItem;