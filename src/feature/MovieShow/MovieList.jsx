import React from 'react'  
import MovieItem from './MovieItem.jsx'
import './movielists.css'
import { RightOutlined,LeftOutlined} from '@ant-design/icons';
export default class MovieList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [{id:"1",url:"/photos/1.jpg",movieName:"寻觅环游记",score:100.0},
            {id:"2",url:"/photos/2.jpg",movieName:"魔法精灵2",score:100.0},
            {id:"3",url:"/photos/3.jpg",movieName:"战狼3",score:100.0},
            {id:"4",url:"/photos/2.jpg",movieName:"无敌最俊朗",score:100.0},
            {id:"5",url:"/photos/3.jpg",movieName:"寻觅环游记",score:100.0}], 
            count:10,
        }
    }
 
    render() {
        return <div>
            {this.renderList()}
        </div>
 
    }
 
    renderList = () => {
      return (
        <div className="listMovie">
          <div >
           <span className='listName'>正在热映 &nbsp; </span>
           <span>共{this.state.count}部电影</span>

           <div className='Page'>
           <span className='previous_page'> <LeftOutlined />上一页</span>
           <span className='next_Page'>下一页<RightOutlined /></span>
           </div>    
          </div>
          <div className='context'>
                {this.state.movies.map((item) => {
                    return <MovieItem  {...item} key={item.id}></MovieItem>;
                })}
          </div>
          
          
        </div>
      );
    };
}

 
 