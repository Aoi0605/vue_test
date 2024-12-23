<template>
  <div id="app">
    <!-- 按鈕用於切換頁面 -->
    <button @click="goToLogin">登入</button>
    <button @click="goToRegister">註冊</button>
    
    <!-- 顯示路由的內容 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goToLogin() {
      this.$router.push({ name: 'login' });
    },
    goToRegister() {
      this.$router.push({ name: 'register' });
    }
  }
}
</script>

<style>
/* 可以在這裡寫一些樣式 */
button {
  margin: 5px;
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>

