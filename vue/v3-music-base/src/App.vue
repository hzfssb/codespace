<template>
  <Test>
     <template #header>
      <h1>Header</h1>
     </template>
    <div>123</div>
    <template #footer>
      <h1>footer</h1>
     </template>
  </Test>
  <RouterView/>
</template>

<script setup lang="ts">
// import Test from '@/components/Test.vue'
</script>
<style lang="scss">

</style>