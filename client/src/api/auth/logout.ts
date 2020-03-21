import { AxiosResponse } from 'axios';
import { fetch } from '../fetch';

export type LogoutResponse = AxiosResponse<boolean>;

export const logoutRequest = (): Promise<LogoutResponse> => fetch.post('/auth/logout');
