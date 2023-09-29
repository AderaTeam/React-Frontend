import { Flex, Stack } from "@mantine/core";
import { authRoutes, publicRoutes } from "../utils/routes";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../main";
import { observer } from "mobx-react-lite";
import Header from "./Header/Header";

const AppRouter = () => {
  const { UStore } = useContext(Context);
  const location = useLocation();

  if (UStore.isAuth && (location.pathname === '/login' || location.pathname === '/registration')) {
    return <Navigate to='/' replace/>
  };

  if (!UStore.isAuth && 
    (location.pathname === '/' || location.pathname === '/history' || location.pathname === '/database' ||
    location.pathname === '/help' || location.pathname === '/maps')) {
    return <Navigate to='/login' replace/>
  };

  return(
    <Flex>
      <Stack style={{background: '#F8F9FA', height: '100vh'}} spacing="0rem">
        {(UStore.isAuth && (location.pathname !== '/login' && location.pathname !== '/registration')) ? <Header/> : <></>}
        <Routes>
          {UStore.isAuth && authRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={<Component/>}/>
          )}
          {publicRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={<Component/>}/>
          )}
        </Routes>
      </Stack>
    </Flex>
  );
};

export default observer(AppRouter);