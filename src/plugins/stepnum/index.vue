<template>
    <div id="stepnum">
        <span @click="handleCut" :class="leftStatus?'':' falseStatus '">-</span>
        <input v-model.number="number"></input>
        <span @click="handleAdd" :class="rightStatus?'':' falseStatus '" >+</span>
    </div>
</template>

<script>
export default {
    
}
</script>

<style  lang="scss">

#stepnum{
    width:100px;
    border:1px solid #ccc;
    user-select: none;
   margin:20px;
   span{
       display:inline-block;
       width:20px;
       height:20px;
       line-height:20px;
        text-align:center;
        
       
   }

    
}
input{
    outline:none;
    border:none;
    border-left:1px solid #ccc;
    border-right:1px solid #ccc;
        width:50px;
        text-align:center;
    }
.falseStatus:hover{
    cursor:not-allowed;
    }
</style>