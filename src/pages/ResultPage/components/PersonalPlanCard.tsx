import { Button, Stack, Text, Title } from "@mantine/core";
import { NavLink } from "react-router-dom";
import { PLAN_ROUTE } from "../../../utils/const";

const PersonalPlanCard = () => {

  return (
    <Stack p={32} w={600} style={{borderRadius: '24px'}} bg={'indigo.0'} spacing={20}>
      <Stack spacing={12}>
        <Title size={'h5'} color="gray.9">Ваш индивидуальный план </Title>
        <Text size={'md'} lh={'24px'} color="ray.8" w={536}>
          С собственным планом взносов вы можете перестать волноваться о будущем, взяв его в свои руки.
        </Text>
      </Stack>
      <NavLink to={PLAN_ROUTE}>
        <Button style={{color: '#212529'}} className="button" w={203} h={48} variant="white">Создать свой план</Button>
      </NavLink>
    </Stack>
  );
};

export default PersonalPlanCard;