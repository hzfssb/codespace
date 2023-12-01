<!-- JMain.vue -->
<template>
    <div>
      JMain
      <div v-for="user in users" :key="user">
        <Item :user="user"/>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import Item from './Item.vue';
  
  let users = ref()
  
  setTimeout(() => {
      users.value = [...users.value, 'Yiko']
  }, 2000)
  fetch('https://ztj8kh.laf.run/get-list')
      .then(res => res.json())
      .then(data => {
        users.value = data.data.map(item => item.txt)
      })
  </script>
  
  <style scoped>
  /* 样式可以为空，但如果需要的话，可以在这里添加 CSS */
  </style>
  