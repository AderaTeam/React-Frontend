import ClassesPage from "../pages/TablePage/TablePage";
import HomePage from "../pages/HomePage/HomePage";
import AnalysisPage from "../pages/AnalysisPage/AnalysisPage";

import { CLASSES_ROUTE, HOME_ROUTE, ANALYSIS_ROUTE } from "./const";

export const AppRoutes = [
  {
    path: HOME_ROUTE,
    Component: HomePage,
    title: 'Главная страница',
  },
  {
    path: ANALYSIS_ROUTE,
    Component: AnalysisPage,
    title: 'Анализ',
  },
  {
    path: CLASSES_ROUTE,
    Component: ClassesPage,
    title: 'Классы',
  },
]; 