import React, {useEffect, useState} from "react";
import SingleFood from "./SingleFood";
import "./SingleFood.css";
import {message, Pagination} from "antd";
import food from "./food.svg";
import {getFoods} from "../../api/foods";

export default function Food() {
  const [currentPage, setCurrentPage] = useState(0);
  const [foodList, setFoodList] = useState([]);
  const [totalFood, setTotalFood] = useState(0);
  useEffect(() => {
    getFoods(currentPage).then((response) => {
      setFoodList(response.data.content);
      setTotalFood(response.data.totalElements);
    }).catch(() => {
        message.warning({content: '数据加载失败!请稍后再试', key: new Date(), duration: 2});
    });
  }, [currentPage]);
  const updatePage = (current) => {
    setCurrentPage(current - 1);
  };

  return (
    <div>
      <div className="list-title">
        <img src={food} alt="" className="svg-icon"></img>
        零食套餐
      </div>

      {foodList.map((item, index) => {
        return (
          <SingleFood
            key={index}
            id={item.id}
            name={item.foodName}
            picture={item.picture}
            inventory={item.inventory}
            price={item.price}
          />
        );
      })}

      <Pagination
        className="food-pagination"
        showQuickJumper
        defaultCurrent={1}
        defaultPageSize={3}
        total={totalFood}
        onChange={updatePage}
      />
    </div>
  );
}
