import React from 'react';
import {Router, useNavigate} from '@reach/router';

import ScreenWrapper from 'components/ScreenWrapper';
import Redirect from 'components/Redirect';
import {NotFound404Screen} from 'screens/404.screen';

export const PrivateRoutes = ({routes, extraRoutes, user}) => {
  return (
    <Router>
      <Redirect path="/" user={user} />
      <ScreenWrapper path={`/${user.type}/`} routes={routes}>
        <>
          {routes.map((Route, index) => {
            return <Route.Component path={`/${user.type}${Route.path}`} key={index.toString()} />;
          })}
          {routes.map((Route) => {
            return Route.subMenu
              ? Route.subMenu.map((ChildRoute, ind) => (
                  <ChildRoute.Component
                    path={`/${user.type}${ChildRoute.path}`}
                    key={ind.toString()}
                  />
                ))
              : null;
          })}
          {extraRoutes
            ? extraRoutes.map((Route, index) => {
                return (
                  <Route.Component path={`/${user.type}${Route.path}`} key={index.toString()} />
                );
              })
            : null}
          <NotFound404Screen default />
        </>
      </ScreenWrapper>
    </Router>
  );
};
