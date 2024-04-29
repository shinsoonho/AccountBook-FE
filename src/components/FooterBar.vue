<template>
    <div class="footer">
        <ul>
            <li :class="{ 'active': currentPage === 'mainHome' }" @click="navigator('mainHome')"><span>홈</span></li>
            <li :class="{ 'active': currentPage === 'calendarMain' }" @click="navigator('calendarMain')"><span>캘린더</span></li>
            <li :class="{ 'active': currentPage === 'consumeMain' }" @click="navigator('consumeMain')"><span>소비패턴</span></li>
            <li :class="{ 'active': currentPage === 'assetMain' }" @click="navigator('assetMain')"><span>자산</span></li>
            <li :class="{ 'active': currentPage === 'settingMain' }" @click="navigator('settingMain')"><span>설정</span></li>
        </ul>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

const router = useRouter();
const route = useRoute();
const currentPage = ref(route.name);

const navigator = (componentName) => {
    currentPage.value = componentName;
    router.push({ name: componentName });
}

onMounted(() => {
    router.afterEach((to, from) => {
        currentPage.value = to.name;
    });
});

</script>

<style>

.footer {
    position: fixed;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10%; /* 화면 높이의 15%로 설정 */
    z-index: 999; /* 다른 요소 위에 표시되도록 설정 */
}

.footer ul {
    list-style-type: none; /* 목록 마커 제거 */
    padding: 0; /* 목록 내부 간격 제거 */
    margin: 0; /* 바깥 여백 제거 */
    display: flex; /* 유연한 박스(flex box)로 요소들을 배치 */
    height: 100%;
}

.footer ul li {
    flex: 1; /* 동일한 너비로 요소들을 확장 */
    display: flex; /* 요소 내부를 flex로 설정 */
    justify-content: center; /* 수평 가운데 정렬 */
    align-items: center; /* 수직 가운데 정렬 */
    cursor: pointer; /* 마우스 커서를 포인터로 변경하여 클릭 가능한 것으로 표시 */
    height: 100%; /* 부모 요소의 높이와 동일하도록 설정 */
}

.footer ul li.active {
    color: #63E890; /* 활성 상태일 때 텍스트 색상 변경 */
    border-top:1px solid #63E890; /* 활성 상태일 때 border-top 색상 변경 */
}

.footer ul li span {
    height: 100%; /* 부모 요소의 높이와 동일하도록 설정 */
    display: flex; /* 요소 내부를 flex로 설정 */
    align-items: center; /* 수직 가운데 정렬 */
}


</style>