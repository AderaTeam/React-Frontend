import { Flex, Stack } from "@mantine/core";
import { authRoutes, publicRoutes } from "../utils/routes";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { observer } from "mobx-react-lite";
import Header from "./Header/Header";
import NavbarNested from "./Navbar/Navbar";
import { CURRENT_ANALYSIS_ROUT } from "../utils/const";

const AppRouter = () => {
  const { UStore, AStore } = useContext(Context);
  const location = useLocation();

  const [currentRoute, setCurrentRoute] = useState<boolean>(false);

  useEffect(() => {
    if (!location.pathname.indexOf(CURRENT_ANALYSIS_ROUT)) {
      setCurrentRoute(true);
    };
    if (currentRoute && location.pathname != '/analysis/0') {
      setCurrentRoute(false);
      AStore.setCurrentExternalAnalysis(undefined);
      AStore.setCurrentPointAnalysis(undefined);
    };
  }, [location]);

    if ((!AStore.currentExternalAnalysis && !AStore.currentPointAnalysis) && location.pathname === '/analysis/0') {
      return <Navigate to='/' replace/>
    };

  if (UStore.isAuth && (location.pathname === '/login' || location.pathname === '/registration')) {
    return <Navigate to='/' replace/>
  }

  if (!UStore.isAuth && 
    (location.pathname === '/' || location.pathname === '/test' || location.pathname === '/test/result' ||
    location.pathname === '/plan' || location.pathname === '/maps' || 
    location.pathname === '/history' || location.pathname === '/analysis')) {
    return <Navigate to='/login' replace/>
  }

  if (!UStore.user.type && location.pathname === '/test/result') {
    return <Navigate to='/test' replace/>
  }

  if (UStore.user.type && location.pathname === '/test') {
    return <Navigate to='/test/result' replace/>
  }

  if (UStore.isAuth && UStore.user.role !== 'user' && (location.pathname !== '/history' && location.pathname !== '/analysis')) {
    return <Navigate to='/analysis' replace/>
  }

  return(
    <Flex>
      {(UStore.isAuth && (location.pathname !== '/login' && location.pathname !== '/registration')
      && UStore.user.role !== 'user') 
      ? <NavbarNested/> : <></>}
      <Stack style={{background: '#F8F9FA', height: '100vh'}} spacing="0rem">
        {(UStore.isAuth && (location.pathname !== '/login' && location.pathname !== '/registration') 
        && UStore.user.role === 'user') ? 
        <Header/> : <></>}
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