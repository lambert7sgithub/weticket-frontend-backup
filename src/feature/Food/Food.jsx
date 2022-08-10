import React from "react";
import SingleFood from "./SingleFood";

export default function Food() {
  const foodList = [
    {
      name: "【特惠小食】爆米花+可乐+薯片",
      picture:
        "https://ts1.cn.mm.bing.net/th/id/R-C.e041a4adfe0b0c486f6e01c67a7ea9d1?rik=W0UgqoTa9SM63Q&riu=http%3a%2f%2fpic5.nipic.com%2f20100301%2f4368087_094330983667_2.jpg&ehk=U3%2b4a5dYT5wQDzjRkj2K3F5SVSwetBUiWcZE6ELUEHw%3d&risl=&pid=ImgRaw&r=0",
      inventory: 999,
      price: "19.9",
    },
    {
      name: "品牌专供饮品爆米花套餐（大包/中包）",
      picture:
        "https://img.zcool.cn/community/01de7b5d08ae7ba801213ec2980e12.jpg@1280w_1l_2o_100sh.jpg",
      inventory: 999,
      price: "29.9",
    },
    {
      name: "品牌专供饮品双人餐",
      picture:
        "https://ts1.cn.mm.bing.net/th/id/R-C.e041a4adfe0b0c486f6e01c67a7ea9d1?rik=W0UgqoTa9SM63Q&riu=http%3a%2f%2fpic5.nipic.com%2f20100301%2f4368087_094330983667_2.jpg&ehk=U3%2b4a5dYT5wQDzjRkj2K3F5SVSwetBUiWcZE6ELUEHw%3d&risl=&pid=ImgRaw&r=0",
      inventory: 999,
      price: "39",
    },
    {
      name: "爆米花满足大套餐",
      picture:
        "https://img.zcool.cn/community/01de7b5d08ae7ba801213ec2980e12.jpg@1280w_1l_2o_100sh.jpg",
      inventory: 999,
      price: "40",
    },
  ];
  return (
    <div>
      {foodList.map((item) => {
        return (
          <SingleFood
            name={item.name}
            picture={item.picture}
            inventory={item.inventory}
            price={item.price}
          />
        );
      })}

      <div>Footer</div>
    </div>
  );
}
