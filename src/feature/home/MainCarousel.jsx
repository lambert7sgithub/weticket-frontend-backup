import React from "react";
import { Carousel, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
// import { useState } from "react";
import "./MainCarousel.css";
import { useRef } from "react";
const MainCarousel = () => {
  const contentStyle = {
    height: "380px",
    width: "1200px",
    color: "#fff",
    lineHeight: "380px",
    textAlign: "center",
    background: "#364d79",
  };
  const carouselEL = useRef(null);
  const movieList = [
    "https://img.zcool.cn/community/01d5665b791b0aa80120d8c05414e5.jpg",
    "https://ts1.cn.mm.bing.net/th/id/R-C.bf7f9410095e45f1ab950960c2448b79?rik=KYdV5S6WWnA9bA&riu=http%3a%2f%2fimg.zcool.cn%2fcommunity%2f0373d4558343139a801219c77e76c85.jpg&ehk=dP5nwiYlBb79N6qDgprRTDpa%2fGf4F4fNn0wz1jdV06Y%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
    "https://ts1.cn.mm.bing.net/th/id/R-C.1f98c1029356c544de42598d45f80a8b?rik=ovd9q2kQsJN5sA&riu=http%3a%2f%2fi2.sinaimg.cn%2fent%2fd%2f2009-04-04%2fU1584P28T3D2455839F326DT20090404000337.jpg&ehk=r16xLhHTOFF%2fMShLS34BACM3cZw4ntF4vDXvMkmYdt4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
  ];
  // const [swiperList,setSwiperList] = useState(movieList)
  return (
    <div className="carousel">
      <Button
        className="leftButton"
        style={{ left: 20, borderRadius: "50%" }}
        onClick={() => {
          carouselEL.current.prev();
        }}
        icon={<LeftOutlined />}
      ></Button>
      <Button
        className="rightButton"
        style={{ left: 1120, borderRadius: "50%" }}
        onClick={() => {
          carouselEL.current.next();
        }}
        icon={<RightOutlined />}
      ></Button>
      <Carousel
        autoplay
        autoplaySpeed={3000}
        effect="fade"
        arrows={true}
        ref={carouselEL}
      >
        {movieList.map((item, index) => {
          return (
            <img
              src={item}
              alt=""
              key={index}
              style={contentStyle}
              width={1200}
              height={380}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default MainCarousel;
