import axios from "axios";

// 判断账号是否存在
const isEnroll = async (email) => {
   const res = await axios({
    method: 'get',
    url: '/api/email/exist',
    responseType: 'stream',
    params: {
        email
    }
   });
   return res;
}

// 获取注册验证码
const getCaptcha = async (email) => {
   const res = await axios({
    method: 'post',
    url: '/api/email/send',
    responseType: 'stream',
    data:{
        email
    }
   })
   return res;
}

// 注册
const enrolled = async (data) => {
    const res = await axios({
        method: 'post',
        url: '/api/user/register',
        responseType: 'stream',
        data
    })
    return res;
}

const API = {
    getCaptcha,
    enrolled,
    isEnroll
}

export  default API;