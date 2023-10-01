import { BrowserRouter } from "react-router-dom"
import { YMaps } from "@pbe/react-yandex-maps"

import AppRouter from "./components/AppRouter"

import './styles/reset.css'
import { Loader, Stack } from "@mantine/core"
import { useContext, useEffect } from "react"
import { Context } from "./main"
import { observer } from "mobx-react-lite"

const App = observer(function () {
  const { UStore } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      UStore.checkAuth();
    }
  }, []);

  if (UStore.isLoading) {
    return (
      <Stack h={"100vh"} align="center" justify="center">
        <Loader size="xl" color="indigo.5"/>
      </Stack>
    );
  }

  
  return (
    <BrowserRouter>
      <YMaps>
        <AppRouter/>
      </YMaps>
    </BrowserRouter>
  )
});

export default App;
