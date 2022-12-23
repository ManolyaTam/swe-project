import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

const Login = (props) => {

  return (
    <Form className="login-form">
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input 
        prefix={<UserOutlined className="site-form-item-icon" />}
         placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
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
        <Button 
        type="primary" 
        htmlType="submit" 
        className="login-form-button"
        onClick={() => props.setLoggedIn(true)}
        >
          Log in
        </Button><br/>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  );
};

export default Login;