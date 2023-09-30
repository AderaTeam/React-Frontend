import { Button, Flex, Stack, Text, Title, Box } from "@mantine/core";
import { res } from "../PlanPage";

type props = {
  result: res | undefined
}

const Result = ({result}: props) => {

  return (
    <Flex p={40} bg={'#ffff'} style={{borderRadius: '32px'}}>
      <Flex w={472} direction={'column'} justify={'space-between'}> 
        <Stack spacing={8}>
          <Text size={'md'} lh={'24px'} color="gray.6">Ваша персональная пенсия</Text>
          <Title size={'h1'} color="indigo.7">~ {Math.trunc(result?.monthlyPayment!)} ₽</Title>
        </Stack>
        <Stack spacing={8}> 
          <Button color="indigo.7" className="button" w={341} h={48}>Перейти к оформлению</Button>
          <Text size={'md'} lh={'24px'} color="gray.6">*при условии выхода на пенсию по гос. условиям в 60 лет</Text>
        </Stack>
      </Flex>
      <Flex w={456} wrap={'wrap'}>
        <Box w={456} bg={'gray.0'} style={{borderRadius: '24px'}} mb={8} p={'24px'}>
          <Stack spacing={16}>
            <Text size={'md'} lh={'24px'} color="gray.6">Полное накопление</Text>
            <Title size={'h3'} color="gray.9">{Math.trunc(result?.allcash!)}</Title>
          </Stack>
        </Box>
        <Box mr={8} w={224} bg={'gray.0'} style={{borderRadius: '24px'}} p={'24px'}>
          <Stack spacing={16}>
            <Text size={'md'} lh={'24px'} color="gray.6">Вложенные средства</Text>
            <Title size={'h3'} color="gray.9">{Math.trunc(result?.cash!)}</Title>
          </Stack>
        </Box>
        <Box w={224} bg={'gray.0'} style={{borderRadius: '24px'}} p={'24px'}>
          <Stack spacing={16}>
            <Text size={'md'} lh={'24px'} color="gray.6">Процентные накопления</Text>
            <Title size={'h3'} color="gray.9">{Math.trunc(result?.percentEarnings!)}</Title>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Result;