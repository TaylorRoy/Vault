import React from "react";

const Input = (props) => (
    <div> 

    <form className="form-inline my-2 my-lg-0">
    <strong>{props.placeholder}:</strong>
        <input
          className="form-control mr-sm-2"
            {...props}
          />

      </form>

</div>
)

export default Input;