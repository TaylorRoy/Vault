import React from "react";

const Button = (props) => (
    <div>
        <button {...props} >{props.children}</button>
    </div>
);

export default Button