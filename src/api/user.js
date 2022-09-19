import {get,post} from '@/utils/request'
export const userApi = p => post('api/user', p);