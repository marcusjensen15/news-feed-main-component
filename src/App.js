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
      masterNewsList: [],
      newsFeedMainData: {},
      newsFeedbackSideBarData: {}
    };
  }




  componentDidMount = async() => {
  let masterList = testJsonObject;

  await this.setState({masterNewsList: masterList})
  await this.setState({newsFeedMainData: masterList[0]})
  await this.setState({newsFeedbackSideBarData: masterList.slice(1,3)})
  await console.log(this.state);
}

render(){
  return (
    <div className="App">
      <NewsFeedMain/>
      <NewsFeedSideBar/>
    </div>
    );
  }
}

export default App;
