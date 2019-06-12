import React, { Component } from 'react'
import axios from 'axios'
import User from './User';

class UserInfo extends Component {
    state = {
    userName: " ",
    result: " "
  }
  




getUserInfo = () => {
  console.log("state",this.state);
    console.log("props",this.props);
    this.setState({
      result: this.props.data
    })
    
axios.get("/showprofile/:username", function(req, res){    //:username is a parameter and a variable
   const user = req.params.username    //get username from paramater, inside the URL, store in const 'user'
    console.log(user)

    User.find({username:user}) //username is the key value is user
        .then(result => {
            console.log("Showing", user, "profile:", result)
            res.send(result)
        }).catch(err => {
            console.log(err)
        })

})


}



  render() {
    return (
      <div>
        
    <input 
    onChange = { e => this.setState({
        
          userName: e.target.value
        
      })}
    placeholder="user name" 
    type="text" 
    />

    <button onClick={this.getUserInfo}>Get User Info</button>  {/* use bracket notation to call a button/method*/}
<br />
        {this.state.result}    {/* all you need to display data on page + change the method getUserInfo + state*/}
      </div>
    )
  }
}

export default UserInfo