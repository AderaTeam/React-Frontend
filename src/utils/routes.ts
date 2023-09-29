import HomePage from "../pages/HomePage/HomePage";
import AnalysisPage from "../pages/AnalysisPage/AnalysisPage";
import AuthPage from "../pages/AuthPage";

import { HOME_ROUTE, ANALYSIS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, TEST_ROUTE } from "./const";
import TestPage from "../pages/TestPage/TestPage";

export const authRoutes = [
  {
    path: HOME_ROUTE,
    Component: HomePage,
    title: 'Главная страница',
  },
  {
    path: ANALYSIS_ROUTE,
    Component: AnalysisPage,
    title: 'Мой персональный план',
  },
  {
    path: TEST_ROUTE,
    Component: TestPage,
    title: 'Тестирование'
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