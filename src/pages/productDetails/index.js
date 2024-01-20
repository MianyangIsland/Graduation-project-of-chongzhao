import React, {useState} from "react";
import { Button, Descriptions , Image } from 'antd';
import { useLocation } from "react-router-dom";
import Comments from "../../components/comments";
import styles from './index.module.css';

const ProductDetails = () => {
    const [open, setOpen ] = useState(false); 

    const items = [
        {
          key: '1',
          label: 'UserName',
          children: 'Zhou Maomao',
        },
        {
          key: '2',
          label: 'Telephone',
          children: '1810000000',
        },
        {
          key: '3',
          label: 'Live',
          children: 'Hangzhou, Zhejiang',
        },
        {
          key: '4',
          label: 'Remark',
          children: 'empty',
        },
        {
          key: '5',
          label: 'Address',
          children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
        },
      ];
    const imageList = [
        {
            id: 1,
            src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        },
        {
            id: 2,
            src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        },
        {
            id: 3,
            src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        },
        {
            id: 4,
            src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        },
        {
            id: 5,
            src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        },
        {
            id: 6,
            src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        },
        {
            id: 7,
            src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        },
        {
            id: 8,
            src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        },
        {
            id: 9,
            src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        },
    ]
    const location = useLocation();
    const CheckOutReviews = () => {
      setOpen(!open);
    }
    return (
       <div className={styles.product_details_container}>
           <div className={styles.text_parameters}>
           <Descriptions title="User Info" items={items} />
           </div>
           <div className={styles.image_parameters}>
            {
              imageList.map((item ,index) => {
                return <Image id={item.id} src={item.src} width={200}/>
              })
            }
           </div>
          <div className={styles.comments_btn}>
          <Button 
              onClick={CheckOutReviews} 
              type="link">
                查看评论
            </Button>
          </div>
           <Comments open={open} changeOpen={CheckOutReviews}/>
       </div>
    )
}

export default ProductDetails;