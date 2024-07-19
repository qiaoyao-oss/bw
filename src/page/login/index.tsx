import React from 'react'
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom'
//引入登录方法
import { getLogin } from "../../request/index"
type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};



const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};


const Login = () => {
    const navigate = useNavigate()
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
        //调用登录接口
        let userData = {
            username: values.username,
            password: values.password
        }
        console.log(userData)
        getLogin(userData).then(res => {
            console.log(res.data)
            let { code } = res.data
            //通过code码判断
            if (code ===200) {
                //成功 1.保存信息到本地 2.跳转页面
                navigate('/home')
            } else {    
                //失败
                alert('账号或者密码错误')
            }

        })


    };

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>



            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Login

// import { Link, Outlet } from "react-router-dom"

// const Login = () => {
//     return <div>
//         我是一级路由login
//         <Link to="/one">面板</Link>
//         <br />
//         <Link to="/two">关于</Link>
//         {/* 二级路由出口 */}
//         <Outlet />

//     </div>
// }

// export default Login