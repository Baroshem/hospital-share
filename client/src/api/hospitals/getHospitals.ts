import { AxiosResponse } from 'axios';
import { fetch } from '../fetch';
import { Hospital } from '@models';

export type GetHospitalsResponse = AxiosResponse<Hospital[]>;

export const getHospitalsRequest = (): Promise<GetHospitalsResponse> => fetch.get('/hospitals');
