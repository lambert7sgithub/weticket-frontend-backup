import React, {useRef} from "react";
import {Button, Carousel} from "antd";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
// import { useState } from "react";
import "./MainCarousel.css";

const MainCarousel = () => {
    const contentStyle = {
        height: "400px",
        width: "750px",
        color: "#fff",
        lineHeight: "380px",
        textAlign: "center",
        background: "#364d79",
    };
    const carouselEL = useRef(null);
    const movieList = [
        "https://img.zcool.cn/community/01d5665b791b0aa80120d8c05414e5.jpg",
        "https://ts1.cn.mm.bing.net/th/id/R-C.bf7f9410095e45f1ab950960c2448b79?rik=KYdV5S6WWnA9bA&riu=http%3a%2f%2fimg.zcool.cn%2fcommunity%2f0373d4558343139a801219c77e76c85.jpg&ehk=dP5nwiYlBb79N6qDgprRTDpa%2fGf4F4fNn0wz1jdV06Y%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
        "https://ts1.cn.mm.bing.net/th/id/R-C.97cc3bf2c9c7148dbd630e864f6ff11a?rik=roh0auUpj0%2bKsw&riu=http%3a%2f%2fup.zhuoku.org%2fpic%2f87%2ff6%2f3c%2f87f63ccfa3caa2a50c187e2db863fb03.jpg&ehk=mN5QsRJDwc62NdC44CvuR%2b%2fottc1tXEiNuKuPIEnyPQ%3d&risl=&pid=ImgRaw&r=0",
    ];
    // const [swiperList,setSwiperList] = useState(movieList)
    return (
        <div className="carousel">
            <Button
                className="leftButton"
                style={{left: -450, borderRadius: "50%"}}
                onClick={() => {
                    carouselEL.current.prev();
                }}
                icon={<LeftOutlined/>}
            ></Button>
            <Button
                className="rightButton"
                style={{left: 450, borderRadius: "50%"}}
                onClick={() => {
                    carouselEL.current.next();
                }}
                icon={<RightOutlined/>}
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
                            width={750}
                            height={400}
                        />
                    );
                })}
      </Carousel>
    </div>
  );
};

export default MainCarousel;
