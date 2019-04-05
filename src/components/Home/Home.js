import React, { Component } from 'react';
import axios from "axios";
import './Home.css';


class Home extends Component {

  login= () => {
      axios.post("/api/login", {})
      .then((res)=> {
        console.log("login" ,res)
      })
      .catch((err)=>console.log(err));
  };


  render() {
    return (
      <div className="home">

          <button onClick={this.login}>click</button>

      </div>
    );
  }
}


export default Home;