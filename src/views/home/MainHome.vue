<template>
    <div>
        <div class="container-top-main">
            <div class="container-main-left">
                <dl>
                    <dt>지출</dt>
                    <dt>800,000</dt>
                </dl>
                <dl>
                    <dt>수입</dt>
                    <dt>1,000,000</dt>
                </dl>
                <dl>
                    <dt>총 자산</dt>
                    <dt>200,000</dt>
                </dl>
            </div>
            <div class="container-main-right">
                <dl><dt>총소비량</dt></dl>
                <canvas ref="myCanvas" width="200" height="200"></canvas>
                <dl><dt>800,000</dt></dl>
            </div>
        </div>
        <div class="container-bottom-main">
            <span class="consume-title">지출내역</span>
            <table border="1">
                <tr><td>1</td></tr>
            </table>
        </div>
    </div>
</template>

<script setup>

import { onMounted, ref } from 'vue';

const canvasRef = ref(null); // ref 함수를 사용하여 참조를 생성

onMounted(() => {
  let canvas = canvasRef.value; // toRefs 함수를 사용하여 참조를 가져옴
  if (!canvas) {
    canvas = createCanvas(); // canvas가 없는 경우 새로운 캔버스 생성
    canvasRef.value = canvas; // 생성된 캔버스를 참조에 할당
  }
  drawPieChart(canvas); // 컴포넌트가 마운트된 후에 원형 그래프를 그리는 함수 호출
});

function createCanvas() {
  const existingCanvas = document.querySelector('.container-main-right canvas'); // 이미 존재하는 캔버스 요소 확인
  if (existingCanvas) {
    return existingCanvas; // 이미 존재하는 캔버스 요소 반환
  }
  const canvas = document.createElement('canvas'); // 새로운 캔버스 요소 생성
  canvas.width = 200; // 너비 설정
  canvas.height = 200; // 높이 설정
  const container = document.querySelector('.container-main-right'); // 캔버스를 삽입할 컨테이너 요소 선택
  container.appendChild(canvas); // 컨테이너에 캔버스 삽입
  return canvas;
}

function drawPieChart(canvas) {
  const ctx = canvas.getContext('2d');
  const data = [300, 200, 500]; // 각 섹션의 데이터
  const colors = ['#ff6384', '#36a2eb', '#ffce56']; // 각 섹션의 색상

  const total = data.reduce((acc, curr) => acc + curr, 0); // 데이터의 총합 계산

  let startAngle = 0;
  for (let i = 0; i < data.length; i++) {
    const sliceAngle = (2 * Math.PI * data[i]) / total; // 각 섹션의 각도 계산
    ctx.fillStyle = colors[i]; // 섹션의 색상 지정
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2); // 중심으로부터 시작
    ctx.arc(canvas.width / 2, canvas.height / 2, Math.min(canvas.width, canvas.height) / 2, startAngle, startAngle + sliceAngle);
    ctx.lineTo(canvas.width / 2, canvas.height / 2); // 중심으로 되돌아옴
    ctx.fill(); // 섹션 색상 채우기
    startAngle += sliceAngle; // 다음 섹션의 시작 각도 갱신
  }
}

</script>

<style>

.container-top-main {
    display: flex;
    padding: 50px 0;
    border-bottom: 1px solid black;
}

.container-main-left {
    width: 40%;
    text-align: center;
}

.container-main-right {
    width: 60%;
    text-align: center;
}

</style>








