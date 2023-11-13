import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/Login.vue'; // 실제 뷰 컴포넌트의 경로에 따라 수정
import '@/css/common.css';

const routes = [
	{
		path: '/login',
		component: Login,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
