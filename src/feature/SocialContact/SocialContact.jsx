import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {message} from 'antd';
import {findAllMovie} from "../../api/movie";
import {getCinema} from "../../api/cinema";
import {addCinemas, addFilms} from "../../app/socialContactSlice";
import SocialContactForm from "./SocialContactForm";

const SocialContact = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        let key = new Date();
        findAllMovie().then((response) => {
            message.loading({content: '影院数据读取中...', key, duration: 1});
            dispatch(addFilms(response.data));
        }).catch(() => {
            message.warning({content: '影院数据读取失败!请稍后再试', key, duration: 2});
        });
        key = new Date();
        getCinema().then((response) => {
            message.loading({content: '电影数据读取中...', key, duration: 1});
            dispatch(addCinemas(response.data));
        }).catch(() => {
            message.warning({content: '电影数据读取失败!请稍后再试', key, duration: 2});
        });
    }, [dispatch]);

    return (
        <div>
            <SocialContactForm/>
        </div>
    );
};

export default SocialContact;