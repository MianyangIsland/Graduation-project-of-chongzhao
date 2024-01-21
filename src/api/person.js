import axios from "axios";

// 修改个人文字信息
const ModifyPersonMsg = async (data) => {
    const res = await axios({
        method: 'post',
        url: '/api/user/update/info',
        responseType: 'stream',
        data
    })
    return res;
}

// 获取个人信息
const GetPersonMsg = async () => {
    const res = await axios({
        method: 'get',
        url: '/api/user/info',
        responseType: 'stream'
    })
    return res;
}

const ModifyPersonAvatar = async (file) => {
    const res = await axios({
        method:'post',
        url: '/api/file/upload/avatar',
        responseType: 'stream',
        data: file
    })
    return res;
}

const API = {
  ModifyPersonMsg,
  GetPersonMsg,
  ModifyPersonAvatar
}

export default API;