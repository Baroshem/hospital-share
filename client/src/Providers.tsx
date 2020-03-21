import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { FC } from '@typings';
import store from '@store/store';
import { Theme, Translation, Validation } from './services';
import { GlobalStyles } from '@components/GlobalStyles';

const Providers: FC = ({ children }) => (
  <Suspense fallback={null}>
    <BrowserRouter>
      <Translation.Provider>
        <Provider store={store}>
          <QueryParamProvider ReactRouterRoute={Route}>
            <Theme.Provider>
              <Validation.Provider>{children}</Validation.Provider>
              <GlobalStyles />
            </Theme.Provider>
          </QueryParamProvider>
        </Provider>
      </Translation.Provider>
    </BrowserRouter>
  </Suspense>
);

export default Providers;
