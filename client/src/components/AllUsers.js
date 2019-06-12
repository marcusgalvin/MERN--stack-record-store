import React from 'react'
import axios from 'axios'
import User from './User';


 function AllUsers(props) {
   var result = "";

     const getAllUsers = () => {
         console.log("getting all users")

          result = props.data

          console.log("result: ", result);

          props.setAllUsers()


// axios.get("/getallusers", function(req, res){
// User.find()
// .then(results  => {  
//     console.log(results)    //result = response just like in a promise
    
//     res.send(results)
// })
// })

     }



// class  AllUsers extends Component {
//     state = {
//         display: []
//     }
//     componentDidMount() {
//         axios.get("/getallusers")
//             .then(res => {
//                 const posts = res.data
//                 console.log(res.data)
//                 this.setState({ display })
//             }).catch(err => console.log(err))
//     }


// render(){

// return (

// <div id="displayUsers">

//     <button onClick={this.state.posts}>Submit</button>

// </div>

// )
  
// }



  return (
      
    <div>
      <h3>Get all Users</h3>
     <button onClick= { getAllUsers }>get all users</button>
     <br />
     {result}

    </div>
  )
}

export default AllUsers;


