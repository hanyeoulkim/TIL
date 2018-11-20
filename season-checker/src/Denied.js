import React from "react";

export default function Denied(props) {
  return (
    <div className="error ui active dimmer" style={{ color: "white" }}>
      <i
        className="error ui active massive eye slash icon"
        style={{ color: "white" }}
      />
    
        <h2>ERROR!</h2>
      <h3>{props.message}</h3>
    </div>
  );
}
