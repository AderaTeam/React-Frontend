import HomePage from "../pages/HomePage/HomePage";
import AuthPage from "../pages/AuthPage";
import TestPage from "../pages/TestPage/TestPage";
import ResultPage from "../pages/ResultPage/ResultPage";
import PlanPage from "../pages/PlanPage/PlanPage";
import HistoryPage from "../pages/HistoryPage/HistoryPage";
import AnalysisPage from "../pages/AnalysisPage/AnalysisPage";

import { HOME_ROUTE, PLAN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, TEST_ROUTE, RESULT_ROUTE, HISTORY_ROUTE, ANALYSIS_ROUTE } from "./const";

import { IconDeviceAnalytics, IconHistory } from '@tabler/icons-react';

export const authRoutes = [
  {
    path: HOME_ROUTE,
    Component: HomePage,
    title: 'Главная страница',
    isAdmin: false,
    icon: IconDeviceAnalytics
  },
  {
    path: PLAN_ROUTE,
    Component: PlanPage,
    title: 'Мой персональный план',
    isAdmin: false,
    icon: IconDeviceAnalytics
  },
  {
    path: TEST_ROUTE,
    Component: TestPage,
    title: 'Тестирование',
    isAdmin: false,
    icon: IconDeviceAnalytics
  },
  {
    path: RESULT_ROUTE,
    Component: ResultPage,
    title: 'Результат тестирования',
    isAdmin: false,
    icon: IconDeviceAnalytics
  },
  {
    path: ANALYSIS_ROUTE,
    Component: AnalysisPage,
    title: 'Виды анализа',
    isAdmin: true,
    icon: IconDeviceAnalytics
  },
  {
    path: HISTORY_ROUTE,
    Component: HistoryPage,
    title: 'История',
    isAdmin: true,
    icon: IconHistory
  },
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
