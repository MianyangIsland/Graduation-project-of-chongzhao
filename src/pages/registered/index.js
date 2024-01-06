import React from 'react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import './index.css';


const Registered = () => {

      const navigate = useNavigate();

      const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

 
   return (
    <div className='register-container'>
    <div className='register-form'> 
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
         <div className='register-selection'> 
         <Button type="primary" htmlType="submit">
           点击注册
         </Button>
         <a onClick={() => navigate('/login')}>已有账号,直接登陆</a>
         </div>
       </Form.Item>
      </Form>
    </div> 
    </div>
   )

}
export default Registered;