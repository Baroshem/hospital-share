import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '@views/Home';
import SignIn from '@views/SignIn';
import SignUp from '@views/SignUp';
import Page404 from '@views/Page404';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
