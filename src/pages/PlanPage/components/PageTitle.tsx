import { ActionIcon, Flex, Title } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const PageTitle = () => {
  const navigate = useNavigate();

  return (
    <Flex gap={24} w={1520}>
        <ActionIcon radius={'1rem'} style={{background: 'white'}} w={56} h={56} onClick={() => navigate(-1)}>
          <IconChevronLeft color="#1C1C1C" stroke={1.5} width={24} height={24}/>
        </ActionIcon>
        <Title size={'h1'}>Калькулятор индивидуального плана</Title>
    </Flex>
  );
};

export default PageTitle;