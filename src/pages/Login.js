import React from 'react'
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.css'
import { Link } from 'react-router-dom';
const Login = () => {
  const loginHandler=()=>{
    window.location.href = "/home";
    console.log('homePage')
  } 
  const onFinish = (values) => {
        console.log('Received values of form: ', values);
        const userid=values.username;
        const password=values.password;
        console.log(userid,password);
        const userRecord=JSON.parse(localStorage.getItem('key'));
        for(let i=0;i<userRecord.length;i++){
          if(userRecord[i].username === userid && userRecord[i].password===password){
              console.log(`${userRecord[i].username} is Sucsessfully Login`);
              localStorage.setItem('isLoggedIn','1');
          }}

    
      };
    return (
      <div className='container'>
      <div className='logo'>
        <h1>Login Page</h1>
        <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          size="10"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button onClick={loginHandler} type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <Link to="/">Sign up Here</Link>
      </Form.Item>
    </Form>
    </div></div>
  );
};
 

export default Login
