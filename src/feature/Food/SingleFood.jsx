import React from "react";
import { Button, Divider, Modal, message } from "antd";
import "./SingleFood.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addFoodOrder } from "../../api/foods";

const SingleFood = (props) => {
  const navigate = useNavigate();
  const { id, name, picture, inventory, price } = props;
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    const username = sessionStorage.getItem("username");
    if (username === undefined || username === null || username.length === 0) {
      navigate("/login");
    } else {
      setVisible(true);
    }
  };

  const handleOk = () => {
    setLoading(true);
    const foodOrder = {
      foodId: id,
      foodName: name,
      count: 1,
      price: price,
      totalPrice: price,
    };
    addFoodOrder(foodOrder).then(() => {
      setLoading(false);
      setVisible(false);
      window.location.replace('/food')
    });

  };

  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <div className="single-food">
      <Modal
        visible={visible}
        title="WeTicket 温馨提示："
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            取消
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            确认
          </Button>,
        ]}
      >
        <p>确定购买{name}吗？</p>
        <p>您将支付{price}元</p>
      </Modal>
      <div className="picture-panel">
        <img src={picture} className="picture" alt="该套餐暂无实物图"></img>
      </div>
      <div className="info-panel">
        <div className="title">{name}</div>
        <Divider></Divider>
        <div className="price-panel">
          <div className="price-label">门市价：</div>
          <div className="price-symbol">￥</div>
          <div className="food-price">{price}</div>
        </div>

        <div className="buy-panel">
          <Button
            type="primary"
            shape="round"
            size="large"
            disabled={inventory === 0}
            onClick={showModal}
          >
            {inventory === 0 ? "已售罄" : "立即抢购"}
          </Button>
          <div className="inventory">库存：{inventory}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
