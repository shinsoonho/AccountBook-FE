<template>
	<div>회원가입</div>
	<hr class="my-4" />
	<form>
		<div class="mb-3">
			<label for="title" class="form-label">아이디</label>
			<input v-model="form.serviceId" type="text" class="form-control" id="serviceId" />
			<input type="button" class="btn btn-outline-primary" value="중복확인" @click="checkDuplicate"/>
			<span v-if="duplicateMessage" class="text-danger">{{ duplicateMessage }}</span>
		</div>
		<div class="mb-3">
			<label for="content" class="form-label">비밀번호</label>
			<input v-model="form.userPw" class="form-control" id="userPw" />
		</div>
		<div class="mb-3">
			<label for="content" class="form-label">이름</label>
			<input v-model="form.userName" class="form-control" id="userName" />
		</div>
		<div class="mb-3">
			<label for="userPhone" class="form-label">전화번호</label>
			<input v-model="form.userPhone" class="form-control" id="userPhone" />
		</div>
		<div class="mb-3">
			<label for="email" class="form-label">생년월일</label>
			<input v-model="form.userAge" class="form-control" id="userAge" />
		</div>
		<div class="mb-3">
			<label for="email" class="form-label">E-Mail</label>
			<input v-model="form.userEmail" class="form-control" id="userEmail" />
		</div>
	</form>
	<div class="pt-4">
			<button type="button" class="btn btn-outline-dark me-2" @click="goPage('login')">
				목록
			</button>
			<button @click="save" class="btn btn-primary">저장</button>
		</div>
</template>

<script setup>
import { createMember, checkDupId } from '@/api/index';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const form = ref({
	serviceId: null,
	userPw: null,
	userName: null,
	userEmail: null,
	userPhone: null,
	userAge: null,
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
		console.log('data.serviceId = ' + data.serviceId);
		console.log('data.userPw = ' + data.userPw);
		console.log('data.userName = ' + data.userName);
		console.log('data.userPhone = ' + data.userPhone);
		console.log('data.userAge = ' + data.userAge);
		console.log('data.userEmail = ' + data.userEmail);
		await createMember(data);

		router.push({ name: 'login' });

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
