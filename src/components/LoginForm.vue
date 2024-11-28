<template>
    <div class="login-container">
      <h1>代码漏洞检测系统</h1>
      <form>
        <label for="username">用户名:</label>
        <input type="text" id="username" v-model="username" />
        <br />
        <label for="password">密码:</label>
        <input type="password" id="password" v-model="password" />
        <br />
        <button @click.prevent="login">登录</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const username = ref('');
  const password = ref('');
  
  const login = () => {
    // TO DO: implement login logic here
    console.log('Login button clicked!');
  };
  </script>
  
  <style>
  .login-container {
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  label {
    display: block;
    font-size: 13px;
    margin: 10px 0;
    
  }
  
  input {
    width: 93%;
    height: 25px;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    width: 100%;
    height: 40px;
    background-color: #4CAF50;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #3e8e41;
  }
  </style>