<template>
    <div class="container">
        <h1>註冊</h1>
        <form class="form" @submit.prevent="register">
            <label>
                電子郵件:
                <input type="text" v-model="form.email" required placeholder="請輸入電子郵件"/>
            </label>
            <label>
                密碼:
                <input type="password" v-model="form.password" required placeholder="請輸入密碼"/>
            </label>
            <label>
                確認密碼:
                <input type="password" v-model="form.confirmPassword" required placeholder="請輸入密碼"/>
            </label>
            <label>
                姓名:
                <input type="text" v-model="form.name" required placeholder="請輸入姓名"/>
            </label>
            <label>
                地址：
                <input type="text" v-model="form.age" required placeholder="請輸入地址"/>
            </label>
            <label>
                生日：
                <input type="date" v-model="form.birthday" required placeholder="請輸入生日" />
            </label>
            <button type="submit">註冊</button>
        </form>
        <p v-if="message">{{ message }}</p>
    </div>
</template>

<script >
import axios from "@/axios";

export default {
    name: 'Register',
    data() {
        return {
            form: {
                email: "",
                password: "",
                confirmPassword: "",
                name:"",
                age:"",
                birthday:""
            },
            message: "", // 用於顯示回應訊息
        };
    },
    methods: {
        async register() {

            // 檢查密碼是否一致
            if (this.form.password !== this.form.confirmPassword) {
                this.message = "密碼與確認密碼不一致";
                return;
            }

            try {
                const response = await axios.post("/register", this.form);
                this.message = response.data.message; // 註冊成功訊息
            } catch (error) {
                this.message = error.response?.data || "註冊失敗";
            }
        },
    },
};
</script>

<!-- 加上 scoped 讓 css 只在這個頁面生效 -->
<!-- 若是沒有加上則會全域生效 -->
<style scoped>
h1 {
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
}

.container {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    padding: 20px;
    width: 400px;
    border: 1px solid black;
    border-radius: 8px;
}
.form {
    display: flex;
    flex-direction: column;
}
label {
    display: block;
    /* 讓 label 占據一整行 */
    margin-bottom: 10px;
    /* 增加一些間距，讓表單元素之間有空隙 */
    display: flex;
    justify-content: space-between;
}

input {
    padding: 8px;
    /* 增加一些內邊距，讓輸入框更大 */
    width: 240px;
}
</style>