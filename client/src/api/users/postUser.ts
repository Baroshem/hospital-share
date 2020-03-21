import { AxiosResponse } from 'axios';
import { fetch } from '../fetch';

export type PostUserPayload = {
  fullName: string;
  email: string;
  password: string;
  city: string;
  phone: string;
  terms: boolean;
  shareContactData: boolean;
};

export type PostUserResponse = AxiosResponse<string>;

export const postUserRequest = (payload: PostUserPayload): Promise<PostUserResponse> => fetch.post('/users', payload);
