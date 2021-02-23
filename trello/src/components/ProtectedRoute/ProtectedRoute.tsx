import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, RouteComponentProps, RouteProps,  } from 'react-router-dom';
import { AppState } from '../../store';
import { isAuthenticated } from '../../store/auth';


interface ProtectedRouteProps extends RouteProps {
  isAuthenticated?: boolean
    
    
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

const mapStateToProps= (state: AppState) => {
  return {
    isAuthenticated: isAuthenticated(state)
  }
}

const ConnectedRoute = connect(mapStateToProps)(ProtectedRoute)
export {ConnectedRoute as ProtectedRoute};