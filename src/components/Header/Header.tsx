import { Text, Flex, Image, createStyles } from "@mantine/core";
import { observer } from "mobx-react-lite";
import logo from '../../assets/logo.svg';
import { IconLogout } from '@tabler/icons-react';
import { authRoutes } from "../../utils/routes";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../main";

const useStyles = createStyles(() => ({
  navItem: {
    marginRight: '48px',
    '&:last-child': {
      marginRight: '0px',
    }
  }
}));

const Header = () => {
  const { UStore } = useContext(Context);
  const { classes } = useStyles();
  console.log(UStore.user)

  return (
    <Flex align="center" style={{padding: '24px 200px'}}>
      <NavLink to={'/'}>
        <Image width={132} height={60} src={logo} style={{marginRight: '120px'}}/>
      </NavLink>
      <Flex>
        {authRoutes.map(item => {
          if (item.title !== 'Главная страница' && item.title !== 'Тестирование' && item.title !== 'Результат тестирования') {
            return (
              <NavLink className={classes.navItem} to={item.path} key={item.path}>
                <Text size={'md'} lh={'24px'}>{item.title}</Text>
              </NavLink>
            )
          }
        })}
      </Flex>
      <Flex style={{marginLeft: 'auto'}}>
        <Text size={'md'} lh={'24px'}>{UStore.user && UStore.user.username}</Text>
        <IconLogout 
          style={{marginLeft: '8px', cursor: 'pointer'}} 
          onClick={() => UStore.logout()} 
          width={18} height={18} 
          stroke={1.5} 
          color="#343A40"
        />
      </Flex>
  </Flex>
  );
};

export default observer(Header);