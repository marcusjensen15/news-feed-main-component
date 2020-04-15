import React from 'react';
import PropTypes from 'prop-types';



export default function NewsFeedSideBar(props){

return(
  <div>
    <p className="test2">{props.newsFeedbackSideBarData[0].content}</p>
  </div>

);

}

NewsFeedSideBar.propTypes = {
  newsFeedbackSideBarData: PropTypes.array
};
