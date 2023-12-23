// hooks 函数式编程思想
import { defineStore } from "pinia"
import { ref } from 'vue'
import type { Banner } from '../models/banner';
import { useBanner } from "../api";
// 创建仓库的分支，banner
export const useBannerStore = defineStore("banner", () => {
    const banners = ref<Banner[]>([]); // 确保Banner是数组类型
    const getBanners = async () => {
            if(banners.value.length) return;
            banners.value = await useBanner();
    }
    return {
        
        banners,
        getBanners

    }
})