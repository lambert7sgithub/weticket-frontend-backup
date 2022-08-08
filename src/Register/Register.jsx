import React, { useState } from "react";
import {
  LockOutlined,
  PhoneOutlined,
  UserOutlined,
  VerifiedOutlined,
} from "@ant-design/icons";
import { Button, Form, Input } from "antd";

export default function Register() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const [passWord,setPassWord] = useState('');
  
  
  const getFieldValue = (event) => {
    setPassWord(event.target.value)
  }

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
            <h2 style={{ textAlign: "center", marginBottom: "25px" }}>
              注册 WeTicket
            </h2>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "用户名不能为空",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="用户名"
              />
            </Form.Item>
            <Form.Item
              name="phoneNumber"
              rules={[
                {
                  required: true,
                  message: "请输入您的手机号!",
                },
                {
                  max: 11,
                  message: "手机号格式不正确!",
                },
              ]}
            >
              <Input
                prefix={<PhoneOutlined className="site-form-item-icon" />}
                placeholder="手机号"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "请输入您的密码!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
                onChange={getFieldValue}
              />
            </Form.Item>
            <Form.Item
              name="confirmPassWord"
              rules={[
                { required: true, message: "请再次输入您的密码!"},
                () => ({
                    validator(_,value){
                        if(value !== passWord){
                            return Promise.reject("两次密码不一致")
                        }
                        return Promise.resolve()
                    }
                })
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="再次输入密码"
              />
            </Form.Item>
            <Form.Item
              name="verification"
              rules={[
                {
                  required: true,
                  message: "请输入验证码!",
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
                style={{ display: "block", margin: "0 auto" }}
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                注册
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
