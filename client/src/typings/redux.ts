import { ThunkAction, Action } from '@reduxjs/toolkit';
import rootReducer from '@store/rootReducer';
import store from '@store/store';

export type RootState = ReturnType<typeof rootReducer>;

export type ReduxStore = typeof store;

export type AppDispatch = ReduxStore['dispatch'];

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
