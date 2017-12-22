import { request } from './request';

export const login = (data) => request('users', 'POST', data);

export const create = (data) => request('public/user', 'POST', data);

export const update = (data) => request('public/user', 'PUT', data);
