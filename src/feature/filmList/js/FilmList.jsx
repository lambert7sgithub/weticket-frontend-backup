import React, {useEffect} from 'react';
import {message} from "antd";
import {useDispatch} from "react-redux";
import {findAllMovie} from "../../../api/movie";
import {addFilms} from "../../../app/filmSlice";
import FilmGroup from "./FilmGroup";

const FilmList = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        let key = new Date();
        findAllMovie().then((response) => {
            message.loading({content: '数据加载中...', key, duration: 1});
            dispatch(addFilms(response.data));
        }).catch(() => {
            message.warning({content: '数据加载失败，请稍后再试...', key, duration: 1});
        });
    }, [dispatch]);

    return (
        <div>
            <FilmGroup/>
        </div>
    );

};

export default FilmList;
