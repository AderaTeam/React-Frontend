import { Flex, Stack, Image, Title, Text, Button } from "@mantine/core";
import { observer } from "mobx-react-lite";
import FullWidthWrapper from "../../components/Wrappers/FullWidthWrapper";
import avatar from '../../assets/avatar_big.png';
import { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import { UserTypes } from "../../utils/UsersTypes";
import PersonalPlanCard from "./components/PersonalPlanCard";
import { NavLink } from "react-router-dom";

interface GuideCard {
  type: string,
  description: string,
  image: string
}

const ResultPage = () => {
  const { UStore } = useContext(Context);
  const [type, setType] = useState<GuideCard>();

  useEffect(() => {
    UserTypes.forEach(item => {
      if (item.type === UStore.user.type) {
        setType(item);
      }
    })
  }, [])
  

  return (
    <FullWidthWrapper>
      <Flex bg={'#ffff'} style={{borderRadius: '32px'}} p={'64px'} justify="space-between" align={'center'}>
        <Stack spacing={30}>
            <Title size={'h2'} color="gray.9">Вы - <span style={{color: '#4263EB'}} color="indigo.7"> {UStore.user?.type}!</span></Title> 
            <Text w={700} size={'lg'} lh={'27px'} color="gray.8">
              {type?.description}
            </Text>
            <PersonalPlanCard/>
            <NavLink to={'/'}>
              <Button color="indigo.7" className="button" w={223} h={48}>На главную страницу</Button>
            </NavLink>  
        </Stack>
        <Image src={avatar} width={400} height={400}/>
      </Flex>
    </FullWidthWrapper>    
    );
};

export default observer(ResultPage);