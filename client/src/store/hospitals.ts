import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncState } from '@utils';
import { Hospital } from '@models';
import { AppThunk } from '@typings';
import { useDispatch, useSelector } from '@hooks';
import { getHospitalsRequest, GetHospitalsResponse } from '@api/hospitals';

const hospitalsSlice = createSlice({
  name: 'hospitals',
  initialState: createAsyncState<Hospital[]>([]),
  reducers: {
    fetchHospitalsRequest: state => {
      state.status = 'loading';
      state.error = null;
    },
    fetchHospitalsSuccess: (state, action: PayloadAction<GetHospitalsResponse['data']>) => {
      state.status = 'success';
      state.data = action.payload;
      state.error = null;
    },
    fetchHospitalsFailure: (state, action: PayloadAction<string>) => {
      state.status = 'failure';
      state.error = action.payload;
    },
  },
});

const fetchHospitals = (): AppThunk => async dispatch => {
  dispatch(hospitalsSlice.actions.fetchHospitalsRequest());

  try {
    const { data } = await getHospitalsRequest();
    dispatch(hospitalsSlice.actions.fetchHospitalsSuccess(data));
  } catch (ex) {
    dispatch(hospitalsSlice.actions.fetchHospitalsFailure(ex.message));
  }
};

export const useHospitalsActions = () => {
  const dispatch = useDispatch();

  return {
    fetchHospitals: () => dispatch(fetchHospitals()),
  };
};

export const useHospitalsState = () => useSelector(state => state.hospitals);

export default hospitalsSlice.reducer;
