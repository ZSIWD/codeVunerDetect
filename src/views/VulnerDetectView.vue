<template>
    <div id="vulner">
        <div class="left">
                <!-- <h2>代码漏洞检测</h2> -->
                <UploadFile></UploadFile>
        </div>
        <div class= "center">
            <Timeline></Timeline>
        </div>

        <div class="rigth"></div>
    </div>
</template>

<script setup>

import UploadFile from '../components/UploadFile.vue'
import Timeline from '../components/TimeLine.vue'

</script>

<style scoped lang="less">
#vulner{
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    .left{display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 47%;
        background-color: #fff;
        height: 100%;
    }
    .rigth{
        width: 47%;
        height: 100%;
        background-color: #0fe36e;
    }
    .center{
        margin-top:30px;
        width: 4%;
        height: 80%;

    }
  
}

</style>