<template>
	<view>
		about
	</view>
</template>

<script setup>
import { onMounted } from 'vue'

//接口
onMounted(() => {
	uni.request({
		url: 'https://mock.mengxuegu.com/mock/65a9154ec4cd67421b34c8b3/movie/movieList',
		method: 'GET'
	}).then(res => {
		console.log(res);
	})
})
</script>

<style>
</style>