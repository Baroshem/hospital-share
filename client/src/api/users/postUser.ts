import { AxiosResponse } from 'axios';
import { fetch } from '../fetch';
import { User } from '@models';

export type PostUserPayload = {
  fullName: string;
  email: string;
  password: string;
  city: string;
  phone: string;
  terms: boolean;
  shareContactData: boolean;
};

export type PostUserResponse = AxiosResponse<User>;

export const postUserRequest = (payload: PostUserPayload): Promise<PostUserResponse> => fetch.post('/users', payload);
