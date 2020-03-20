import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';

import { FC } from '@typings';
import { theme } from '@constants';
import store from '@store/store';

const Providers: FC = ({ children }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </Provider>
);

export default Providers;
