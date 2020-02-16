<template>
    <div id="AAAA">
      
    </div>
</template>


<script>
// import Vue from "vue";
import Switch from "./plugins/switch/index.js"
export default {
    name:"Switch",
    // mixins:[Mixins],
    data(){
        return {
            switch:{
            value:true,
            activeColor:"#13ce66",
            inactiveColor:"#ff4949"
            }
       
        }
    },
    created() {
        Switch(this.switch)
    },
    methods:{
        
    }
   
   
}


</script>

<style>

</style>