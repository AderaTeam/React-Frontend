import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../main";
import { Avatar, Flex, Stack, Text, Title } from "@mantine/core";
import { IconInfoCircleFilled } from '@tabler/icons-react';
import avatar from '../../../assets/avatar_mini.svg';
import { NavLink } from "react-router-dom";
import { UserTypes } from "../../../utils/UsersTypes";

interface GuideCard {
  type: string,
  description: string,
  image: string
}

const UserInfo = () => {
  const [type, setType] = useState<GuideCard>();
  const { UStore } = useContext(Context);

  useEffect(() => {
    if (UStore.user.type) {
      UserTypes.forEach(item => {
        if (item.type === UStore.user.type) {
          setType(item);
        }
      })
    }
  }, [])

  return (
    <Flex p={40} justify={'space-between'} style={{borderRadius: '32px'}} bg={'#ffff'}>
      <Stack spacing={24}>
        <Stack spacing={8}>
          <Avatar w={64} h={64} src={UStore.user.type ? type?.image : avatar}/>
          <Title size={'h2'}>{UStore.user.username}</Title>
        </Stack>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{display: 'flex', marginBottom: '12px'}}>
            <div
              style={
                {borderRadius: '20px', 
                display: 'inline',
                padding: '4px 12px',
                background: '#DBE4FF',
                color: '#4263EB',
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: '21px',
              }}
            >
              {UStore.user.isPlan ? 'Индивидуальный  пенсионный план ' : 'Нет индивидуального плана'}
            </div>
          </div>
          <NavLink to={'/test'}>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <div
                style={
                  {borderRadius: '20px', 
                  display: 'flex',
                  padding: '4px 12px',
                  background: '#DBE4FF',
                  fontSize: '14px',
                  fontWeight: '400',
                  lineHeight: '21px',
                  alignItems: 'center',
                  color: "#4263EB"
                }}
              >
                {UStore.user.type ? UStore.user.type : 'Нет результатов тестирования'}
                <IconInfoCircleFilled stroke={1.5} width={24} height={24} style={{marginLeft: '4px'}}/>
              </div>
            </div>
          </NavLink>
        </div>
      </Stack>

      <Stack p={'24px 32px'} w={400} style={{border: '1px solid #DEE2E6', borderRadius: '24px'}} spacing={16}>
        <Stack spacing={8}>
          <Stack spacing={0}>
            <Text size={'sm'} lh={'21px'} color="#7F868E">Компания</Text>
            <Text size={'md'} lh={'24px'} color="gray.9">@Vk</Text>
          </Stack>
          <Stack spacing={0}>
            <Text size={'sm'} lh={'21px'} color="#7F868E">Почта</Text>
            <Text size={'md'} lh={'24px'} color="gray.9">{UStore.user.email}</Text>
          </Stack>
          <Stack spacing={0}>
            <Text size={'sm'} lh={'21px'} color="#7F868E">Телефон</Text>
            <Text size={'md'} lh={'24px'} color="gray.9">+7 999 999 99 99</Text>
          </Stack>
        </Stack>
        <Text size={'sm'} lh={'21px'} color="indigo.6">Редактировать</Text>
      </Stack>
    </Flex>
  );

};

export default observer(UserInfo);