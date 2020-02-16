<template>
    <div class="messageBox">
        <div class="messageBox_title">{{title}}</div>
        <div class="messageBox_content">{{content}}</div>
        <div class="messageBox_btn">
            <div class="messageBox_btn-ok" @click="handleToggle">切换</div>
            <div class="messageBox_btn-ok" @click="handleOk">确定</div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .messageBox{
        width:5.12rem;
        height: 3.18rem;
        position: fixed;
        left:50%;
        top:50%;
        margin-left:-2.56rem;
        margin-top:-1.59rem;
        background: #fff;
        display: flex;
        flex-direction: column;
    }
    .messageBox_title{
        flex-shrink: 0;
        width:100%;
        height:.86rem;
        text-align: center;
        line-height: .86rem;
        background: #F8F8F8;
    }
    .messageBox_content{
        text-align: center;
        flex: 1;
    }
    .messageBox_btn{
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1.14rem;
        width:100%;
    }
    .messageBox_btn-ok{
        width:1.76rem;
        height:.6rem;
        background:#c33;
        color:#fff;
        text-align: center;
        line-height: .6rem;
    }
</style>