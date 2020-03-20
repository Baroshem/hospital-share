import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '@typings';

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
