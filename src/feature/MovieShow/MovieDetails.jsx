import React, {useEffect, useState} from 'react';
import {Card, Divider, Layout} from 'antd';
import "./CSS/MovieDetails.css";
import {RightCircleOutlined, SearchOutlined} from '@ant-design/icons';
import {getMovieById} from "../../api/movie";
import {Link, useParams} from 'react-router-dom';


const MovieDetails = () => {

    let {movieId} = useParams();
    const {Content} = Layout;

    const [movie, setMovie] = useState({});

    useEffect(() => {
        getMovieById(movieId).then((response) => {
            setMovie(response.data)
        }).catch((error) => {
            alert(error);
        })
    }, [movieId]);

    console.log(movie);


    return (
        <Layout>
            <Layout style={{display: "flex"}}>
                <Content>
                    <div style={{display: "flex"}}>
                        <div style={{display: "flex"}}>
                            <img src={movie.picture} alt=""
                                 style={{margin: "120px 50px 200px 50px", height: "600px"}}></img>
                            <div style={{marginRight: "10px", width: "700px"}}>
                                <div style={{height: "400px", marginTop: "100px", fontSize: "30px"}}>
                                    <Card style={{width: "600px", fontSize: "20px"}}>
                                        <p>
                                            <span
                                                style={{fontSize: "40px"}}><RightCircleOutlined/> {movie.movieName}</span>
                                        </p>
                                        <Divider/>
                                        <p>
                                            <span>导演：</span>
                                            {movie.actor}
                                        </p>
                                        <p>
                                            <span>主演：</span>
                                            {movie.directedBy}
                                        </p>
                                        <p>
                                            <span>语言：</span>
                                            {movie.language}
                                        </p>
                                        <p>
                                            <span>片长：</span>
                                            {movie.length}
                                        </p>
                                        <p>
                                            <span>上映时间：</span>
                                            {movie.length}
                                        </p>


                                    </Card>
                                </div>

                                <div>
                                    <Card style={{width: "600px", fontSize: "25px"}}>
                                        <p>

                                            <span style={{fontSize: "25px"}}> <SearchOutlined/> 剧情描述:</span>
                                        </p>
                                        <Divider/>
                                        <div style={{fontSize: "15px"}}>
                                            <p>  {movie.info}</p>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        </div>
                        <div style={{alignItems: "center"}}>
                            <div style={{marginTop: "280px", alignItems: "center"}}>
                                <Card>
                                    <a className="push_button red" href={'/Scheduling/'+movieId}>Buy Ticket</a>
           
                                </Card>
                            </div>
                            <br/>
                            <div>
                                <Card>
                                    <Link to={"/"} className="push_button blue">
                                        Buy Ticket
                                    </Link>
                                </Card>
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default MovieDetails;
