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
                    localStorage.setItem('token',res.data.data.token)
                    localStorage.setItem('userId',res.data.data.userId)
                    localStorage.setItem('name',res.data.data.name)
                    localStorage.setItem('identity',res.data.data.identity)
                    localStorage.setItem('department',res.data.data.department)
                    this.$router.push('backstage')
                }
                else alert(res.data.code);
            }).catch((err)=>{
                alert(err);
            })
        }
    }
}
</script>