import { useState } from 'react'
import styles from "./index.module.css"

import { useNavigate, Outlet,Link  } from 'react-router-dom';
import { Space, Dropdown } from 'antd';
import {

    MenuOutlined, SettingOutlined, LaptopOutlined, BellOutlined, DownOutlined, SmileOutlined,ContainerOutlined 
} from '@ant-design/icons';
import {
  
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
// const homeHome = lazy(() => import('./homeHome'));
// const brand = lazy(() => import('./brand'));
const { Header, Content, Footer, Sider } = Layout;

// const items: MenuProps['items'] = [
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
//   BarChartOutlined,
//   CloudOutlined,
//   AppstoreOutlined,
//   TeamOutlined,
//   ShopOutlined,
// ].map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon),
//   label: `nav ${index + 1}`,
// }));
const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item ()
            </a>
        ),
        icon: <SmileOutlined />,

    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                3nd menu item ()
            </a>
        ),
        icon: <SmileOutlined />,

    },

];


const Home = () => {
    const {
        token: { colorBgContainer,},
    } = theme.useToken();
    const navigate = useNavigate();
    
     //点击创建
      let [modifydata,setmodifydata]=useState(false)
    const createFun=()=>{
        console.log('创建')
        setmodifydata(!modifydata)
    }
    //切页面
    const handleClick = (e: any) => {
        // 获取当前点击事件的key值，key值就是我们给页面配置的路由啦
        console.log('key', e.key);
        navigate(e.key, { replace: true }); // 实现跳转
    }
   
    return <div>
        <div className={styles.top}>
            <div>
                <Space>
                    <MenuOutlined style={{ fontSize: '24px' }} />
                </Space>
            </div>
            <div>
                <img src="https://static.canva.cn/web/images/e1787d84651689b6f20de2ebd8d86baf.svg" alt="" className={styles.topLogo} />
            </div>
      

            <div className={styles.topMenus}>
                <Dropdown menu={{ items }}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            模板素材
                            <DownOutlined />
                        </Space>
                        <Space>
                            设计场景
                            <DownOutlined />
                        </Space>
                         <Space>
                            模板素材
                            <DownOutlined />
                        </Space>
                         <Space>
                            模板素材
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </div>
            <div className={styles.topIcons}>
                <div>    <LaptopOutlined /></div>
                <div>     <SettingOutlined /></div>
                <div>    <BellOutlined /></div>
              
            </div>
            <div><input type="text" placeholder='请输入' className={styles.topIpt}/></div>
            <div >
                <button className={styles.topcreate} onClick={()=>{createFun()}}>创建设计</button>
                {modifydata?<div className={styles.topcreatemodule} >

                    <div ><input type="text" placeholder='请输入' className={styles.topcreatemoduletop}/></div>
                    <div className={styles.topcreatemodulecenter}>
         
                    <ul className={styles.topUl}>
                        <li >
                            <ContainerOutlined />
                            <Link to="/design" className={styles.toplink}>文档</Link></li>
                       
                        <li>sdssd</li>
                    </ul>
                    </div>
                    <div className={styles.topcreatemodulebottom}>
                        3
                    </div>
                </div>:''}
            
            </div>
            <div className={styles.topUserAvatar}>
                <img src="https://avatar.canva.cn/avatars/users/c1a39d6e-5d7a-456f-a451-c2e2d9930f47/50.jpg" alt="" className={styles.topImg} />
            </div>
        </div>
        <div className={styles.center}>
            <Layout hasSider>
                <Sider
                    style={{ overflow: 'auto', height: '80vh', position: 'fixed', left: 0, top: 73, bottom: 0 }}
                >
                    <div className="demo-logo-vertical" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={[
                        {
                            key: '/home/homehome',
                            icon: <UserOutlined />,
                            label: '首页',
                        },
                        {
                            key: '/home/brand',
                            icon: <VideoCameraOutlined />,
                            label: '品牌',
                        },
                        {
                            key: '/three',
                            icon: <UploadOutlined />,
                            label: '应用',
                        },
                    ]}

                        onClick={handleClick} />
                </Sider>
                <Layout style={{ marginLeft: 200 }}>
                    {/* <Header style={{ padding: 0, background: colorBgContainer }} /> */}
                    <Content style={{ margin: '24px 16px 0', height:'660px' }}>
                     
<Outlet></Outlet>
                       
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©{new Date().getFullYear()} Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </div>

    </div>
}

export default Home