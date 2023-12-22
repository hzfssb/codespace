// todo 数据管理模块 在pinia中 只有state actions 
import { defineStore } from 'pinia'
import { ref } from 'vue'
//vue3.0 hook 函数
export const useTodoStore = defineStore("todo", () => {
    const todos = ref([
        { txt:'年前脱单'}
    ])
    const addTodo = () => {
        todos.value.push( {txt: '吃饭'})
    }
    return {
        todos,
       addTodo,
    }


})