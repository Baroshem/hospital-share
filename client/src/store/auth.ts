import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncState } from '@utils';
import { User } from '@models';
import { AppThunk } from '@typings';
import { LoginPayload, loginRequest, logoutRequest, GetProfileResponse, getProfileRequest } from '@api/auth';
import { useDispatch, useSelector } from '@hooks';
import { PostUserResponse, postUserRequest, PostUserPayload } from '@api/users';
import { PostCreateAssignmentPayload, postCreateAssignmentRequest } from '@api/hospitals';

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
    createUserRequest: state => {
      state.status = 'loading';
      state.error = null;
    },
    createUserSuccess: (state, action: PayloadAction<PostUserResponse['data']>) => {
      state.status = 'success';
      state.data = action.payload || null;
      state.error = null;
    },
    createUserFailure: (state, action: PayloadAction<string>) => {
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
  dispatch(authSlice.actions.loginRequest());

  try {
    await loginRequest(payload);
    dispatch(fetchProfile());
  } catch (ex) {
    dispatch(authSlice.actions.loginFailure(ex.message));
  }
};

const logout = (): AppThunk => async dispatch => {
  dispatch(authSlice.actions.logoutRequest());

  try {
    await logoutRequest();
    dispatch(authSlice.actions.logoutSuccess());
  } catch (ex) {
    dispatch(authSlice.actions.logoutFailure(ex.message));
  }
};

const createHospitalAssignment = (payload: PostCreateAssignmentPayload): AppThunk => async () => {
  await postCreateAssignmentRequest(payload);
};

const createUser = (postUserPayload: PostUserPayload, hospitalId?: string): AppThunk => async dispatch => {
  dispatch(authSlice.actions.logoutRequest());

  try {
    const response = await postUserRequest(postUserPayload);

    const { email, password } = postUserPayload;

    dispatch(authSlice.actions.createUserSuccess(response.data));
    dispatch(login({ email, password }));

    if (hospitalId) {
      dispatch(createHospitalAssignment({ userId: response.data.id, hospitalId }));
    }
  } catch (ex) {
    dispatch(authSlice.actions.createUserFailure(ex.message));
  }
};

export const useAuthActions = () => {
  const dispatch = useDispatch();

  return {
    fetchProfile: () => dispatch(fetchProfile()),
    login: (payload: LoginPayload) => dispatch(login(payload)),
    logout: () => dispatch(logout()),
    createUser: (postUserPayload: PostUserPayload, hospitalId?: string) =>
      dispatch(createUser(postUserPayload, hospitalId)),
  };
};

export const useAuthState = () => useSelector(state => state.auth);

export default authSlice.reducer;
