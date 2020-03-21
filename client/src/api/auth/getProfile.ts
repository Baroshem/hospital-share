import { AxiosResponse } from 'axios';
import { User } from '@models';
import { fetch } from '../fetch';

export type GetProfileResponse = AxiosResponse<User | ''>;

export const getProfileRequest = (): Promise<GetProfileResponse> => fetch.get('/auth/profile');
