import { BackgroundImage, Title, Text, Button } from "@mantine/core";
import StartTest from '../../../assets/GuideCard/startTest.png';
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../main";
import { UserTypes } from "../../../utils/UsersTypes";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";

interface GuideCard {
  type: string,
  description: string,
  image: string
}

const GuideCard = () => {
  const { UStore } = useContext(Context);
  const [type, setType] = useState<GuideCard>();
    
  const CardInfo = () => {
		if (UStore.user.type) {
			UserTypes.forEach(item => {
				if (item.type === UStore.user.type) {
          setType(item);
				}
			})
		} else {
      setType(
        {
          image: StartTest, 
          type: 'Какой ты кролик в финансовом мире?', 
          description: 'Пройди тест на тип финансового поведения и получи персонализированные советы'
        }
      );
    }
  }

  return (
    <BackgroundImage p={'40px'} h={299} src={StartTest} radius={32}>
			<Title w={263} mb={16} size='h4'>Какой ты кролик в финансовом мире?</Title>
			<Text w={263} mb={24} size="md" lh={'24px'}>Пройди тест на тип финансового поведения и получи персонализированные советы</Text>
			<NavLink to={'/test'}>
				<Button color="indigo.7" className="button" w={208} h={48}>Узнать результат</Button>
			</NavLink>
    </BackgroundImage>
  );
};

export default observer(GuideCard);