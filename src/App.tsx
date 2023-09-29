import { BrowserRouter } from "react-router-dom"
import { YMaps } from "@pbe/react-yandex-maps"

import AppRouter from "./components/AppRouter"

import './styles/reset.css'

const App = () => {

  return (
    <BrowserRouter>
      <YMaps>
        <AppRouter/>
      </YMaps>
    </BrowserRouter>
  )
}

export default App
