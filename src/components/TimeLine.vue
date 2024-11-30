<template>
    <div class="timeline-container">
      <a-timeline mode="left" style="height: 100%; overflow-y: auto;">
        <!-- 动态渲染时间线条目 -->
        <a-timeline-item
          v-for="(item, index) in timelineItems"
          :key="index"
          :color="item.color"
          :dot="getDot(index)"
        >
          {{ item.label }}
        </a-timeline-item>
      </a-timeline>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  // 用于存储时间轴的条目
  const timelineItems = ref([]);
  
  // 生成一些时间线条目，模拟隔一段时间才添加新的条目
  onMounted(() => {
    setTimeout(() => {
      // 添加第一个条目
      timelineItems.value.push({ label: '导入成功', color: 'green' });
  
      setTimeout(() => {
        // 隔一段时间添加第二个条目
        timelineItems.value.push({ label: '正在分析', color: 'green' });
  
        setTimeout(() => {
          // 隔一段时间添加第三个条目
          timelineItems.value.push({ label: '导入成功', color: 'green' });
  
          setTimeout(() => {
            // 隔一段时间添加第四个条目
            timelineItems.value.push({ label: '正在分析', color: 'green' });
          }, 2000); // 2000ms后显示第四个条目
        }, 2000); // 2000ms后显示第三个条目
      }, 2000); // 2000ms后显示第二个条目
    }, 2000); // 2000ms后显示第一个条目
  });
  
  // 自定义时间点的图标显示（避免使用 JSX）
  const getDot = (index) => {
    if (index % 2 === 0) {
      // 偶数索引使用自定义图标
      return null;
    } else {
      // 奇数索引使用默认的时间点
      return null;
    }
  };
  </script>
  
  <style scoped>
  .timeline-container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .a-timeline {
    flex-grow: 1; /* 让时间轴填充整个容器的高度 */
    overflow-y: auto; /* 内容超出时支持滚动 */
  }
  </style>
  