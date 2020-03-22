import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth';
import hospitalsReducer from './hospitals';

const rootReducer = combineReducers({
  auth: authReducer,
  hospitals: hospitalsReducer,
});

export default rootReducer;
