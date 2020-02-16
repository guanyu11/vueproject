import Switch from  "./index.vue";
import Vue from "vue";
export default(options)=>{
    let defaultData={
            value:true,
            activeColor:"#13ce66",
            inactiveColor:"#ff4949"     
    }
    for(var key in options){
        defaultData[key] = options[key];
    }

    let switchBox=Vue.extend(Switch);
    let vmSwitch= new switchBox({
        el:document.createElement("div"),
        data:{
            value:defaultData.value,
            activeColor:defaultData.activeColor,
            inactiveColor:defaultData.inactiveColor    
        },
        methods:{
            toggleHandle(){
                this.value=!this.value;
                console.log(this.value)
            }
        }
    })
    document.body.appendChild(vmSwitch.$mount().$el)
}