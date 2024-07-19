import React from 'react'
import styles from "./index.module.css"
import {
    SearchOutlined,
    VideoCameraOutlined,
    StarOutlined,
    AuditOutlined,
    LeftCircleOutlined,
    RightCircleOutlined 

} from '@ant-design/icons';
import { Button, Tabs } from 'antd';
import type { TabsProps } from 'antd';
const onChange = (key: string) => {
    console.log(key);
};

const items: TabsProps['items'] = [
    {
        key: '1',
        label: '精选推荐',
        icon: <div className={styles.topthresitems}>
            <StarOutlined style={{ fontSize: '30px', margin: '10px' }} />
        </div>,
        children: <div>
            <h1>尝试新事物</h1>

            <div style={{ display: 'flex', justifyContent: 'space-between' ,margin:'0 240px'}}>
    <LeftCircleOutlined style={{ fontSize: '30px' }}/>
                {

                    [{ img: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png', title: '洛克' }, { img: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png', title: '洛克' }, { img: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png', title: '洛克' }, { img: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png', title: '洛克' }, { img: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png', title: '乔伊' }].map(item => {
                        return <div>


                            <div style={{ width: '222px', height: '222px', backgroundColor: '#ffff' }}>
                                <img src={item.img} alt="" style={{ width: '170px', height: '170px', margin: '12%' }} />
                            </div>
                            <text>{item.title}</text>


                        </div>

                    })
                }
                 <RightCircleOutlined style={{ fontSize: '30px' }} />

            </div>,
            <h1>模板</h1>
            <h2>插画</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <LeftCircleOutlined style={{ fontSize: '30px' }}/>
                {

                    [{ img: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' }, { img: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' }, { img: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' }, { img: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' }, { img: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' }].map(item => {
                        return <div>


                            <div style={{ width: '222px', height: '222px', backgroundColor: '#ffff' }}>
                                <img src={item.img} alt="" style={{ width: '170px', height: '170px', margin: '12%' }} />
                            </div>



                        </div>

                    })
                }
                <RightCircleOutlined style={{ fontSize: '30px' }} />

            </div>,
             <h2>手机壁纸</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
 <LeftCircleOutlined style={{ fontSize: '30px' }}/>
                {

                    [{ img: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' }, { img: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' }, { img: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' }, { img: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' }, { img: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' }].map(item => {
                        return <div>


                            <div style={{ width: '222px', height: '222px', backgroundColor: '#ffff' }}>
                                <img src={item.img} alt="" style={{ width: '170px', height: '170px', margin: '12%' }} />
                            </div>



                        </div>

                    })
                }
<RightCircleOutlined style={{ fontSize: '30px' }} />
            </div>,

        </div>



    },
    {
        key: '2',
        icon: <div className={styles.topthresitems}>
            <AuditOutlined style={{ fontSize: '30px', margin: '10px' }} />
        </div>,
        label: '文档',
        children: 'Content of Tab Pane 2',
    },
    {
        key: '3',
        icon: <div className={styles.topthresitems}>
            <VideoCameraOutlined style={{ fontSize: '30px', margin: '10px' }} />
        </div>,
        label: '视频',
        children: 'Content of Tab Pane 3',
    },
    {
        key: '4',
        icon: <div className={styles.topthresitems}>
            <VideoCameraOutlined style={{ fontSize: '30px', margin: '10px' }} />
        </div>,
        label: '视频',
        children: 'Content of Tab Pane 3',
    },
    {
        key: '5',
        icon: <div className={styles.topthresitems}>
            <VideoCameraOutlined style={{ fontSize: '30px', margin: '10px' }} />
        </div>,
        label: '视频',
        children: 'Content of Tab Pane 3',
    },
];
const Homehome = () => {
    return <div>

        <div className={styles.top}>
            <div className={styles.topone}>

                <div></div>
                <div><h1 style={{ color: 'white' }} >今天你想设计什么？</h1></div>
                <div style={{ margin: '10px 20px 0 0' }}>

                    <Button ghost style={{ marginRight: '30px' }}>自定义大小</Button>
                    <Button ghost>上传</Button>
                </div>
            </div>
            <div className={styles.toptwo}>
                <label htmlFor="">
                    <SearchOutlined className={styles.toptwoicon} />
                    <input placeholder="搜索模块或你的设计" className={styles.toptwoipt} />
                </label>

            </div>
            <div className={styles.topthres}>
                <div >

                    <Tabs defaultActiveKey="1" items={items} onChange={onChange} >

                    </Tabs>
                </div>

            </div>
        </div>
    </div>
}

export default Homehome