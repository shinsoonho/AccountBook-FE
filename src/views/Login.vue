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
				<button id="createBtn" class="createBtn">Create an Login</button>
				<button id="forgetBtn" class="forgetBtn">Forger Password?</button>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style>
.container-top {
	height: 55vh;
	background-color: #a9e7be;
	text-align: center;
}

.semi-degine {
	position: relative;
	border: 1px solid black;
	font-size: 2.5em;
	width: 62px;
	height: 62px;
	text-align: center;
	top: -4vh;
	background-color: white;
	border-radius: 50%;
	margin: auto;
	border: 0;
	box-shadow: 0px 2px 2px 0px;
}

.kakaoBtn {
	width: 100%;
	background-color: #fbff3d;
	border: 0;
	border-radius: 12px;
	height: 5vh;
	margin-bottom: 2.5vh;
}

.naverBtn {
	width: 100%;
	background-color: #39e455;
	border: 0;
	border-radius: 12px;
	height: 5vh;
	margin-bottom: 2.5vh;
}

.createBtn {
	width: 100%;
	background-color: white;
	border: 0;
	border-bottom: 1px solid black;
	padding-bottom: 1vh;
}

.forgetBtn {
	width: 100%;
	background-color: white;
	border: 0;
	padding-top: 1vh;
}

.container {
	width: 70%;
	padding: 0;
}

#loginLabel {
	background-color: #a9e7be;
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	color: white;
	width: 100%;
	font-size: 2em;
	text-align: center;
	padding: 13vh 0 4vh;
}

#loginId,
#loginPassword {
	width: 100%;
	height: 5vh;
	margin-bottom: 3.5vh;
	text-align: center;
	border-radius: 12px;
	background-color: #f5f5f5;
	border: 0;
}

#loginBtn {
	width: 50%;
	height: 5vh;
	background-color: #a9e7be;
	color: white;
	border: 2px solid white;
	border-radius: 20px;
}
</style>
