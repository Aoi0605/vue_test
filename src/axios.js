import axios from "axios";

// 設置後端 API 基本路徑
const instance = axios.create({
    baseURL: "http://localhost:8080", // 替換為你的後端伺服器地址
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  // 輸出 Axios 實例
  export default instance;