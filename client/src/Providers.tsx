import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { FC } from '@typings';
import store from '@store/store';
import { Theme, Translation, Validation } from './services';

const Providers: FC = ({ children }) => (
  <Suspense fallback={null}>
    <Provider store={store}>
      <Theme.Provider>
        <Translation.Provider>
          <Validation.Provider>{children}</Validation.Provider>
        </Translation.Provider>
      </Theme.Provider>
    </Provider>
  </Suspense>
);

export default Providers;
