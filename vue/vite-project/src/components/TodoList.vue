<template>
    <div><ul>
        <li v-for="todo in todos">
            {{ todo.txt }}
        
        </li>
    </ul>
    <button type="button" @click="addTodo">添加</button>
</div>
   
</template>

<script setup>
const props = defineProps(['todos', 'addTodo'])
console.log(props.todos)
</script>
<style  scoped>

</style>