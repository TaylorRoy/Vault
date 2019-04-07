import React, { Component } from "react";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Consumer from "../../GlobalState";

class NewPassword extends Component {

    state = {
        username: "",
        password: ""
    };

   handleInputChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleClick = (event) => {
        event.preventDefault();
        alert(`Username${this.state.username}\nPassword ${this.state.password}`);
        this.setState({username:"", password: ""});
    };

    createNewPassword = (event) => {
        event.preventDefault();
        console.log("in createNewPassword");
        console.log("props", this.props.global)
        axios.post("/api/newpassword", {
          username: this.state.username,
          password: this.state.password,
          userId: this.props.global.id
        })
          .then(this.props.history.push('/newpassword'))
          .catch((err) => console.log("login error", err));
      };
 
//     render() {
//      return(
//         <div>
//          <NavBar />
//          <p>Welcome to new password page.</p>
//          <p> username: {this.state.username} </p>
//          <Form>
            
//             <Input
//                 type= "text"
//                 placeholder="Username"
//                 name="username"
//                 value={this.state.username}
//                 onChange={this.handleInputChange}
//               />

//             <Input
//                 type= "password"
//                 placeholder="Password"
//                 name="password"
//                 value={this.state.password}
//                 onChange={this.handleInputChange}
//               />  

//               {/* <select>
//                   <opiton value="banking">Banking</opiton>
//                   <opiton value="email">Email</opiton>
//                   <opiton value="entertainment">Entertainment</opiton>
//                   <opiton value="home">Home</opiton>
//                   <opiton value="insurance">Insurance</opiton>
//                   <opiton value="investments">Investments</opiton>
//                   <opiton value="miscellaneous">Miscellaneous</opiton>
//                   <opiton value="work">Work</opiton>
//               </select>           */}

//              <Button type="submit" value="Submit" onClick= {this.createNewPassword}>Submit</Button>
//          </Form>
         
//      </div>
//      ) 
//  };
// }; 

render() {
    return (
      <Consumer>
        {(global) => (
           <div>
         <NavBar />
         <p>Welcome to new password page.</p>
         <p> username: {this.state.username} </p>
         <Form>
            
            <Input
                type= "text"
                placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
              />

            <Input
                type= "password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />  

              {/* <select>
                  <opiton value="banking">Banking</opiton>
                  <opiton value="email">Email</opiton>
                  <opiton value="entertainment">Entertainment</opiton>
                  <opiton value="home">Home</opiton>
                  <opiton value="insurance">Insurance</opiton>
                  <opiton value="investments">Investments</opiton>
                  <opiton value="miscellaneous">Miscellaneous</opiton>
                  <opiton value="work">Work</opiton>
              </select>           */}

             <Button type="submit" value="Submit" onClick= {this.createNewPassword}>Submit</Button>
         </Form>
         <p>username:{global.state.username}</p>
         <p>id: {global.state.id}</p>
         
     </div>
    )}
      </Consumer>
    );
  }
}

export default NewPassword;

// export default props => (
//     <Consumer>
//       {(global) => {
//           console.log("consumer newpassword props", props)
//           console.log("consumer newpassword global", global)
//         return <NewPassword {...props} global={global} />
//       }}
//     </Consumer>
//   )

//   export default props => (
//     <Consumer>
//       {(global) => {
//           console.log("consumer newpassword props", props)
//           console.log("consumer newpassword global", global)
//         return <NewPassword {...props} global={global} />
//       }}
//     </Consumer>
//   )

// export default NewPassword;
