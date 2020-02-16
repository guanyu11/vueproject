<template>
    <div id="switch"  @click="toggleHandle" >
        <span  :class="value?'active':'inactive'" 
        :style="value?'background-color:'+activeColor:'background-color:'+inactiveColor">
            <i></i>
        </span  > 
    </div>
</template>

<script>
export default {
    // background-color=
}
</script>

<style lang="scss">
 #switch{
     display: inline-block;
     width: auto;
     span{
         display: inline-block;
         width: 40px;
         height: 20px;
         position: relative;
        border-radius: 10px;
         i{
             border-radius: 10px;
             top: 1px;
             width: 16px;
             height: 16px;
             background: #fff;
             position: absolute
         }
     }
     .active{
        
         i{
             right:1px
         }
     }
     .inactive{
         i{
             left:1px;

         }

     }
}
    
</style>