import React from 'react'
import MovieItem from './MovieItem.jsx'
import './movielists.css'
import {RightOutlined, LeftOutlined} from '@ant-design/icons';
import {findAllMovie} from "../../api/movie";

export default class MovieList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            count: 10,
        }
    }
    
    componentDidMount() {
        findAllMovie()
            .then((response) => {
                    this.setState({movies: response.data});
                }
            )
    }


    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }

    renderList = () => {
        return (
            <div className="listMovie">
                <div>
                    <span className="listName">正在热映 &nbsp; </span>
                    <span>共{this.state.count}部电影</span>

                    <div className="Page">
              <span className="previous_page">
                {" "}
                  <LeftOutlined/>
                上一页
              </span>
                        <span className="next_Page">
                下一页
                <RightOutlined/>
              </span>
                    </div>
                </div>
                <div className="context">
                    {this.state.movies.map((items) => {
                        return <MovieItem {...items} key={items.movieId}/>;
                    })}
                </div>
            </div>
          
          
      );
    };
}


