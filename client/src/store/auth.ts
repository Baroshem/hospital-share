import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncState } from '@utils';
import { User } from '@models';
import { AppThunk } from '@typings';
import { LoginPayload, loginRequest, logoutRequest, GetProfileResponse, getProfileRequest } from '@api/auth';
import { useDispatch, useSelector } from '@hooks';
import { message } from 'antd';

const authSlice = createSlice({
  name: 'auth',
  initialState: createAsyncState<User | null>(null),
  reducers: {
    fetchProfileRequest: state => {
      state.status = 'loading';
      state.error = null;
    },
    fetchProfileSuccess: (state, action: PayloadAction<GetProfileResponse['data']>) => {
      state.status = 'success';
      state.data = action.payload || null;
      state.error = null;
    },
    fetchProfileFailure: (state, action: PayloadAction<string>) => {
      state.status = 'failure';
      state.error = action.payload;
    },
    loginRequest: state => {
      state.status = 'loading';
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.status = 'failure';
      state.error = action.payload;
    },
    logoutRequest: state => {
      state.status = 'loading';
      state.error = null;
    },
    logoutSuccess: state => {
      state.status = 'success';
      state.data = null;
      state.error = null;
    },
    logoutFailure: (state, action: PayloadAction<string>) => {
      state.status = 'failure';
      state.error = action.payload;
    },
  },
});

const fetchProfile = (): AppThunk => async dispatch => {
  dispatch(authSlice.actions.fetchProfileRequest());

  try {
    const { data } = await getProfileRequest();
    dispatch(authSlice.actions.fetchProfileSuccess(data));
  } catch (ex) {
    dispatch(authSlice.actions.fetchProfileFailure(ex.message));
  }
};

const login = (payload: LoginPayload): AppThunk => async dispatch => {
  message.loading('Logging in');
  dispatch(authSlice.actions.loginRequest());

  try {
    await loginRequest(payload);
    message.success('Login successful');
    dispatch(fetchProfile());
  } catch (ex) {
    message.warning('Login unsuccessful');
    dispatch(authSlice.actions.loginFailure(ex.message));
  }
};

const logout = (): AppThunk => async dispatch => {
  message.loading('Logging out');
  dispatch(authSlice.actions.logoutRequest());

  try {
    await logoutRequest();
    message.success('You has been logged out succesfully');
    dispatch(authSlice.actions.logoutSuccess());
  } catch (ex) {
    message.success('Loging out failed');
    dispatch(authSlice.actions.logoutFailure(ex.message));
  }
};

export const useAuthActions = () => {
  const dispatch = useDispatch();

  return {
    fetchProfile: () => dispatch(fetchProfile()),
    login: (payload: LoginPayload) => dispatch(login(payload)),
    logout: () => dispatch(logout()),
  };
};

export const useAuthState = () => useSelector(state => state.auth);

export default authSlice.reducer;
