<template>
    <a-upload-dragger
      v-model:fileList="fileList"
      name="file"
      :multiple="false"
      @change="handleChange"
      @drop="handleDrop"
      :showUploadList="false"
      class="upload-btn"
      style="width: 90%;height: min-content;"
    >
      <p class="ant-upload-drag-icon">
        <inbox-outlined></inbox-outlined>
      </p>
      <p class="ant-upload-text">点击或拖拽上传源代码文件</p>
    </a-upload-dragger>
  
    <!-- 显示上传的代码 -->
    <a-card style="width: 96%;">
      <pre v-if="sourceCode" style="height: 400px;">
        <code v-html="highlightedCode" style="font-size: 13px;"></code>
      </pre>
    </a-card>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  import { InboxOutlined } from '@ant-design/icons-vue';
  import hljs from 'highlight.js';  // 导入 highlight.js
  import 'highlight.js/styles/github.css'; // 例如使用 GitHub 主题
  
  const fileList = ref([]);  // 用于存储上传的文件列表
  const sourceCode = ref('');  // 用于存储文件的内容
  const highlightedCode = ref('');  // 存储高亮后的代码
  
  // 处理文件列表的变化
  const handleChange = (info) => {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      console.log(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      console.log(`${info.file.name} file upload failed.`);
    }
  };
  
  // 处理文件拖拽事件
  const handleDrop = (e) => {
    console.log('Dropped files:', e);
  };
  
  // 当文件变化时读取文件内容
  const handleFileRead = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      // 将文件内容存入 sourceCode 中
      sourceCode.value = e.target.result;
      // 对代码进行高亮处理
      highlightCode(e.target.result);
    };
    reader.onerror = (e) => {
      console.error("File read error: ", e);
    };
    reader.readAsText(file);  // 读取文件内容为文本
  };
  
  // 使用 highlight.js 高亮显示代码
  const highlightCode = (code) => {
    highlightedCode.value = hljs.highlightAuto(code).value;  // 高亮代码并返回 HTML
  };
  
  // 监听文件列表的变化，读取文件内容
  watch(fileList, (newFileList) => {
    if (newFileList.length > 0) {
      const file = newFileList[newFileList.length - 1].originFileObj;  // 获取第一个文件
      handleFileRead(file);  // 读取文件内容
    }
  });
  </script>
  
  <style scoped>
  .upload-btn {
    margin-bottom: 20px;
    margin-left: 40px;
  }
  
  pre {
    background-color: #f4f4f4;
    padding: 20px;
    border-radius: 5px;
    overflow: auto;
    font-size: 10px;
    font-family: 'Courier New', Courier, monospace;
    scrollbar-width: none; /* Firefox */
  }
  
  code {
    font-size: 16px;
    white-space: pre-wrap;  /* 保证代码换行显示 */
    display: block;
  }
  </style>
  