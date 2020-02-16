import  messageBox from "./index.vue"
import Vue from "vue"

export default(options)=>{
    let defaultData={
        title:"提示",
        content:"内容",
        toggleClick:function(){
        }
    }
    for(var key in options){
        defaultData[key]=options[key];
    }
    let MessageBox=Vue.extend(messageBox);
    let vmMessage=new MessageBox({
        el:document.createElement("div"),
        data:{
            title:defaultData.title,
            content:defaultData.content
        },
        methods: {
            handleOk(){
                this.$mount().$el.remove()
            },
            handleToggle(){
               if(defaultData.toggleClick){
                   let city=defaultData.toggleClick();
                   this.content=city;
               } 
            }
        },
    })
    document.body.appendChild(vmMessage.$mount().$el)
}