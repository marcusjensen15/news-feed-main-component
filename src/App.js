import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { useMediaQuery } from 'react-responsive';


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

  //insert div to put newsFeedback sidebar components inside so they stack correctly


render(){
  return (
    <div className="App">
      <div className="Container">
          <NewsFeedMain newsFeedMainData={this.state.newsFeedMainData}/>
          <div className="newsFeedSidebarContainer">
            <NewsFeedSideBar newsFeedbackSideBarData={this.state.newsFeedbackSideBarData[0]}/>
            <NewsFeedSideBar newsFeedbackSideBarData={this.state.newsFeedbackSideBarData[1]}/>
            <NewsFeedSideBar newsFeedbackSideBarData={this.state.newsFeedbackSideBarData[1]}/>
            <NewsFeedSideBar newsFeedbackSideBarData={this.state.newsFeedbackSideBarData[1]}/>
            <NewsFeedSideBar newsFeedbackSideBarData={this.state.newsFeedbackSideBarData[1]}/>
            <NewsFeedSideBar newsFeedbackSideBarData={this.state.newsFeedbackSideBarData[1]}/>
          </div>
      </div>



    </div>


    );
  }
}

export default App;
