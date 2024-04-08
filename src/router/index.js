import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/views/LoginPage.vue'; // 실제 뷰 컴포넌트의 경로에 따라 수정
import CreateMember from '@/views/CreateMember.vue';
import '@/css/common.css';

const routes = [
	{
		path: '/login',
		name: 'login',
		component: LoginPage,
	},
	{
		path: '/login/create',
		name: 'createMember',
		component: CreateMember,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
