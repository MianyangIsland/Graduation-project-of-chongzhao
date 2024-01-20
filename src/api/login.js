import axios from "axios";

const Login = (data) => {
  const res = axios({
    method:'post',
    url:'/api/user/login',
    responseType: 'stream',
    data
  })
  return res;
}

const API = {
    Login
}

export default API;