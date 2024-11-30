<template>
    <div style="width: 200px;height: 100% ;background-color: rgb(0, 20, 39);;">
      
      <a-menu
        v-model:openKeys="state.openKeys"
        v-model:selectedKeys="state.selectedKeys"
        mode="inline"
        theme="dark"
        :inline-collapsed="state.collapsed"
        :items="items"
        @click="handleClick"
      ></a-menu>
    </div>
  </template>
  <script setup>
  import { ref,reactive, watch, h } from 'vue';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  import {
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
  } from '@ant-design/icons-vue';
  const state = reactive({
    collapsed: false,
    selectedKeys: ['1'],
    openKeys: ['sub1'],
    preOpenKeys: ['sub1'],
  });
  const items = reactive([
    {
      key: '1',
      icon: () => h(PieChartOutlined),
      label: '首页',
      title: '首页',
      path:'/index'
    },
    {
      key: '2',
      icon: () => h(DesktopOutlined),
      label: '漏洞检测',
      title: '漏洞检测',
      path:'/detect'

    },
    {
      key: '3',
      icon: () => h(DesktopOutlined),
      label: '漏洞修复',
      title: '漏洞修复',
    },
    {
      key: '4',
      icon: () => h(InboxOutlined),
      label: '操作日志',
      title: '操作日志',
    },{
      key: '5',
      icon: () => h(AppstoreOutlined),
      label: '漏洞类型',
      title: '漏洞类型',
    },
    {
      key: '6',
      icon: () => h(MailOutlined),
      label: '关于我们',
      title: '关于我们',
    }
    
  ]);
  watch(
    () => state.openKeys,
    (_val, oldVal) => {
      state.preOpenKeys = oldVal;
    },
  );
  const toggleCollapsed = () => {
    state.collapsed = !state.collapsed;
    state.openKeys = state.collapsed ? [] : state.preOpenKeys;
  };
  const handleClick = (e) => {
    console.log('click ', e);
    router.push(e.item.path);
  };
  </script>

  <style scoped lang="less">
  .a-menu{
    height: 100% !important;
  }
  </style>