import axios from 'axios'
import Router from 'router'

axios.interceptors.request.use(function(config)
{
    const token = window.localStorage.getItem('token');
    if(token){
        config.headers.Authorization = localStorage.getItem('token');
    }
    return config;
},(error)=>{
    if(error.response){
        alert('拦截器:'+error.response.status);
    }
    localStorage.clear();
    return Promise.reject(error);
})

axios.interceptors.response.use((res) => {
    return res;
},(error)=>{
    console.log(Object.assign({},error))
    if(error.response){
        alert(error.response.status);
    }
    localStorage.clear();
    return Promise.reject(error)
})