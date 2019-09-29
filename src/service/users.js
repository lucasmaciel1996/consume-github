import { http } from './config';

export default{
    getAllUser: () => http.get('users'),
    getUserByName: name => http.get(`user/${name}`),
};