import React,{ useState }  from 'react'

import styles from "./index.module.css"
import {
    MenuOutlined,RotateLeftOutlined,RotateRightOutlined,CloudUploadOutlined,UploadOutlined
} from '@ant-design/icons';
import { Button,  Tabs } from 'antd';
import type { RadioChangeEvent } from 'antd';
type TabPosition = 'left' | 'right' | 'top' | 'bottom';
const DesignType = () => {
    const [tabPosition, setTabPosition] = useState<TabPosition>('left');
      const changeTabPosition = (e: RadioChangeEvent) => {
    setTabPosition(e.target.value);
  };
    return <div className={styles.wrap} >
        <div className={styles.navbar}  >
            <div style={{display:'flex',lineHeight:'72px'}}>
                <MenuOutlined  style={{fontSize:'30px'}}/>
                <Button type="text" style={{margin:'auto'}}>文件</Button>
                <Button type="text" style={{margin:'auto'}}>魔力转换</Button>
                <div  className={styles.navbarleftright}>
                   <RotateLeftOutlined />
                   <RotateRightOutlined />
                </div>
                <CloudUploadOutlined style={{fontSize:'30px',marginLeft:'30px'}} />


            </div>
            <div style={{display:'flex'}}>
                  <Button type="text" style={{margin:'auto'}}>未命名设计-文档</Button>
                    <Button type="text" style={{margin:'auto'}}>新人半价</Button>
                    <div style={{display:'flex',margin:'auto'}} >
                        <img src="https://avatar.canva.cn/avatars/users/c1a39d6e-5d7a-456f-a451-c2e2d9930f47/50.jpg" alt=""  style={{borderRadius:'50%',width:'50px',height:'50px'}}/>
                        <Button style={{borderRadius:'50%',width:'50px',height:'50px'}}>+</Button>
                    </div>
                         <Button  style={{margin:'auto',marginLeft:'30px'}}>
                                <CloudUploadOutlined />
                         </Button>
                             <Button  style={{margin:'auto',marginLeft:'30px'}}>
                                
                       <UploadOutlined />
                                导出
                         </Button>


            </div>
        </div>
        <div className={styles.context}>
            <div className={styles.contextaside}>

                 <Tabs
        tabPosition={tabPosition}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Tab ${id}`,
            key: id,
            children: `Content of Tab ${id}`,
          };
        })}
      />
            </div>
            <div className={styles.contextcontext}>2</div>
         </div>

    </div>
}

export default DesignType