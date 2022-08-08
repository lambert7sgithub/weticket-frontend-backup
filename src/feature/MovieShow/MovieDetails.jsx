import React from 'react';
import { Layout } from 'antd';
import img from "../images/zhanlan.png";
import { Descriptions } from 'antd';
import { Card } from 'antd';
import "../../CSS/Descriptions.css";


const MovieDetails = () => {

    const { Header, Footer,  Content } = Layout;

    return (
        <Layout>
            <Header>Header</Header>
            <Layout style={{ display: "flex" }}>
                <Content>
                    <div style={{ display: "flex" }}>
                        <img src={img} alt="" style={{ margin: "200px", height: "600px" }}></img>
                        <div>
                            <div style={{ marginTop: "200px", fontSize: "60px" }}>
                                电影名字
                            </div>
                            <div>
                            <Descriptions column={1} style={{ marginTop: "50px", fontSize: "30px" }} >
                                <Descriptions.Item label="导演: ">吴京</Descriptions.Item>
                                <Descriptions.Item label="主演: ">吴京/张翰/吴刚/余男</Descriptions.Item>
                                <Descriptions.Item label="语言: ">普通话</Descriptions.Item>
                                <Descriptions.Item label="片长: ">123分钟</Descriptions.Item>
                                <Descriptions.Item label="上映时间： ">2014-4-43 12:00:00</Descriptions.Item>
                            </Descriptions>
                            </div>

                            <div>
                                <Card title="剧情描述:" style={{width:"800px",fontSize:"25px",marginTop:"30px"}}>
                                    <div style={{fontSize:"20px"}}>
                                    <p>　 由于一怒杀害了强拆牺牲战友房子的恶霸，屡立功勋的冷锋（吴京 饰）受到军事法庭的判决。在押期间，亲密爱人龙小云壮烈牺牲。出狱后，冷锋辗转来到非洲，他辗转各地，只为寻找杀害小云的凶手。在此期间，冷锋逗留的国家发生叛乱，叛徒红巾军大开杀戒，血流成河。中国派出海军执行撤侨任务，期间冷锋得知有一位陈博士被困在五十五公里外的医院，而叛军则试图抓住这位博士。而从另一位华侨（于谦 饰）口中得知，杀害小云的凶手正待在这个国家。
　　在无法得到海军支援的情况下，冷锋只身闯入硝烟四起的战场。不屈不挠的战狼，与冷酷无情的敌人展开悬殊之战……</p>
</div>
                                </Card>
                            </div>
                        </div>
                    <div style={{margin:"100px", alignItems: "center"}}> 
                    <div style={{marginTop:"300px", alignItems: "center"}}>
                    <a class="push_button red" href="#">Buy Ticket</a> 
                    </div>
                    <br/>
                    <div>
                    <a class="push_button blue" href="#">Buy Food</a>
                    </div>
                    </div>
                    </div>
                </Content>

            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    );
};

export default MovieDetails;