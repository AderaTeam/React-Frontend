import { Button, Stack, Text, Title } from "@mantine/core";
import { NavLink } from "react-router-dom";
import { PLAN_ROUTE } from "../../../utils/const";

const PlanCard = () => {
  return (
    <Stack spacing={16} bg={'indigo.7'} p={40} style={{borderRadius: '32px'}}>
      <Stack spacing={8}>
        <Text
          w={234}
          lh={'21px'} 
          size={'sm'}
          color="#ffff"
          style={{padding: '4px 12px', borderRadius: '20px', background: '#3B5BDB'}}
        >
          Рекомендованный план вклада
        </Text>
        <Title size={'h2'} color="#ffff">Название персонального плана</Title>
      </Stack>
      <Text w={488} size={'md'} lh={'24px'} color="#ffff">
        Подстраивается под ваши актуальные возможности, с учетом возможных изменений в будущем
      </Text>
      <NavLink to={PLAN_ROUTE}>
        <Button 
          color="gray.9" 
          variant="white" 
          className="button"
          w={248} h={48}
        >
          Подробнее
        </Button>
      </NavLink>
    </Stack>
  );
};

export default PlanCard;