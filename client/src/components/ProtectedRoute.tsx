import React from 'react';
import { RouteProps, Route, Redirect } from 'react-router-dom';
import { useAuthState } from '@store/auth';

export const ProtectedRoute = <T extends RouteProps = RouteProps>({ component, ...rest }: T) => {
  const auth = useAuthState();

  if (auth.status === 'idle' || auth.status === 'loading') {
    return null;
  }

  const Component = component as any;

  return (
    <Route
      {...rest}
      render={props =>
        Boolean(auth.data) ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
