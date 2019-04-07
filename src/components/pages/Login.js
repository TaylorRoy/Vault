import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
import Input from "../Input/Input"
import Button from "../Button/Button";
import axios from "axios";
import Consumer from "../../GlobalState";

class Login extends Component {

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

  // handleClick = (event) => {
  //   event.preventDefault();
  //   alert(`Username${this.state.username}\nPassword ${this.state.password}`);
  //   this.setState({ username: "", password: "" });
  // }

  // When the form is submitted, use the API.saveUser method to save the user data
  // Then reset username and password to "".
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   alert("in handleformsubmit");

  //     API.saveUser({
  //       username: this.state.username,
  //       password: this.state.password
  //     })
  //     .then(res => this.clearInput)

  //     .catch(err => console.log(err))
  //     console.log(this.state);

  // };

  // clearInput = () => {
  //   this.setState({ username: "", password: "" })
  // };

  // When the component mounts, load all books and save them to this.state.books
  //  componentDidMount() {
  //   this.clearInput();
  // }

  // Loads all books  and sets them to this.state.books
  // loadBooks = () => {
  //   console.log("in loadBooks");
  // };

 

  //verify login with express sessions
  login = (event) => {
    event.preventDefault();
    console.log("verifyLogin frontend", this.state.username);
    axios.post("/api/verify/login", {
      username: this.state.username,
      password: this.state.password
    })
      .then((res) => {
        console.log("verifyLogin res", res)
        console.log("verifyLogin this.props", this.props)
        console.log("verifyLogin res.data", res.data)
        this.props.global.setAuthRes(res.data)
      })
      // .then(this.setState({ username: "", password: "" }))
      .catch((err) => {
        console.log("verifyLogin error", err)
      })
  }


  render() {
    return (
      <div>
        <NavBar />
        <p>Welcome to login page.</p>

        <Form>

          <Input
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />

          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />

          <Button type="submit" title="Test" onClick={this.login}>Login</Button>

          <Link
            to="/resetpassword"
            className={
              window.location.pathname === "/resetpassword" ? "nav-link active" : "nav-link"
            }
          >
            Reset Password?
            </Link>
        </Form>
      </div>
    )
  }
};

export default props => (
  <Consumer>
    {(global) => {
      console.log("consumer Login props", props)
      console.log("consumer Login global", global)
      return <Login {...props} global={global} />
    }}
  </Consumer>
)