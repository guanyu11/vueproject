<template>
    <div  id="app">
        
    </div>
</template>
<script>
 import Message from './plugins/message/index.js'

export default {
    name:"app",
    data(){
        return{
            city:"北科"
        }
    },
    created(){
        console.log("1111")
        Message({
            title:"城市定位",
            content:this.city,
            toggleClick:()=>{
                this.city="上海"
                return this.city;
            }
        })
    }

}
</script>
<style>
#box{
    width:100px;
    height: 100px;
    background: #c33;
}
</style>