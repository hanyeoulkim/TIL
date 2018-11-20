import React from "react";
import './Navigation.css';

export default function Navigation() {
  return (
    <div className="row">
      <div className="col-sm-2"><a href="#">Activit'ng</a></div>
      <div className="col-sm-2"><a href="#">Club Schedule</a></div>
      <div className="col-sm-2"><a href="#">Today's Match</a></div>
      <div className="col-sm-2"><a href="#">Subscription</a></div>
      <div className="col-sm-2"><a href="#">Dev Team</a></div>
      <div className="col-sm-2"><a href="#">FAQ</a></div>
    </div>
  );
}
