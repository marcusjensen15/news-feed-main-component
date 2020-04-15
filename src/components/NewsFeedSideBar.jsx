import React from 'react';
import PropTypes from 'prop-types';



export default function NewsFeedSideBar(props){

//write function to cut off text at certain char limit. This way it won't overflow and break div

function capContentLengthSideBar(string){
      let displayString="";

      if(string.length >= 100){
        displayString = string.slice(0,100);
        return displayString + "...";
      }
    }


return(
  <div className="test2">
    <h1 className="newsFeedSideBarHeader">{props.newsFeedbackSideBarData.newsFeed}</h1>
    <div className="newsFeedImageContainer">
      <img className ="newsFeedSidebarImage"src="https://via.placeholder.com/300x80" alt="350x150 image"></img>
    </div>
    <p className="newsFeedSidebarContent">{capContentLengthSideBar(props.newsFeedbackSideBarData.content)}</p>


  </div>

);

}

NewsFeedSideBar.propTypes = {
  newsFeedbackSideBarData: PropTypes.object
};
