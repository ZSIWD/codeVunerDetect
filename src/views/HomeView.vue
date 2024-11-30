<template>
  <header>
    <h1>代码漏洞检测系统</h1>
    <span>
        <a-avatar style="background-color: #87d068">
      <template #icon>
        <UserOutlined />
      </template>
    </a-avatar>
    <a href="/login">登录</a>
    </span>
  </header>
  <div class="container">
    <AsideMenu></AsideMenu>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { UserOutlined } from '@ant-design/icons-vue';
import AsideMenu from '../components/AsideMenu.vue';
</script>

<style scope lang="less">
    header{
        display: flex;
        height: 70px;
        justify-content:space-between;
        align-items: center;
        background-color: #395a94;
        box-shadow: 0 0 10px rgba(0,0,0,.1);
        h1{
            margin: 0 0 0 20px;
            color: aliceblue;
        }
        span a{
            margin-left: 20px;

            color: aliceblue;
        }
        span{
            margin-right: 20px;
        }
    }
    .container{
        display: flex;
        height: calc(100vh - 70px);
        justify-content: flex-start;
        background-color: #efeeee;
        main{
          margin: 0 8px;
          width: calc(100vw - 200px);
        }

    }
</style>