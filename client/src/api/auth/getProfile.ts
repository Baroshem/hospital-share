import { AxiosResponse } from 'axios';
import { User } from '@models';
import { fetch } from '../fetch';

export type GetProfileResponse = AxiosResponse<User | ''>;

export const getProfile = (): Promise<GetProfileResponse> => fetch.get('/auth/profile');
