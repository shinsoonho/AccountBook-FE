<template>
	<div class="wrapper-container">
		<div class="container-top">
			<div class="container">
				<label id="loginLabel" for="text">LOGIN</label>
				<input v-model="loginForm.serviceId" id="serviceId" type="text" placeholder="@username" />
				<input v-model="loginForm.userPw" id="userPw" type="password" placeholder="password" />
				<button @click="login" id="loginBtn" type="button">GO !</button>
			</div>
		</div>
		<div class="semi-degine">∨</div>
		<div class="container-bottom">
			<div class="container">
				<button id="kakaoBtn" class="kakaoBtn">Login With Kakao</button>
				<button id="naverBtn" class="naverBtn">Login With Naver</button>
				<button id="createBtn" class="createBtn" @click="goPage('createMember')" >
					Create an Login
				</button>
				<button id="forgetBtn" class="forgetBtn">Forger Password?</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { userLogin } from '@/api/index';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import '@/css/login.css';

const router = useRouter();
const goPage = pageName => {
	// 페이지 이동
	router.push({
		name: pageName,
	});
};

const loginForm = ref({
	serviceId: null,
	userPw: null,
});

const login = async () => {

	try {
		const data = {
			...loginForm.value,
		};
		console.log("serviceId = " + data.serviceId);
		console.log("userPw = " + data.userPw);

		await userLogin(data);
		router.push({ name: 'mainHome' });

	} catch (error) {
		if (error.response && error.response.data && error.response.data.message) {
			alert(error.response.data.message);
		} else {
			alert('서버 오류가 발생했습니다. 관리자에게 문의하세요.');
		}
	}
}


</script>
<style></style>
