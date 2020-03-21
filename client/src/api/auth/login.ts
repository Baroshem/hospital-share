import { AxiosResponse } from 'axios';
import { fetch } from '../fetch';

export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginResponse = AxiosResponse<boolean>;

export const loginRequest = (payload: LoginPayload): Promise<LoginResponse> => fetch.post('/auth/login', payload);
