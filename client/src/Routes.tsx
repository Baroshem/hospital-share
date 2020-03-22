import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '@views/Home';
import SignIn from '@views/SignIn';
import SignUp from '@views/SignUp';
import Page404 from '@views/Page404';
import Company from '@views/Company';
import { AppLayout } from '@components/AppLayout';

const Routes = () => (
  <AppLayout>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/company/:name" component={Company} />
      <Route component={Page404} />
    </Switch>
  </AppLayout>
);

export default Routes;
