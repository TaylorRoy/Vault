import React from "react";
// import "./password.css";

const Password = props => (

    <div className="passwordContainer col-md-6">
        <p>IT EXCHANGE</p>
        {/* <img style={{width:"100%", height: "auto"}} src="https://files.slack.com/files-pri/TBLFR8X19-FFKN28WC9/screen_shot_2019-01-22_at_2.31.13_pm.png"/> */}
            <h1> Username:{props.username} Password: {props.lastname}</h1>
            {/* <h2> Company: {props.company}</h2> */}
    </div>
);


export default Password;