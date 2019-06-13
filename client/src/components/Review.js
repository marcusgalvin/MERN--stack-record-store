import React, { Component } from 'react'

export default class Review extends Component {
  render() {
    return (
      <div>
        <div
      id ="sellDiv" 
       style ={{margin: "10px", textAlign: "center"}}className="App"
       >
        
<h3>- Please Fill out the Form -</h3>
    <input
      className ="floating-placeholder"
    style ={{color: "red"}}
    onChange={ e => this.setState({  userName: e.target.value })}
     placeholder="Full Name" 
     type="text" 
     />
<br />
    <input 
    onChange= { e => this.setState({message: e.target.value })}
    placeholder="Message" 
    type="text" 
    />
<br />

    <input 
    onChange= { e => this.setState({artist: e.target.value })}
    placeholder="Artist Name" 
    type="text" 
    />
<br />

    <input 
    onChange= { e => this.setState({album: e.target.value })}
    placeholder="Album Name" 
    type="text" 
    />
<br />

    <input 
    id ="first"

    onChange= { e => this.setState({productType: e.target.value })}
    placeholder="(Extra Comments...)" 
    type="text" 
    />

<br />

    <button onClick={ this.registerUser }>Submit</button>

 </div>


      </div>
    )
  }
}
