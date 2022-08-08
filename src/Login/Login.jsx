import React from "react";
import {
  LockOutlined,
  UserOutlined,
  VerifiedOutlined,
} from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import "./Login.css";

export default function Login() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div>
      <div className="login">
        <div className="outBorder">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <h2 style={{ textAlign: "center", marginBottom:'25px' }}>登录 WeTicket</h2>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "请输入您的用户名/邮箱/手机号!",
                },
                {
                  max:11,
                  message:"手机号格式不正确!"
                }
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="用户名/邮箱/手机号"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>
            <Form.Item
              name="verification"
              rules={[
                {
                  required: true,
                  message: "Please input your verification Code!",
                },
              ]}
            >
              <Input
                prefix={<VerifiedOutlined className="site-form-item-icon" />}
                placeholder="验证码"
              />
            </Form.Item>

            <Form.Item>
              <Button
                style={{display:'block',margin:'0 auto'}}
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
