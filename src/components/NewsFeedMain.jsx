import React from 'react';
import PropTypes from 'prop-types';


export default function NewsFeedMain(props){

//Function to limit char length of content. This will keep the div from becoming huge in the event of a long article.

function capContentLength(string){
      let displayString="";

      if(string.length >= 500){
        displayString = string.slice(0,500);
        return displayString + "...";
      }
    }

return(
  <div className="test1">
    <h3 className="headerUnderline">{props.newsFeedMainData.newsFeed}</h3>
    <div className="newsFeedImageContainer">
      <img className ="newsFeedImage"src="https://via.placeholder.com/1000x300" alt="350x150 image"></img>
    </div>
    <h5 className="subHeaderMain">{props.newsFeedMainData.subHeader}</h5>
    <p className="newsFeedMainContent">{capContentLength(props.newsFeedMainData.content)}</p>
    <div className="newsFeedLink">
      <a className="removeLinkLine"href={props.newsFeedMainData.articleLink}> Link for more > </a>
    </div>

  </div>

);
}
