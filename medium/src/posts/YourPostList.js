import React, { Component } from 'react';
import PostData from '../data/your-articles.json';
import Author from './Author';
import '../styles/author.css';
import '../styles/PostCard.css';

class PostList extends Component {
  render() {
    return (
      <ul>
        {PostData.map((postDetail, index)=>{
            return<li key={index} className="Columns">
            <div className="PostCard">
                <img src={postDetail.image} alt="img" className="PostCardImage"></img>
                <div className="PostCardContent">
                  <h2>{postDetail.title}</h2>
                  <p>{postDetail.description}</p>
                  
                  {/* <a href={postDetail.link}>link text</a> */}
                  <Author
                    image={postDetail.author.image}
                    name={postDetail.author.name}
                    postedDate={postDetail.postedDate}
                    minutesToRead={postDetail.minutesToRead}
                  />
                </div>
                </div>
                </li>
        })}
       
      </ul>
    );
  }
}

export default PostList;
