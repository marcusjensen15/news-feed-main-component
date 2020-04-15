import React from 'react';
import PropTypes from 'prop-types';


export default function NewsFeedMain(props){

return(
  <div className="test1">
    <h3 className="headerUnderline">{props.newsFeedMainData.newsFeed}</h3>
    <h5 className="subHeaderMain">{props.newsFeedMainData.subHeader}</h5>
    <p className="newsFeedMainContent">{props.newsFeedMainData.content}</p>
    <div className="newsFeedLink">
      <a href={props.newsFeedMainData.articleLink}> Link for more > </a>
    </div>
    <div className="newsFeedImageContainer">
      <img className ="newsFeedImage"src="https://via.placeholder.com/1000x150" alt="350x150 image"></img>
    </div>
  </div>

);
}
