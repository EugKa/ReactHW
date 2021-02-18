import React, { FunctionComponent } from 'react';
import { Redirect, Route, RouteComponentProps, RouteProps,  } from 'react-router-dom';

interface ProtectedRouteProps extends RouteProps {
    isAuthenticated: boolean
    
}

const ProtectedRoute: FunctionComponent<ProtectedRouteProps> = ({ render, isAuthenticated, ...rest}) => {
    return (
        <Route
          {...rest}
          render={(routeCompProps: RouteComponentProps) =>
          isAuthenticated ? (
            render!(routeCompProps)
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: routeCompProps.location }
                }}
              />
            )
          }
        />
      );
}
export {ProtectedRoute};