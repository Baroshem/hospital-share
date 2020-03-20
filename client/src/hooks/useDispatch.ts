import { useDispatch as useReduxDispatch } from 'react-redux';
import { AppDispatch } from '@typings';

export const useDispatch = () => useReduxDispatch<AppDispatch>();
