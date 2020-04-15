import React from 'react';
import PropTypes from 'prop-types';



export default function NewsFeedSideBar(props){

return(
  <div className="test2">
    <p>{props.newsFeedbackSideBarData[0].content}</p>
    <p>{props.newsFeedbackSideBarData[0].content}</p>

  </div>

);

}

NewsFeedSideBar.propTypes = {
  newsFeedbackSideBarData: PropTypes.array
};
