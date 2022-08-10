import React, { useState } from "react";
import {
  LockOutlined,
  MailOutlined,
  UserOutlined,
  VerifiedOutlined,
} from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import "./Register.css";
import { postUser } from "../api/user";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate()

  const onFinish = (values) => {
    const user = { ...values, captchaCode: "123" };
    postUser(user)
      .then(() => {
        navigate("/login");
        //弹出成功提示
        // message.success(response.data.msg);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="register">
        <div className="outBorder">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <h2 className="register-form-title">
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
              name="email"
              rules={[
                {
                  required: true,
                  message: "请输入您的邮箱!",
                },
                {
                  type: "email",
                  message: "邮箱格式不对!",
                },
              ]}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="邮箱"
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
              />
            </Form.Item>
            <Form.Item
              name="confirm"
              dependencies={['password']}
              hasFeedback
              rules={[
                { required: true, message: "请再次输入您的密码!" },
                ({getFieldValue}) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject("两次密码不一致");
                  },
                }),
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="再次输入密码"
              />
            </Form.Item>
            <Form.Item
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
