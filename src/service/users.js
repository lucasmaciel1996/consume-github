import { http } from './config';

export default{
    getAllUser: name => name == null ? http.get('users') : http.get(`users/${name}`),
    getUserByName: name => http.get(`users/${name}`),
    getRepos: name => http.get(`users/${name}/repos`),
};