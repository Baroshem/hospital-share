import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { FC } from '@typings';
import store from '@store/store';
import { Theme, Translation, Validation } from './services';

const Providers: FC = ({ children }) => (
  <Suspense fallback={null}>
    <Translation.Provider>
      <Provider store={store}>
        <Theme.Provider>
          <Validation.Provider>{children}</Validation.Provider>
        </Theme.Provider>
      </Provider>
    </Translation.Provider>
  </Suspense>
);

export default Providers;
