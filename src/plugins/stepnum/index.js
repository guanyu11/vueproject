import stepNum from "./index.vue"
import Vue from "vue"

export default (options)=>{
    let defaultData={
        number:1,
        min:1,
        max:99,
        leftStatus:false,
        rightStatus:true,
    }
    for(var key in options){
        defaultData[key] = options[key];
    }
    let stepNumBox=Vue.extend(stepNum);
    let vnStepNum=new stepNumBox({
        el:document.createElement("div"),
        data:{
            number:defaultData.number,
            min:defaultData.min,
            max:defaultData.max,
            leftStatus:defaultData.leftStatus,
            rightStatus:defaultData.rightStatus,
        },
   
        methods:{
            handleCut(){
                this.number--;
               
            },
            handleAdd(){
                this.number++;
               
            }
        },
        watch:{
            number:function(){
                if(this.number<=this.min){
                    this.number=this.min
                }
                if(this.number>=this.max){
                    this.number=this.max
                }
                console.log(this.min,this.number,this.max)
                if(this.number>this.min){
                    this.leftStatus=true;
                }else{
                    this.leftStatus=false;

                }
                if(this.number<this.max){
                    // console.log(1111)
                    this.rightStatus=true;
                }else{
                    console.log(1111)

                    this.rightStatus=false;

                }
            }
        }

    })

document.body.appendChild(vnStepNum.$mount().$el)


}