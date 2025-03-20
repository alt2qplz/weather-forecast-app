import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { LoginPage } from 'pages/LoginPage';
import { CitiesPage } from 'pages/CitiesPage';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  MAIN = 'main',
  LOGIN = 'login',
  CITIES = 'cities',
  NOT_FOUND = 'not_found',
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.CITIES]: '/cities',
  [AppRoutes.NOT_FOUND]: '*'
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.LOGIN]: {
    path: routePath.login,
    element: <LoginPage/>
  },
  [AppRoutes.MAIN]: {
    path: routePath.main,
    element: <MainPage />,
    authOnly: true,
  },
  [AppRoutes.CITIES]: {
    path: routePath.cities,
    authOnly: true,
    element: <CitiesPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: routePath['not_found'],
    element: <NotFoundPage />
  },
};
