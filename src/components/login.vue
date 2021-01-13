<template>
    <div id='login'>
        <input v-model="userId" placeholder="userId"/><br>
        <input v-model="password" type="password" placeholder="password"/><br>
        <el-button @click="login()" type="primary" round>主要按钮</el-button>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'login',
    data(){
        return{
                password:'',
                userId:''
        }
    },
    methods:{
        login:function()
        {
            axios({
                method:'post',
                url:'/login',
                data:{
                    password: this.password,
                    userId: this.userId
                }
            }).then((res)=>
            {
                if(res.data.code===200)
                {
                    alert('success');
                    localStorage.setItem('token',res.data.data.token)
                }
                else alert(res.data.code);
            }).catch(()=>{
                alert('error');
            })
        }
    }
}
</script>