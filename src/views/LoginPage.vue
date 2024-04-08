<template>
	<div class="wrapper-container">
		<div class="container-top">
			<div class="container">
				<form action="post">
					<label id="loginLabel" for="text">LOGIN</label>
					<input id="loginId" type="text" placeholder="@username" />
					<input id="loginPassword" type="password" placeholder="password" />
					<button id="loginBtn" type="button">GO !</button>
				</form>
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
import { useRouter } from 'vue-router';
import '@/css/login.css';

const router = useRouter();
const goPage = pageName => {
	// 페이지 이동
	router.push({
		name: pageName,
	});
};
</script>
<style></style>
