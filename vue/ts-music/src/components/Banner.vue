<template>
   <ul>
    <li v-for="banner in banners"  :key="banner.targetId">
    <img :src="banner.pic">
  </li>
  </ul>
</template>

<script setup lang="ts">
import { toRefs, onMounted } from 'vue';
import { useBannerStore } from '../store/banner';
const { getBanners } = useBannerStore();
const {  banners } = toRefs(useBannerStore());
onMounted(async () => {
  await getBanners()


})
</script>

<style  scoped>

</style>