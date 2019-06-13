import React, { Component } from 'react';  //add componets 
import AllUsers from './components/AllUsers';
import UserInfo from './components/UserInfo';
import UserRegistration from './components/UserRegistration';
import User from './components/User';
import NavBar from './components/NavBar';
import axios from 'axios';

class App extends Component {

state = {
  pageView: ""
}


// state = {
// data : " ",
// allUsers: " "
// pageView: " "
// }











getAllUsers = () => {
  this.setState ({
    allUsers: this.state.data
  })
  this.forceUpdate()
}

updateData = (newData) => {
  this.setState({
    data: newData
  })
}

render(){
  return (

<div id="app">

<div id="icon"></div>
   <div id ="title">
                <h2>MAG's Records & more</h2>
        </div> 
        
<NavBar />


<div id ="app1">

<div id="sellMusic">
    <a 
    className ="floating-placeholder"
    style={{margin: "10px"}}
    href ="#"
    onClick={() => this.setState({ pageView: <UserRegistration setData={this.updateData} /> })}
    >Sell Music </a>
</div>
   <br />


    <div id ="buyMusic">
    <a
        className ="floating-placeholder"

     style={{margin: "10px"}}
      href ="#"
          onClick={() => this.setState({ pageView:   < UserInfo data={this.state.data}/>  })}
      >Buy Music</a>
      </div>
<br />

      

    <a 
    style={{margin: "10px"}}
     href ="#"
               onClick={() => this.setState({ pageView:  < AllUsers setAllUsers = {this.getAllUsers} data={this.state.data} />   })}
     >Browse Entire Library</a>

    {this.state.pageView}


    <br />

</div>

<div id="message">
<h2>A Simple Web App for Vinyl Enthusiasts</h2>
<p>Designed for Purchasing and Selling Used Records, CD's, and Cassettes</p>
</div>
</div>


 


  
);
}
}
export default App;
