import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from 'antd';
import styles from  './index.module.css';

const Login = () => {

  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Success:', values);
    navigate('/main')
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
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
            label="Username"
            name="username"
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
            label="Password"
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