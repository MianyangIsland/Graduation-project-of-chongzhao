import React, { useEffect, useState } from "react";
import { Descriptions, 
         Image, 
         Modal, 
         Button, 
         Menu, 
         Avatar,
         Upload ,
         message,
         Tooltip,
         Form, 
         Input,
         Select, 
         Space,
         DatePicker
} from 'antd';
import { CameraOutlined } from '@ant-design/icons';
import zhCN from 'antd/es/date-picker/locale/zh_CN';
import moment from 'moment';
import API from "../../api/person";
import ProductionInfo from "../../components/productinfo";
import PublishProduct from "../../components/publish/publish_product";
import PublishRequirement from "../../components/publish/publish_requirements";
import styles from  './index.module.css';

const { Option } = Select;


const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 10,
    span: 12,
  },
};

const Person  = () => {

   const [userInfo , setUserInfo ] = useState({
    name:'', // 姓名
    avatar: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png', // 头像
    sign: '', // 个性签名
    gender: '', // 性别
    birthday: '', // 出生年月
   })
   const [form] = Form.useForm();
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [isModifyOpen,setIsModifyOpen] = useState(false);
   const [navValue,setNavValue] = useState('publish_requirements');

   // 获取个人信息
   const getMessage = async () => {
      try {
        const res = await API.GetPersonMsg();
        console.log(res);
        const data = JSON.parse(res.data).data;
        console.log(data);
        const {avatar, birthday, gender, name, sign} = data;
        setUserInfo({
          avatar,
          birthday, 
          gender, 
          name, 
          sign
        })
      } catch(err) {
        message.open({
          type:'error',
          content:'服务器繁忙，请稍后再试'
        })
      }
   }

   useEffect(() => {
       getMessage()
   },[])

    const items = [
        {
            key: '1',
            label: 'UserName',
            children: <p>{userInfo.name}</p>,
          },
          {
            key: '2',
            label: 'sign',
            children: <p>{userInfo.sign}</p>,
          },
          {
            key: '3',
            label: 'gender',
            children: <p>{userInfo.gender}</p>,
          },
          {
            key: '4',
            label: 'birthday',
            children: <p>{userInfo.birthday}</p>,
          },
    ]

    // 发布信息的模块
    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const NavItems = [
      {
        label: '发布需求',
        key: 'publish_requirements',
      },
      {
        label: '发布商品',
        key: 'publish_product'
      }
    ];
    const handNavClick = (e) => {
      setNavValue(e.key);
    }

    

   // 修改个人文字信息
   const onFinish = async (values) => {
    const {name, sign, gender, datePicker } = values;
    const birthday = datePicker.format('YYYY-MM-DD');
    const data = {
      name,
      sign,
      gender,
      birthday
    }
    try {
      const res = await API.ModifyPersonMsg(data);
      const val = JSON.parse(res.data);
      const  { status_code } = val;
      if( status_code === 0 ) {
        message.open({
          type: 'success',
          content: '恭喜您,修改成功'
        })
        getMessage();
        setIsModifyOpen(false);
      }
    } catch(err) {
      message.open({
        type: 'error',
        content: '服务器繁忙，请稍后再试!'
      })
    }
  };

  // 上传头像
  const handleBeforeUpload = async (file) => {
     try {
      const formData = new FormData();
      formData.append('avatar',file);
      const res = await API.ModifyPersonAvatar(formData);
      const data = JSON.parse(res.data).data;
      const { url } = data;
      if( url ) {
        message.open({
          type:'success',
          content:'上传成功!'
        })
   
        setUserInfo({
          ...userInfo,
          avatar: url
         })
      } else {
        message.open({
          type:'error',
          content:'上传失败'
        })

      }
      
     } catch(err) {
      message.open({
        type:'error',
        content:'上传失败'
      })
     }
     return false;
  }
    return (
       <div className={styles.person_container}>
            <div className={styles.message_container}>
                <div className={styles.user_avatar}>
                  <Avatar size={140} src={ <Image
                    width={140}
                    src={userInfo.avatar ? userInfo.avatar : 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'}
                    alt="avatar"
                  />}/>
                   <Upload 
                     multiple={true} 
                     beforeUpload={handleBeforeUpload}
                     showUploadList={false}
                     >
                    <Button icon={<CameraOutlined />}></Button>
                  </Upload>
                </div>
                 <div className={styles.user_info} onClick={() => setIsModifyOpen(true)}>
                   <Tooltip title="点击修改个人信息"  placement="right">
                   <Descriptions title="User Info" items={items}/>
                  </Tooltip>
                 </div>
            </div>
            <div className={styles.my_rental_list}>
               <ProductionInfo title={'我的租凭'}/>
            </div>
            <div className={styles.my_hire_list}>
               <ProductionInfo title={'我的出租'}/>
            </div>
            <Button 
              style={{
                position: 'absolute',
                right:0,
                top: 100
              }}
              type="primary" 
              onClick={showModal}
              >
              发布
            </Button>
            <Modal title="发布中心" open={isModalOpen} onCancel={handleCancel}  footer={null}>
               <div className={styles.publish_container}>
                  <div className={styles.publish_navigation}>
                      <Menu 
                      style={{
                        display:'flex',
                        justifyContent: 'space-around'
                      }}
                      items={NavItems}
                      mode="horizontal"
                      onClick={handNavClick}
                      selectedKeys={[navValue]}
                      />
                      {
                        navValue === 'publish_requirements' 
                          ? <PublishRequirement/> 
                          : <PublishProduct/>
                      }
                  </div>
               </div>
            </Modal>
            <Modal title="修改个人信息" open={isModifyOpen} footer={null} onCancel={()=> setIsModifyOpen(false)}>
              <Form
                {...layout}
                form={form}
                name="control-hooks"
                onFinish={onFinish}
                style={{
                  maxWidth: 600,
                }}
              >

                <Form.Item
                  name="name"
                  label="用户名"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                name="sign"
                label="个性签名"
                rules={[
                  {
                    required: true,
                  },
                ]}
                >
                   <Input />
                </Form.Item>

                
                <Form.Item
                  name="gender"
                  label="性别"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select
                    placeholder="Select a option and change input text above"
                    allowClear
                  >
                    <Option value="男">男</Option>
                    <Option value="女">女</Option>
                  </Select>
                </Form.Item>
                
               <Form.Item
                name="datePicker"
                label="生日"
                rules={[
                  {
                    required: true,
                  },
                ]}
               >
                  <DatePicker 
                    format="YYYY-MM-DD" // 你可以根据需要设置日期格式
                    disabledDate={(current) => {
                      // 这里是禁用日期的逻辑，例如不允许选择未来的日期
                      return current && current > moment().endOf('day');
                    }}
                    locale={zhCN}
                  />
               </Form.Item>

                <Form.Item {...tailLayout}>
                  <Space>
                    <Button type="primary" htmlType="submit">
                      点击修改
                    </Button>
                  </Space>
                </Form.Item>

              </Form>
            </Modal>
       </div>
    )
}

export default Person;