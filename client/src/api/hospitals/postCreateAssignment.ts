import { AxiosResponse } from 'axios';
import { fetch } from '../fetch';

export type PostCreateAssignmentPayload = {
  userId: string;
  hospitalId: string;
};

export type PostCreateAssignmentResponse = AxiosResponse<boolean>;

export const postCreateAssignmentRequest = (
  payload: PostCreateAssignmentPayload,
): Promise<PostCreateAssignmentResponse> => fetch.post('/hospitals/create-assignment', payload);
