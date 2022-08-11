import React from "react";
import {LockOutlined, UserOutlined,} from "@ant-design/icons";
import {Button, Form, Input, message} from "antd";
import "./Login.css";
import {postLoginUser} from "../../api/user";
import {useNavigate} from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const loginUser = { ...values, captchaCode: "123" };
    await postLoginUser(loginUser)
      .then((response) => {
        sessionStorage.setItem("username", loginUser.credentialId);
        sessionStorage.setItem("token", response.headers["authorization"]);
        window.location.replace("/");
        navigate("/");
      })
      .catch((err) => {
        message.error("登录失败: 用户名或密码错误");
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
            <h2 className="login-form-title">登录 WeTicket</h2>
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
