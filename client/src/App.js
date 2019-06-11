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


<div style = {{margin: "10px", textAlign: "center"}}className="Inputs">
    <div style ={{margin: "10px", textAlign: "center"}}className="App">
    <h2>MAG's Records & More</h2>

    <a 
    id ="hello"
    style={{margin: "10px"}}
    href ="#"
    onClick={() => this.setState({ pageView: <UserRegistration setData={this.updateData} /> })}
    >Sell Music </a>

    
    <a
     style={{margin: "10px"}}
      href ="#"
          onClick={() => this.setState({ pageView:   < UserInfo data={this.state.data}/>  })}
      >Buy Music</a>
<br />
<br />


    <a 
    style={{margin: "10px"}}
     href ="#"
               onClick={() => this.setState({ pageView:  < AllUsers setAllUsers = {this.getAllUsers} data={this.state.data} />   })}
     >Browse Entire Library</a>


</div>
    <br />
    {this.state.pageView}
     
     
     
  {/*data is a property (prop) name*/}
  {/*//imported from AllUsers.js*/}

    </div>
  
);
}
}
export default App;
