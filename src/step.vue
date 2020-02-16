<template>
    <div >
      
    </div>
</template>


<script>
// import Vue from "vue";
import stepNum from "./plugins/stepnum/index.js"
export default {
    name:"Step",
    // mixins:[Mixins],
    data(){
        return {
            step:{
            number:1,
            min:1,
            max:99,
            leftStatus:false,
            rightStatus:true,   
            }
       
        }
    },
    created() {
        stepNum(this.step);
    },
    methods:{
        
    }
   
   
}


</script>

<style>

</style>