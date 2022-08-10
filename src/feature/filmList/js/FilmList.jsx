import React, {useEffect} from 'react';
import {message} from "antd";
import {useDispatch} from "react-redux";
import {findAllMovie} from "../../../api/movie";
import {addFilms} from "../../../app/filmSlice";
import FilmGroup from "./FilmGroup";
import FilmListHeader from "./FilmListHeader";

const FilmList = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        let key = new Date();
        findAllMovie().then((response) => {
            console.log(response);
            message.loading({content: 'Loading...', key});
            dispatch(addFilms(response.data));
        }).finally(() => {
            message.success({content: 'Welcome!', key, duration: 2});
        });
    }, [dispatch]);

    return (
        <div>
            <FilmListHeader/>
            <FilmGroup/>
        </div>
    );

};

export default FilmList;
