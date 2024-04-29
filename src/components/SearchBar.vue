<template>
    <div class="header">
      <div class="actions">
        <div class="search-icon" @click="toggleSearch">
          <img src="@/assets/search-icon.png" alt="Search Icon">
        </div>
        <div class="filter-icon" @click="toggleFilter">
          <img src="@/assets/filter-icon.png" alt="Filter Icon">
        </div>
      </div>
      <transition name="fade">
        <div v-if="isSearchVisible" class="search-container">
          <input type="text" placeholder="검색어를 입력하세요" class="search-input">
          <button @click="toggleSearch" class="close-btn">닫기</button>
        </div>
      </transition>
      <transition name="fade">
        <div v-if="isFilterVisible" class="filter-container">
          필터 기능이 들어갈 부분입니다
          <button @click="toggleFilter" class="close-btn">닫기</button>
        </div>
      </transition>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isSearchVisible = ref(false);
  const isFilterVisible = ref(false);
  
  const toggleSearch = () => {
    isSearchVisible.value = !isSearchVisible.value;
  }
  
  const toggleFilter = () => {
    isFilterVisible.value = !isFilterVisible.value;
  }
  </script>
  
  <style scoped>
  .header {
    top: 0;
    left: 0;
    width: 100%;
    height: 9vh;
    background-color: #A9E7BE;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 20px;
  }
  
  .actions {
    display: flex;
    justify-content: flex-end;
  }
  
  .search-icon,
  .filter-icon {
    cursor: pointer;
    margin-left: 7vw;
  }
  
  .search-icon img,
  .filter-icon img {
    width: 6vw;
    height: 3vh;
  }
  
  .search-container,
  .filter-container {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .search-input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .close-btn {
    margin-top: 10px;
    padding: 8px 16px;
    background-color: #A9E7BE;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
 
  </style>