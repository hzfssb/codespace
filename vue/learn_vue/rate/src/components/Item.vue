<!-- item.vue -->
<template>
    <div>
     用户， {{ user }}
    </div>
  </template>
  
  <script setup>
  // 如果你使用 setup 语法，则这里可以导出 props
  import { defineProps } from 'vue';
  defineProps(['user'])
  </script>
  
  <style scoped>
  /* 样式可以为空，但如果需要的话，可以在这里添加 CSS */
  </style>
  