import { Flex, Stack, Text, Title } from "@mantine/core";
import { IconStarFilled, IconStarsFilled } from "@tabler/icons-react";

interface props {
  title: string,
}

const CardTitle = ({title}: props) => {

  return (
    <Stack spacing={24}>
      <Flex align="center" gap={12}>
        {title !== 'Внешний анализ' ? <IconStarFilled stroke={1.5} style={{color: "#4263EB"}}/> :
        <IconStarsFilled stroke={1.5} style={{color: "#4263EB"}}/>}
        <Title size={'h3'} color="gray.9">{title}</Title>
      </Flex>
      <Text w={700} size={'ms'} lh={'24px'} color="gray.6">{
        title !== 'Внешний анализ' ? 
          'Выберите один из критериев, по которому будет проводиться анализ' :
          'Выберите один или несколько макроэкономический условий для прогнозирования поведения общего среза'
        }
      </Text>
    </Stack>
  );
};

export default CardTitle;