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




//   componentDidMount = async () => {
//   let masterList = testJsonObject;
//   // let masterListSlice = masterList.slice(1,3);
//
//    await this.setState({masterNewsList: masterList})
//    await this.setState({newsFeedMainData: masterList[0]})
//    await this.setState({newsFeedbackSideBarData: [masterList[1],masterList[2]] })
//    await console.log(this.state);
// }

render(){
  return (
    <div className="App">
      <NewsFeedMain newsFeedMainData={this.state.newsFeedMainData}/>
      <NewsFeedSideBar newsFeedbackSideBarData={this.state.newsFeedbackSideBarData}/>
    </div>
    );
  }
}

export default App;
