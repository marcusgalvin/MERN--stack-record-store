import React, { Component } from 'react';  //add componets 
import AllUsers from './components/AllUsers';
import UserInfo from './components/UserInfo';
import UserRegistration from './components/UserRegistration';
import User from './components/User';

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


<div id ="mainDiv">
<div id ="header">
<div id ="label">
</div>
    <h2 style = {{color: "red", textAlign: "center"}}>MAG's Records & More</h2>
    <p id ="top">About us</p>
    <p id ="top">Hours of Operation</p>
    <p id ="top">Gallery</p>
    <p id ="top">Best Seller's</p>
    <p id ="top">Contact Us</p>
</div>

<div id="midDiv">
   
<div id = "buysell">

   <div id ="sellMusic">
    <a 
    className ="floating-placeholder"
    style={{margin: "10px"}}
    href ="#"
    onClick={() => this.setState({ pageView: <UserRegistration setData={this.updateData} /> })}
    >Sell Music </a>

    </div>

    <div id ="buyMusic">
    <a
     style={{margin: "10px"}}
      href ="#"
          onClick={() => this.setState({ pageView:   < UserInfo data={this.state.data}/>  })}
      >Buy Music</a>
      </div>
<br />

      
</div>
<div id ="state">
    {this.state.pageView}

</div>

    <a 
    style={{margin: "10px"}}
     href ="#"
               onClick={() => this.setState({ pageView:  < AllUsers setAllUsers = {this.getAllUsers} data={this.state.data} />   })}
     >Browse Entire Library</a>


</div>
    <br />



<div id ="bottomDiv">
<h2>A Simple Web App for Vinyl Enthusiasts</h2>
<p>Designed for Purchasing and Selling Used Records, CD's, and Cassettes</p>

</div>


    </div>


  
);
}
}
export default App;
