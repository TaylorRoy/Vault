import React, { Component } from "react";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Button from "../Button/Button";
// import { connect } from "react-redux";

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

    createUser = (event) => {
        event.preventDefault();
        console.log("login hit");
        axios.post("/api/login", {
          username: this.state.username,
          password: this.state.password
        })
          .then(this.props.history.push('/newpassword'))
          .catch((err) => console.log("login error", err));
      };
 
    render() {
     return(
        <div>
         <NavBar />
         <p>Welcome to new password page.</p>
         
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

             <Button type="submit" value="Submit" onClick= {this.createUser}>Submit</Button>
         </Form>
     </div>
     ) 
 };
};    

// function mapStateToProps(state){
//     return {
//         username:state.username,
//         password: state.password
//     };
// };

// function mapDispatchToProps(dispatch){
//     return {
//         handleClick: () => {
//             console.log("submit clicked")
//             const action = {type: "ADD"};
//             dispatch(action);
//         }
//     }
// }

export default NewPassword;
// export default connect(mapStateToProps, mapDispatchToProps)(NewPassword) ;