import React from 'react';
import PropTypes from 'prop-types';


export default function NewsFeedMain(props){

return(
  <div className="test1">
    <h3 className="headerUnderline">{props.newsFeedMainData.newsFeed}</h3>
    <h5 className="subHeaderMain">{props.newsFeedMainData.subHeader}</h5>
    <p>{props.newsFeedMainData.content}</p>
  </div>

);
}
