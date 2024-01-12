<template>
    <!-- tailwindcss -->
    <div class="flex items-center justify-between h-14">
        <div class="flex items-center pl-5">
         <IconPark 
            :icon="Left"
            :size="iconSize"
            :storke-width="2"
            class="icon-button"
            @click="router.back()"
         />
         <IconPark 
            :icon="Right"
            :size="iconSize"
            :storke-width="2"
            class="icon-button"
           
         />
         <div class="search ml-2">
            <SearchPop/>
         </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Left, Right } from '@icon-park/vue-next'
import SearchPop from '@/components/layout/header/SearchPop.vue'
const router = useRouter()
const iconSize = 22;
// 使用vue-router提供的useRouter hook 函数获得路由对象
</script>

<style scoped>

</style>