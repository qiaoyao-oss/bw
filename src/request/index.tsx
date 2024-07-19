import axios from "./axios";
//登录
export const getLogin=(userData:any)=>{
    console.log(userData,'666')
    return axios({
        url:'http://localhost:3001/getLogin',//3001和serve保持一致
        method:'POST',
        data:userData  
    })
   
    
}