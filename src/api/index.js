import axios from 'axios';

const routes = axios.create({
	baseURL: '/api',
	headers: { 'Content-Type': 'application/json; charset=utf-8' },
	timeout: 10000,
});



export function createMember(data) {
	return routes.post('/users/create', data);
}

export function checkDupId(userId) {
	return routes.post('/users/duplicateCheck', userId);
}

export default routes;
