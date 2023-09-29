import { ActionIcon, Flex, Stack, Title } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
import { authRoutes } from "../../utils/routes";
import { IconChevronLeft } from '@tabler/icons-react';

type Props = {
  children?: React.ReactNode;
};

const FullWidthWrapper = ({children} : Props) => {
  const location = useLocation();
  const title = authRoutes.find(item => item.path === location.pathname)?.title!;
  const navigate = useNavigate();

  return (
      <Stack p={'40px 200px'} spacing={40}>
        <Flex gap={24} w={1520}>
          {title === 'Тестирование' && 
            <ActionIcon radius={'1rem'} style={{background: 'white'}} w={56} h={56} onClick={() => navigate(-1)}>
              <IconChevronLeft color="#1C1C1C" stroke={1.5} width={24} height={24}/>
            </ActionIcon>
          }
          <Title size={'h1'}>{title}</Title>
        </Flex>
        {children}
      </Stack>
  );
};

export default FullWidthWrapper;