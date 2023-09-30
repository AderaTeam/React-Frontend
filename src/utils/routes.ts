import HomePage from "../pages/HomePage/HomePage";
import AnalysisPage from "../pages/AnalysisPage/AnalysisPage";
import AuthPage from "../pages/AuthPage";

import { HOME_ROUTE, PLAN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, TEST_ROUTE, RESULT_ROUTE } from "./const";
import TestPage from "../pages/TestPage/TestPage";
import ResultPage from "../pages/ResultPage/ResultPage";

export const authRoutes = [
  {
    path: HOME_ROUTE,
    Component: HomePage,
    title: 'Главная страница',
  },
  {
    path: PLAN_ROUTE,
    Component: AnalysisPage,
    title: 'Мой персональный план',
  },
  {
    path: TEST_ROUTE,
    Component: TestPage,
    title: 'Тестирование'
  },
  {
    path: RESULT_ROUTE,
    Component: ResultPage,
    title: 'Результат тестирования'
  }
]

export const publicRoutes = [
  {
      path: LOGIN_ROUTE,
      Component: AuthPage,
      title: 'login',
  },
  {
      path: REGISTRATION_ROUTE,
      Component: AuthPage,
      title: 'registration',
  },
]