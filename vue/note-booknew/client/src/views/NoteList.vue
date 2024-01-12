<template>
    <div class="note-list">
        <ul>
            <li>
                <div class="img">
                    <img src="https://img2.utuku.imgcdc.com/650x0/toutiao/20240108/e8ba2914-fe51-4174-977d-4dfe7df40a27.jpg" alt="">
                </div>
                <p class="time">2023/05/20</p>
                <p class="title">今天去了猪脚饭</p>
            </li>
            <li>
                <div class="img">
                    <img src="https://img2.utuku.imgcdc.com/650x0/toutiao/20240108/e8ba2914-fe51-4174-977d-4dfe7df40a27.jpg" alt="">
                </div>
                <p class="time">2023/05/20</p>
                <p class="title">今天去了猪脚饭</p>
            </li>
            <li>
                <div class="img">
                    <img src="https://img2.utuku.imgcdc.com/650x0/toutiao/20240108/e8ba2914-fe51-4174-977d-4dfe7df40a27.jpg" alt="">
                </div>
                <p class="time">2023/05/20</p>
                <p class="title">今天去了猪脚饭</p>
            </li>
        </ul>

    </div>
</template>

<script setup>
    //页面加载中发请求，拿到当前分类的数据
    import { onBeforeMount, onMounted } from 'vue';


//    console.log('hello',document.querySelector('note-list'))//拿不到

    onMounted(() => {
       //页面加载中发请求，拿到当前分类的数据
    })//拿得到

    // onBeforeMount(() => {
    //     console.log('onBeforeMount');
    // })//拿不到

</script>

<style lang="less" scoped>
  .note-list{
    width: 100%;
    padding: 1rem 0.667rem 0;
    box-sizing: border-box;
    ul {
        // display: flex;
        // flex-wrap: wrap;
        // justify-content: space-between;
        // overflow: hidden;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 50px;
        grid-row-gap: 30px;
        li{
            // width: 50%;
            // padding: 0 10px;
            // box-sizing: border-box;
            // float: left;
           

            img{
                 width: 100%;
                 border-radius: 0.27rem;
            }

            .time{
                font-size: 0.37rem;
                color: rgba(16, 16, 16, 1);
                margin: 10px 0 5px 0;
            }
            .title{
                width: 3.5rem;
                font-size: 0.37rem;
                color: rgba(16, 16, 16, 1);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
  }
</style>