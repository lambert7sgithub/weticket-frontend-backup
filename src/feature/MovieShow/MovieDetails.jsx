import React from 'react';
import { Layout } from 'antd';
import img from "../images/zhanlan.png";
import { Divider } from 'antd';
import { Card } from 'antd';
import "../../CSS/Descriptions.css";
import {RightCircleOutlined,SearchOutlined} from '@ant-design/icons';

const MovieDetails = () => {

    const {  Content } = Layout;

    return (
        <Layout>
            <Layout style={{ display: "flex" }}>
                <Content>
                {/* background:"-webkit-linear-gradient(top,white,#b5f5ec)" */}
                <div style={{display:"flex"}}>
                    <div style={{  display: "flex"}}>
                        <img src={img} alt="" style={{ margin: "120px 50px 200px 200px", height: "660px" }}></img>
                        <div style={{marginRight:"10px",width: "1000px" }}>
                            {/* <div style={{ marginTop: "100px", fontSize: "60px" }}>
                                电影名字
                            </div> */}
                            <div style={{height:"500px",marginTop: "100px",fontSize: "30px"}}>
                            <Card  style={{width:"800px",fontSize: "25px"}}>
                                <p>
                                    <span style={{fontSize:"50px"}}><RightCircleOutlined /> 电影名字</span>
                                </p>
                                <Divider/>
                                <p>
                                    <span>导演：</span>
                                    吴京
                                </p>
                                <p>
                                    <span>主演：</span>
                                    吴京/张翰/吴刚/余男
                                </p>
                                <p>
                                    <span>语言：</span>
                                    普通话
                                </p>
                                <p>
                                    <span>片长：</span>
                                    123分钟
                                </p>
                                <p>
                                    <span>上映时间：</span>
                                    2014-4-43 12:00:00
                                </p>


                            </Card>
                            </div>

                            <div>
                                <Card style={{width:"800px",fontSize:"25px",marginTop:"30px"}}>
                                <p>
                                    
                                    <span style={{fontSize:"30px"}}> <SearchOutlined /> 剧情描述:</span>
                                </p>
                                <Divider/>
                                    <div style={{fontSize:"20px"} }>
                                    <p>　 由于一怒杀害了强拆牺牲战友房子的恶霸，屡立功勋的冷锋（吴京 饰）受到军事法庭的判决。在押期间，亲密爱人龙小云壮烈牺牲。出狱后，冷锋辗转来到非洲，他辗转各地，只为寻找杀害小云的凶手。在此期间，冷锋逗留的国家发生叛乱，叛徒红巾军大开杀戒，血流成河。中国派出海军执行撤侨任务，期间冷锋得知有一位陈博士被困在五十五公里外的医院，而叛军则试图抓住这位博士。而从另一位华侨（于谦 饰）口中得知，杀害小云的凶手正待在这个国家。
　　在无法得到海军支援的情况下，冷锋只身闯入硝烟四起的战场。不屈不挠的战狼，与冷酷无情的敌人展开悬殊之战……</p>
</div>
                                </Card>
                            </div>
                        </div>
                        </div>
                    <div style={{ alignItems: "center"}}> 
                     <div style={{marginTop:"340px", alignItems: "center"}}>
                    <a className="push_button red" href="/">Buy Ticket</a> 
                     </div>
                    <br/>
                     <div>
                    <a className="push_button blue" href="/">Buy Food</a>
                    </div>
                    </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default MovieDetails;