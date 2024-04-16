import axios from 'axios';

const routes = axios.create({
	baseURL: '/api',
	headers: { 'Content-Type': 'application/json; charset=utf-8' },
	timeout: 10000,
});


export function userLogin(data) {
	return routes.post('/users/login', data);
}

export function createMember(data) {
	return routes.post('/users/register', data);
}

export function checkDupId(serviceId) {
		return routes.post('/users/duplicateCheck', { serviceId });
}


export default routes;
