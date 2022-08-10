import React from "react";

export default function Seat() {
  return (
    <div>
      <Layout>
        <Content>
        <div class="seat-aside">
        <div className="content">
          <img style="padding: 30px" :src="film.cover" alt=""/>
          <div>
            <div
                style="
                padding-top: 40px;
                padding-bottom: 10px;
                font-size: 25px;
                letter-spacing: 2px;
              "
            >
              {{ film.name }}
            </div>
            <div class="seat-aside-text">类型：{{ film.type }}</div>
            <div class="seat-aside-text">地区：{{ film.region }}</div>
            <div class="seat-aside-text">时长：{{ film.duration }}分钟</div>
          </div>
        </div>
        <div style="padding: 5px 30px">
          <div class="d1"><span>放映：</span>{{ arrangement.type }}</div>
          <div class="d1" style="color: #f56c6c">
            <span>开场：</span>{{ arrangement.date }}
            {{ arrangement.startTime }}
          </div>
          <div class="d1"><span>散场：</span>{{ arrangement.endTime }}</div>
          <div class="d1"><span>票价：</span>¥{{ arrangement.price }}/张</div>
          <el-divider></el-divider>
          <div class="d1">
            已选座位：
            <el-tag v-for="(item, i) in userSelectSeats" :key="i"
                    type="danger"
                    style="margin-right: 5px"
                    effect="plain">
              {{ item }} 号
            </el-tag>
          </div>
          <div class="d1" style="padding-top: 10px">
            总计：
            <span style="color: #f56c6c">¥ </span>
            <span style="color: #f56c6c; font-size: 25px; font-weight: bold"
            >{{ cart.price }}</span
            >
          </div>
          <el-divider></el-divider>
          <div style="padding: 0 50px">
            <el-input
                v-model="cart.phone"
                style="padding-top: 20px; padding-bottom: 30px"
                placeholder="请输入手机号码"
                clearable
            >
            </el-input>
            <el-button @click="submitSeat" class="add-cart-btn" type="danger" round
            >加入购物车
            </el-button>
          </div>
        </div>
        </Content>
      </Layout>
    </div>
  );
}
