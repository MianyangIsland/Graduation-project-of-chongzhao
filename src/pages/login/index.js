import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Form, Input , message } from 'antd';
import styles from  './index.module.css';
import API from '../../api/login';

const Login = () => {

  const navigate = useNavigate();

  const onFinish = async (values) => {
     try {
      const res = await API.Login(values);
    const data = JSON.parse(res.data);
    const token = JSON.stringify(data.data.user_token.token).slice(1,-1);
    sessionStorage.setItem('user_token',token);
    const {status_code} = data;
    if( status_code === 0 ) {
      navigate('/main/recommend')
    }
     } catch(err) {
      message.open({
        content:'邮箱/密码错误，请查验！'
      })
     }
  };

  const onFinishFailed = () => {
     message.open({
      type: 'warning',
      content: '请完善所有必填项!'
     })
  };

  
   return (
    <div className={styles.login_container}>
        <div className={styles.login_form}> 
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            minWidth: '80%',
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="邮箱"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <div className={styles.login_selection}>
            <Button type="primary" htmlType="submit">
              登陆
            </Button>
             <a onClick={() => navigate('/register')}>还没有账号,点击注册</a>
            </div>
          </Form.Item>
          </Form>
        </div> 
    </div>
      )
}
export default Login;