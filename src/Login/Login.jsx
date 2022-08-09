import React from "react";
import {
  LockOutlined,
  UserOutlined,
  VerifiedOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import "./Login.css";
import { postLoginUser } from "../api/user";
import history from "../router/history";

export default function Login() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const loginUser = { ...values, captchaCode: "123" };
    postLoginUser(loginUser)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          sessionStorage.setItem("username", loginUser.credentialId);
          sessionStorage.setItem("token", response.headers['authorization']);
          history.replace({pathname:"/index",state:{}})
          history.go(-1)
        } else {
          message.error("登录失败");
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
            <h2 style={{ textAlign: "center", marginBottom: "25px" }}>
              登录 WeTicket
            </h2>
            <Form.Item
              name="credentialId"
              rules={[
                {
                  required: true,
                  message: "请输入您的用户名/邮箱/手机号!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="用户名/邮箱/手机号"
              />
            </Form.Item>
            <Form.Item
              name="credential"
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
                style={{ display: "block", margin: "0 auto" }}
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
