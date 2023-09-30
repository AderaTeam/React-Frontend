import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../../../main";
import { Avatar, Flex, Stack, Title } from "@mantine/core";
import avatar from '../../../assets/avatar_mini.svg';

const UserInfo = () => {

  const { UStore } = useContext(Context);

  return (
    <Flex p={40} style={{borderRadius: '32px'}} bg={'#ffff'}>
      <Stack spacing={24}>
        <Stack spacing={8}>
          <Avatar w={64} h={64} src={avatar}/>
          <Title size={'h2'}>{UStore.user.username}</Title>
        </Stack>
        <Stack spacing={12}>

        </Stack>
      </Stack>
    </Flex>
  );

};

export default observer(UserInfo);