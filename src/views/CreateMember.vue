<template>
	<div>테스트 입니당</div>
	<hr class="my-4" />
	<form @submit.prevent="save">
		<div class="mb-3">
			<label for="title" class="form-label">아이디</label>
			<input v-model="form.userId" type="text" class="form-control" id="title" />
			<input type="button" class="btn btn-outline-primary" value="중복확인" @click="checkDuplicate"/>
			<span v-if="duplicateMessage" class="text-danger">{{ duplicateMessage }}</span>
		</div>
		<div class="mb-3">
			<label for="content" class="form-label">비밀번호</label>
			<input v-model="form.userPw" class="form-control" id="content" />
		</div>
		<div class="mb-3">
			<label for="email" class="form-label">E-Mail</label>
			<input v-model="form.email" class="form-control" id="email" />
		</div>
		<div class="pt-4">
			<button type="button" class="btn btn-outline-dark me-2" @click="goPage('login')">
				목록
			</button>
			<button class="btn btn-primary">저장</button>
		</div>
	</form>
</template>

<script setup>
import { createMember, checkDupId } from '@/api/index';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Login from './LoginPage.vue';

const router = useRouter();
const form = ref({
	userId: null,
	userPw: null,
	userEmail: null,
});

const duplicateMessage = ref('');

const checkDuplicate = async () => {
	try {
		const userId = form.value.userId;
		if( !userId ) {
			duplicateMessage.value = '아이디를 입력하세요.';
			return;
		}

		const isDuplicate = await checkDupId(userId);

		if(isDuplicate) {
			duplicateMessage.value = '이미 존재하는 아이디 입니다.';
		} else {
			duplicateMessage.value = '사용 가능한 아이디 입니다.';
		}

	} catch (error) {
		console.error(error);
	}
}


const save = async () => {
	try {
		const data = {
			...form.value,
		};
		console.log('data.userId = ' + data.userId);
		console.log('data.userPw = ' + data.userPw);
		console.log('data.userEmail = ' + data.userEmail);
		await createMember(data);

		router.push({ name: Login });
	} catch (error) {
		console.error(error);
	}
};

const goPage = pageName => {
	// 페이지 이동
	router.push({
		name: pageName,
	});
};
</script>

<style scoped></style>
