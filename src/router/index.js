import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/views/LoginPage.vue'; // 실제 뷰 컴포넌트의 경로에 따라 수정
import CreateMember from '@/views/CreateMember.vue';
import MainHome from '@/views/home/MainHome.vue';
import '@/css/common.css';
import IndexMain from '@/views/IndexMain.vue';
import CalendarMain from '@/views/calendar/calendarMain.vue';
import ConsumeMain from '@/views/consume/consumeMain.vue';
import AssetMain from '@/views/assets/AssetMain.vue';
import SettingMain from '@/views/setting/settingMain.vue';

const routes = [
	{
		path: '/',
		redirect: 'login',
	},
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
	// other
	{
		path: '/index',
		name: 'IndexMain',
		component: IndexMain,
		children: [
			{
				path: 'home',
				name: 'mainHome',
				component: MainHome,
			},
			{
				path: 'calendar',
				name: 'calendarMain',
				component: CalendarMain,
			},
			{
				path: 'comsume',
				name: 'consumeMain',
				component: ConsumeMain,
			},
			{
				path: 'assets',
				name: 'assetMain',
				component: AssetMain,
			},
			{
				path: 'setting',
				name: 'settingMain',
				component: SettingMain,
			},
		]
	}
	
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
    // 페이지가 변경될 때마다 현재 페이지를 업데이트합니다.
    // 예를 들어, 현재 페이지를 스토어에 저장하거나 다른 방법으로 상태를 관리할 수 있습니다.
    // 여기에서는 라우터 인스턴스에 currentPage 속성을 추가하여 현재 페이지를 추적하고 있습니다.
    router.currentPage = to.name; // 페이지의 name 속성을 사용하여 페이지 식별
    next();
});

export default router;
