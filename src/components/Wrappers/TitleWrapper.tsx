import { useLocation } from "react-router-dom";
import { authRoutes } from "../../utils/routes";
import { Title } from "@mantine/core";

const TitleWrapper = () => {
  const location = useLocation();
  const title = authRoutes.find(item => item.path === location.pathname)?.title!;
  
  return (
    <Title size={'h3'} color="gray.9">{title ? title : 'Результаты анализа'}</Title>
  );
};

export default TitleWrapper;