<template>
    <div>
        <h1>登入</h1>
        <form @submit.prevent="login">
            <label>
                帳號:
                <input type="text" v-model="form.username" required placeholder="請輸入電子郵件" />
            </label>
            <label>
                密碼:
                <input type="password" v-model="form.password" required placeholder="請輸入密碼" />
            </label>
            <button type="submit">登入</button>
        </form>
        <p v-if="message">{{ message }}</p>
    </div>
</template>

<script>
import axios from "@/axios";

export default {
    name: 'Login',
    data() {
        return {
            form: {
                username: "",
                password: "",
            },
            message: "", // 顯示登入狀態訊息
        };
    },
    methods: {
        async login() {
            const username = this.form.username;
            const password = this.form.password;

            // 使用 btoa() 進行 Base64 編碼
            const base64Credentials = btoa(`${username}:${password}`);

            try {
                const response = await axios.post("/userLogin", this.form, {
                    headers: {
                        'Authorization': `Basic ${base64Credentials}`,
                    }
                });
                this.message = response.data.message; // 登入成功訊息
            } catch (error) {
                this.message = error.response?.data || "帳號或密碼錯誤";
            }
        }
    },
};
</script>

<!-- 加上 scoped 讓 css 只在這個頁面生效 -->
<!-- 若是沒有加上則會全域生效 -->
<style scoped>
label {
    display: block;
    /* 讓 label 占據一整行 */
    margin-bottom: 10px;
    /* 增加一些間距，讓表單元素之間有空隙 */
}

input {
    padding: 8px;
    /* 增加一些內邊距，讓輸入框更大 */
}
</style>