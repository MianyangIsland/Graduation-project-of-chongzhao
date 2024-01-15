import React , { useState } from "react";
import { Button, Input, Space, Image} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import styles from  './index.module.css';


const Recommend = () => {

    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState();
    const onSearch = () => console.log(inputValue);

    const handleChange = (e) => {
       setInputValue(e.target.value);
    }

    const data = [
        {
            id: 1,
            src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            id: 2,
            src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            id: 3,
            src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            id: 4,
            src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            id: 5,
            src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            id: 6,
            src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            id: 7,
            src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            id: 8,
            src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            id: 9,
            src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            id: 10,
            src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            id: 11,
            src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            id: 12,
            src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            id: 13,
            src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            id: 14,
            src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            id: 15,
            src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            id: 16,
            src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            id: 17,
            src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },

    ]

    return (
        <>
        <div className={styles.recommend_container}>
           <div className={styles.heard_bar}>
               <span className={styles.heard_title}>西邮租凭</span>
               <Space className={styles.heard_search}>
                <Input 
                    placeholder="input search text" 
                    allowClear
                    enterButton="Search"
                    value={inputValue}
                    style={{
                        width: 304,
                        color: 'white'
                    }}
                    onChange={handleChange}
                    />
                    <Button shape="circle" icon={<SearchOutlined />}  onClick={onSearch}/>
               </Space>
           </div>
           <div className={styles.products_container}>
              <ul className={styles.products_list}>
                   {
                    data.map((item, index) => {
                        return (
                            <li 
                             className={styles.products_item} 
                             id={item.id} 
                             onClick={() => navigate('/main/product_details',{
                                state: {
                                    id:item.id
                                }
                             })}
                             >
                                <Image src={item.src} />
                            </li>
                        )
                    })
                   }
              </ul>
           </div>
        </div>
        </>
    )
}

export default  Recommend;