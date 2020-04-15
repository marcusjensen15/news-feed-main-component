import React from 'react';
import logo from './logo.svg';
import './App.css';

//Dummy data object

import testJsonObject from './test_json_object.js'

//Components

import NewsFeedMain from './components/NewsFeedMain';
import NewsFeedSideBar from './components/NewsFeedSideBar';



class App extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      masterNewsList: testJsonObject,
      newsFeedMainData: testJsonObject[0],
      newsFeedbackSideBarData: [testJsonObject[1],testJsonObject[2]]
    };
  }


render(){
  return (
    <div className="App">
      <div className="Container">

          <NewsFeedMain newsFeedMainData={this.state.newsFeedMainData}/>
          <NewsFeedSideBar newsFeedbackSideBarData={this.state.newsFeedbackSideBarData}/>
      </div>
    </div>
    );
  }
}

export default App;
