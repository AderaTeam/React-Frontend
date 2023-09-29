import { BackgroundImage, Title, Text, Button } from "@mantine/core";
import StartTest from '../../../assets/GuideCard/startTest.png';
import { useContext } from "react";
import { Context } from "../../../main";
import { UserTypes } from "../../../utils/UsersTypes";
import { NavLink } from "react-router-dom";

const GuideCard = () => {
  const { UStore } = useContext(Context);
    
  const CardInfo = () => {
		if (UStore.user.type) {
			UserTypes.forEach(item => {
				if (item.type === UStore.user.type) {
					return item;
				}
			})
		}

		return {
			image: StartTest, 
			title: 'Какой ты кролик в финансовом мире?', 
			description: 'Пройди тест на тип финансового поведения и получи персонализированные советы'
		};
  }

  return (
    <BackgroundImage p={'40px'} h={299} src={CardInfo().image} radius={32}>
			<Title w={263} mb={16} size='h4'>{CardInfo().title}</Title>
			<Text w={263} mb={24} size="md" lh={'24px'}>{CardInfo().description}</Text>
			<NavLink to={'/test'}>
				<Button color="indigo.7" className="button" w={208} h={48}>Узнать результат</Button>
			</NavLink>
    </BackgroundImage>
  );
};

export default GuideCard;