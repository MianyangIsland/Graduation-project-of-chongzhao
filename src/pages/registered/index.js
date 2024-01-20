import React , {useEffect, useRef, useState} from 'react';
import { Button, Form, Input ,message} from 'antd';
import { useNavigate } from 'react-router-dom';
import API from '../../api/registered';
import styles from  './index.module.css';
const buttonItemLayout = { wrapperCol: { span: 14, offset: 8 } } 


const Registered = () => {


      const emailRef = useRef();
      const captchaRef= useRef();
      const passwordRef = useRef();
      const passwordAgainRef = useRef();
      const navigate = useNavigate();
      const [disable, setDisable ] = useState(false);
      const [time , setTime] = useState(60);

      useEffect(() => {
        let timer = null;
    
        if (disable) {
          // 设置每秒更新一次倒计时的定时器
          timer = setInterval(() => {
            setTime((prevCountdown) => {
              const newCountdown = prevCountdown - 1;
              if (newCountdown === 0) {
                // 如果倒计时结束，则清除定时器并启用按钮
                setDisable(false);
                clearInterval(timer);
              }
              return newCountdown;
            });
          }, 1000);
        } else {
          // 如果按钮启用，则重置倒计时
          setTime(60);
        }
    
        // 组件卸载时或者倒计时重置时清除定时器
        return () => clearInterval(timer);
      }, [disable]);

      // 判断账号是否已经存在
      const isExist = async () => {
        const email = emailRef.current.input.value;
        if ( email === '' ) {
          message.open({
            type:'warning',
            content: '邮箱内容不能为空！'
          })
        } else {
           const res = await API.isEnroll(email);
           const data = JSON.parse(res.data);
           const isSuccess = data.data.exist
           if( isSuccess ) {
            getCaptcha(email)
           } else {
            message.open({
              type: 'error',
              content: '该邮箱已经注册过了账号，请重新选择邮箱！'
            })
           }
        }
      }


      const getCaptcha = async (value) => {
          if( value !== '' ) {
             try {
              const res = await API.getCaptcha(value);
              const data = JSON.parse(res.data);
              if( data.status_code === 0 ) {
                setDisable(true);
                message.open({
                  type: 'success',
                  content: '验证码已通过邮箱下发至您的邮箱，请注意查收!'
                })
              } else {
                message.open({
                  type: 'error',
                  content: '当前服务器繁忙，请稍后再试试~'
                })
              }
             
             } catch(err) {
              message.open({
                type: 'error',
                content: '服务器繁忙，请稍后再来吧～',
               })
             }
          } else {
             message.open({
              type: 'warning',
              content: '邮箱不能为空！',
             })
          }
      }
      
      const handleClick = async () => {
        const email = emailRef.current.input.value;
        const captcha = captchaRef.current.input.value;
        const password = passwordRef.current.input.value;
        const passwordAgain = passwordAgainRef.current.input.value;

        if( email !== '' && captcha !== '' && password !== '' && passwordAgain !=='' ) {
            if( password !== passwordAgain ) {
              message.open({
                type: 'error',
                content: '两次密码填写内容不一致!'
              })
            } else {
              const data = {
                email,
                code: captcha,
                password
              }
              const res = await API.enrolled(data);
              const val = JSON.parse(res.data);
             
              const { status_code } = val;
              if( status_code !== 1001 ) {
                navigate('/main/recommend');
              } else {
                message.open({
                  type: 'error',
                  content: '验证码填写有误，请填写正确的验证码！'
                })
              }
            }
        } else {
          message.open({
            type: 'warning',
            content: '请完善所有必填内容！'
          })
        }
      }

    
 
   return (
    <div className={styles.register_container}>
    <div className={styles.register_form}> 
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
       autoComplete="off"
     >
       <Form.Item
         label="用户邮箱"
         name="email"
         rules={[
           {
             required: true,
             message: '请输入您的邮箱',
           },
         ]}
       >
         <Input ref={emailRef}/>
       </Form.Item>
       
       <Form.Item
         label="验证码"
         name="captcha"
         rules={[
          {
            required: true,
            message: '请输入您的验证码',
          },
        ]}
       >
         <Input ref={captchaRef}/>
       </Form.Item>
       <Form.Item
        {...buttonItemLayout}
        >
       <Button onClick={() => isExist()} disabled={disable}>
          {
            disable ?  `还剩${time}秒` : '获取验证码'
          }
        </Button>
       </Form.Item>

       <Form.Item
          label="密码"
          name="password"
          rules={[
          {
            required: true,
            message: '请输入您的密码',
          },
        ]}
       >
        <Input.Password placeholder="input password" ref={passwordRef}/>
       </Form.Item>

       <Form.Item
          label="重复密码"
          name="passwordAgain"
          rules={[
          {
            required: true,
            message: '请输入您的密码',
          },
        ]}
       >
        <Input.Password placeholder="input password" ref={passwordAgainRef}/>
       </Form.Item>

       <Form.Item
         wrapperCol={{
           offset: 8,
           span: 16,
         }}
       >
         <div className={styles.register_selection}> 
         <Button type="primary" onClick={handleClick}>
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