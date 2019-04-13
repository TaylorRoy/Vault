import axios from "axios"
import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import Form from "../Form/Form";
import Button from "../Button/Button";
import Input from "../Input/Input";;

class CreateUser extends Component {
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

    createUser =(event) => {
        event.preventDefault();
        axios.post("/api/createuser", {
            username:this.state.username,
            password: this.state.password
        })
        .then(res=> this.setState({username:"", password:""}))
        .catch((err) => {console.log("createUser error", err)})
    };

    render(){
        return(

        <div>
            <NavBar />
            <p>Welcome to reset password page.</p>
    
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

             <Button type="submit" value="Submit" onClick= {this.createUser}>Submit</Button>
            
            </Form>
        </div>
        );
    };
};

export default CreateUser;