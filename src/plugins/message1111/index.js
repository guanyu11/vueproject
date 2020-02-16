import Vue from 'vue';			//引入vue
import main from './message.vue';	//引入message.vue

let Constructor=Vue.extend(main);			//创建一个组件构造器
let newMessage;

const Message=function(val){				//构造一个Message的方法   val 就是到时候 this.$message(val)的值
    let obj={show:false};						//声名一个对象 用来传入message.vue
   
    if(typeof val === 'string'){				 // 给新建组件传data    这里需判断下string 的话 就给默认的时间 type 在message.vue中已经默认info了
         obj.message=val;  
         obj.duration=3000; 
    }else{
        obj=Object.assign(obj,val);		//如果是object的话 直接合并对象   时间没给的话 设置下默认时间
        if(!obj.duration){
            obj.duration=3000;
        }
    }
    newMessage = new Constructor({		
        data:obj
    });
    
    let vm = newMessage.$mount()				// 挂载
    let el = vm.$el
    document.body.appendChild(el) // 把生成的提示的dom插入body中
    vm.show = true					//show 控制显示
    // 定时关闭
    setTimeout(()=>{
        vm.show=false;
        document.body.removeChild(el) //从body中移除dom
        newMessage.$destroy()
        vm = null // 设置为null，好让js垃圾回收算法回收，释放内存
    },obj.duration)
}

export default Message
