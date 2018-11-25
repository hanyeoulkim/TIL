import React from "react";
import './Navigation.css';

export default function Navigation() {
  return (
    <div className="row">
      <ul className="nav nav-pills nav-justified">
        <li><a href="#">Activit'ng</a></li>
        <li><a href="#">Club Schedule</a></li>
        <li><a href="#">Today's Match</a></li>
        <li><a href="#">Subscription</a></li>
        <li><a href="#">Dev Team</a></li>
        <li><a href="#">FAQ</a></li>
      </ul>
    </div>
  );
}
