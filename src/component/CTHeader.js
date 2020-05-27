import React from "react";

let state;
state={
    color:"white",
    background:"black",
    height:"13vh",
    fontSize:"3em"
}
function CTHeader() {
    return (
        <div style={state}>
            <p>Personal Information</p>
        </div>
    );
}

export default CTHeader